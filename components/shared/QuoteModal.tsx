'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  X,
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  Loader2,
  MapPin,
  Phone,
  User,
  MessageSquare,
  Briefcase
} from 'lucide-react'
import { useQuoteStore } from '@/stores/quote-store'
import { quoteFormSchema, type QuoteFormData } from '@/lib/validations'
import { trackConversion } from '@/lib/analytics'

const services = [
  { value: '', label: 'Selecciona un servicio...' },
  { value: 'redes-diseno', label: 'Diseño de Red Empresarial' },
  { value: 'redes-fibra', label: 'Instalación de Fibra Óptica' },
  { value: 'redes-wifi', label: 'Red Wi-Fi Corporativa' },
  { value: 'cctv-instalacion', label: 'Sistema de CCTV Completo' },
  { value: 'cctv-expansion', label: 'Expansión de Cámaras' },
  { value: 'acceso-biometrico', label: 'Control de Acceso Biométrico' },
  { value: 'acceso-portones', label: 'Automatización de Portones' },
  { value: 'alarmas', label: 'Sistema de Alarmas' },
  { value: 'consultoria', label: 'Consultoría Técnica' },
  { value: 'soporte-contrato', label: 'Contrato de Soporte' },
  { value: 'otro', label: 'Otro (especificar en notas)' },
]

export function QuoteModal() {
  const { isOpen, selectedService, closeQuoteModal } = useQuoteStore()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [quoteNumber, setQuoteNumber] = useState('')
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      service: selectedService || '',
    },
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      setValue('attachment', file)
    }
  }

  const removeFile = () => {
    setUploadedFile(null)
    setValue('attachment', undefined)
  }

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email || '')
      formData.append('phone', data.phone)
      formData.append('service', data.service)
      formData.append('message', data.notes || '')
      formData.append('location', data.location || '')

      if (uploadedFile) {
        formData.append('file', uploadedFile)
      }

      const response = await fetch('/api/quotes', {
        method: 'POST',
        body: formData,
      })

      // Read as text first to handle potential non-JSON responses
      const raw = await response.text()
      let result: any = {}

      try {
        result = raw ? JSON.parse(raw) : {}
      } catch (parseError) {
        console.error('Failed to parse response as JSON:', raw)
        throw new Error('Server returned invalid response. Please try again.')
      }

      if (!response.ok || !result?.ok) {
        const msg = result?.error || raw || 'Failed to submit quote'
        throw new Error(msg)
      }

      const year = new Date().getFullYear()
      const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
      const qNumber = `ITSS-${year}-${random}`

      setQuoteNumber(qNumber)
      setIsSuccess(true)

      trackConversion('quote_submitted', 0)

    } catch (error) {
      console.error('Error submitting quote:', error)
      const message = error instanceof Error ? error.message : 'Error desconocido'
      alert(`Error al enviar la cotización: ${message}. Por favor intenta de nuevo.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      closeQuoteModal()
      setTimeout(() => {
        reset()
        setIsSuccess(false)
        setUploadedFile(null)
        setQuoteNumber('')
      }, 300)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-2xl bg-slate rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-skyBlue" />
                  Solicitar Cotización
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Completa el formulario y te contactamos en menos de 24 horas
                </p>
              </div>
              <button
                onClick={handleClose}
                disabled={isSubmitting}
                className="w-10 h-10 rounded-full bg-charcoal hover:bg-navy text-gray-400 hover:text-white transition-colors flex items-center justify-center disabled:opacity-50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-88px)]">
              {!isSuccess ? (
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-skyBlue" />
                      Nombre Completo *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder="Juan Pérez"
                      className={`w-full px-4 py-3 bg-charcoal text-white rounded-xl border-2 transition-colors focus:outline-none ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-transparent focus:border-skyBlue'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-skyBlue" />
                        Teléfono *
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="(787) 123-4567"
                        className={`w-full px-4 py-3 bg-charcoal text-white rounded-xl border-2 transition-colors focus:outline-none ${
                          errors.phone
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-transparent focus:border-skyBlue'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4 text-skyBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email (opcional)
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 bg-charcoal text-white rounded-xl border-2 border-transparent focus:border-skyBlue transition-colors focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-skyBlue" />
                      Ubicación del Proyecto *
                    </label>
                    <input
                      {...register('location')}
                      type="text"
                      placeholder="Ej: Mayagüez, PR o Calle Principal #123, Aguadilla"
                      className={`w-full px-4 py-3 bg-charcoal text-white rounded-xl border-2 transition-colors focus:outline-none ${
                        errors.location
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-transparent focus:border-skyBlue'
                      }`}
                    />
                    {errors.location && (
                      <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.location.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-skyBlue" />
                      Servicio de Interés *
                    </label>
                    <select
                      {...register('service')}
                      className={`w-full px-4 py-3 bg-charcoal text-white rounded-xl border-2 transition-colors focus:outline-none appearance-none cursor-pointer ${
                        errors.service
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-transparent focus:border-skyBlue'
                      }`}
                    >
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-skyBlue" />
                      Detalles del Proyecto (opcional)
                    </label>
                    <textarea
                      {...register('notes')}
                      rows={4}
                      placeholder="Cuéntanos más sobre lo que necesitas: área a cubrir, equipos existentes, presupuesto estimado, urgencia, etc."
                      className="w-full px-4 py-3 bg-charcoal text-white rounded-xl border-2 border-transparent focus:border-skyBlue transition-colors focus:outline-none resize-none"
                    />
                    {errors.notes && (
                      <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.notes.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2 flex items-center gap-2">
                      <Upload className="w-4 h-4 text-skyBlue" />
                      Adjuntar Archivo (opcional)
                    </label>
                    <p className="text-sm text-gray-400 mb-3">
                      Planos, fotos del área, diagrama existente (máx 5MB)
                    </p>

                    {!uploadedFile ? (
                      <label className="block w-full p-6 border-2 border-dashed border-gray-600 rounded-xl hover:border-skyBlue transition-colors cursor-pointer group">
                        <div className="text-center">
                          <Upload className="w-8 h-8 text-gray-400 group-hover:text-skyBlue mx-auto mb-2 transition-colors" />
                          <p className="text-gray-400 group-hover:text-white transition-colors">
                            Click para seleccionar archivo
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            JPG, PNG o PDF
                          </p>
                        </div>
                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/jpg,application/pdf"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-4 bg-charcoal rounded-xl">
                          <FileText className="w-8 h-8 text-skyBlue flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-medium truncate">
                              {uploadedFile.name}
                            </p>
                            <p className="text-sm text-gray-400">
                              {(uploadedFile.size / 1024).toFixed(0)} KB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="w-8 h-8 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-400 flex items-center justify-center transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="p-3 bg-skyBlue/10 border border-skyBlue/30 rounded-xl">
                          <p className="text-skyBlue text-xs">
                            📎 Por favor envía este archivo a <strong>itservice.pr4u@gmail.com</strong> mencionando tu número de cotización después de enviar el formulario
                          </p>
                        </div>
                      </div>
                    )}
                    {errors.attachment && (
                      <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.attachment.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#0B5FFF] to-[#FF7A00] text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-orange/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Enviar Cotización
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    Al enviar, aceptas nuestros{' '}
                    <a href="/terminos" className="text-skyBlue hover:underline">
                      términos
                    </a>
                    {' '}y{' '}
                    <a href="/privacidad" className="text-skyBlue hover:underline">
                      política de privacidad
                    </a>
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    ¡Cotización Recibida!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Hemos recibido tu solicitud exitosamente
                  </p>

                  <div className="bg-charcoal p-6 rounded-xl mb-8">
                    <p className="text-sm text-gray-400 mb-2">Número de Cotización</p>
                    <p className="text-3xl font-bold text-skyBlue font-mono">
                      {quoteNumber}
                    </p>
                  </div>

                  <div className="space-y-3 text-left bg-slate p-6 rounded-xl mb-8">
                    <div className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Un especialista revisará tu solicitud</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Te contactaremos en menos de 24 horas</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Recibirás un email de confirmación</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleClose}
                      className="flex-1 py-3 bg-gradient-to-r from-[#0B5FFF] to-[#FF7A00] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange/50 transition-all duration-300"
                    >
                      Entendido
                    </button>
                    <a
                      href={`https://wa.me/19392842551?text=Hola%2C%20acabo%20de%20enviar%20una%20cotización%20(${quoteNumber})%20y%20quisiera%20más%20información`}
                      className="flex-1 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-4 h-4" />
                      Contactar por WhatsApp
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
