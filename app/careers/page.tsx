'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Briefcase,
  GraduationCap,
  MapPin,
  Cpu,
  TrendingUp,
  CheckCircle,
  Phone,
  FileText,
  Eye,
  Wrench,
  PartyPopper,
  MessageCircle,
  Award,
  Heart,
  BookOpen,
  Upload,
  AlertCircle,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const values = [
  {
    icon: Users,
    title: 'Ambiente Familiar',
    description: 'Trabajo en equipo real, sin jerarquías rígidas. Cada opinión cuenta y cada persona importa.',
  },
  {
    icon: Briefcase,
    title: 'Proyectos Interesantes',
    description: 'Desde pequeños comercios hasta instalaciones gubernamentales. No hay días aburridos.',
  },
  {
    icon: GraduationCap,
    title: 'Aprende Constantemente',
    description: 'Certificaciones, cursos y hands-on con las últimas tecnologías (Hikvision, Ruijie, MikroTik).',
  },
  {
    icon: MapPin,
    title: 'Conoce Puerto Rico',
    description: 'Proyectos de Mayagüez a San Juan. Viaja, conoce clientes diversos y expande tu red.',
  },
  {
    icon: Cpu,
    title: 'Tech de Vanguardia',
    description: 'Trabaja con IA, analíticas, sistemas solares 4G, automatización. Siempre un paso adelante.',
  },
  {
    icon: TrendingUp,
    title: 'Oportunidad de Crecer',
    description: 'Empresa en expansión. Posibilidades reales de asumir más responsabilidad y liderar proyectos.',
  },
];

const positions = [
  {
    title: 'Técnico de Instalación',
    type: 'Full-time',
    location: 'Mayagüez (con viajes a toda la isla)',
    level: 'Junior a Senior',
  },
  {
    title: 'Técnico de Soporte',
    type: 'Full-time / Part-time',
    location: 'Remoto + visitas ocasionales',
    level: 'Semi-senior',
  },
  {
    title: 'Vendedor / Representante de Ventas',
    type: 'Comisión + Base',
    location: 'Híbrido (oficina/campo)',
    level: 'Junior a Senior',
  },
];

const processSteps = [
  {
    icon: FileText,
    title: 'Envía tu CV',
    description: 'Email a itservice.pr4u@gmail.com o usa el formulario',
    note: 'Incluye portafolio o fotos de trabajos previos si aplica',
  },
  {
    icon: Eye,
    title: 'Revisión Inicial',
    description: 'Revisamos tu perfil en 3-5 días hábiles',
    note: 'Te contactamos si hay match',
  },
  {
    icon: Users,
    title: 'Entrevista',
    description: 'Conversación con el equipo (presencial o videollamada)',
    note: 'Conoce a Carmelo y Alan, pregunta todo',
  },
  {
    icon: Wrench,
    title: 'Prueba Técnica',
    description: 'Para roles técnicos: pequeña prueba práctica o proyecto',
    note: 'Evaluamos conocimientos hands-on',
  },
  {
    icon: PartyPopper,
    title: '¡Bienvenido!',
    description: 'Onboarding, entrega de herramientas y primeros proyectos',
    note: '',
  },
];

const culture = [
  {
    icon: Award,
    title: 'Calidad Sobre Cantidad',
    quote: 'Preferimos hacer menos proyectos pero hacerlos perfectamente. Cable management impecable, documentación completa.',
  },
  {
    icon: Heart,
    title: 'Familia Primero',
    quote: 'Empresa familiar que valora el balance vida-trabajo. Entendemos compromisos personales.',
  },
  {
    icon: BookOpen,
    title: 'Aprendizaje Continuo',
    quote: 'Siempre hay algo nuevo que aprender. Certificaciones, nuevas tecnologías, mejores prácticas.',
  },
  {
    icon: MapPin,
    title: 'Orgullo Boricua',
    quote: '100% puertorriqueño, protegiendo negocios locales con tecnología de clase mundial.',
  },
];

const benefits = [
  'Salario competitivo según experiencia',
  'Herramientas y vehículo de empresa (técnicos)',
  'Capacitaciones y certificaciones pagadas',
  'Ambiente familiar y colaborativo',
  'Proyectos variados e interesantes',
  'Oportunidad de crecimiento real',
  'Flexibilidad según rol',
  'Descuentos en productos ITSS (cuando lance tienda)',
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    why: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [uploadedCV, setUploadedCV] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setUploadError('');

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setUploadError('El archivo es muy grande. Máximo 5MB.');
      return;
    }

    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!validTypes.includes(file.type)) {
      setUploadError('Formato no válido. Solo PDF, DOC o DOCX.');
      return;
    }

    setUploadedCV(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!uploadedCV) {
      setUploadError('Por favor adjunta tu CV para continuar.');
      return;
    }

    try {
      const submitFormData = new FormData();
      submitFormData.append('name', formData.name);
      submitFormData.append('email', formData.email);
      submitFormData.append('phone', formData.phone);
      submitFormData.append('position', formData.position);
      submitFormData.append('experience', formData.experience);
      if (formData.why) {
        submitFormData.append('why_itss', formData.why);
      }
      if (uploadedCV) {
        submitFormData.append('cv', uploadedCV);
      }

      const response = await fetch('/api/applications', {
        method: 'POST',
        body: submitFormData,
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Failed to submit application');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      const message = error instanceof Error ? error.message : 'Error desconocido';
      alert(`Error al enviar la aplicación: ${message}. Por favor intenta de nuevo.`);
    }
  };

  return (
    <div className="min-h-screen bg-charcoal">
      <section className="relative py-20 bg-gradient-to-br from-deepBlue to-skyBlue overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-300 rounded-full filter blur-3xl animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
              Estamos Creciendo
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Únete al Equipo ITSS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
          >
            Construye el futuro de la tecnología en Puerto Rico con nosotros
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
              12+ años creciendo
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
              120+ proyectos juntos
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
              Equipo de 6-12 personas
            </span>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Por Qué Trabajar en ITSS?
            </h2>
            <p className="text-gray-400 text-lg">
              Más que un trabajo, una familia que innova
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-elevated p-8"
                >
                  <Icon className="w-12 h-12 text-skyBlue mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Posiciones Disponibles
            </h2>
            <p className="text-gray-400 text-lg">
              Buscamos talento apasionado por la tecnología
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{position.title}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Briefcase className="w-4 h-4 text-skyBlue" />
                    <span className="text-sm">{position.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-skyBlue" />
                    <span className="text-sm">{position.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <TrendingUp className="w-4 h-4 text-skyBlue" />
                    <span className="text-sm">{position.level}</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-deepBlue to-skyBlue" asChild>
                  <a href="#apply">Aplicar a esta Posición</a>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 mb-6">
              ¿No encuentras la posición ideal? Envía tu CV de todas formas. Siempre estamos buscando talento.
            </p>
            <Button variant="outline" className="border-skyBlue text-skyBlue hover:bg-skyBlue hover:text-white" asChild>
              <a href="mailto:itservice.pr4u@gmail.com?subject=Aplicación General">
                Enviar CV General
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section id="apply" className="py-20 bg-slate">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Aplica Ahora
            </h2>
            <p className="text-gray-400 text-lg">
              Completa el formulario y adjunta tu CV
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-elevated p-8 md:p-12"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white">Nombre Completo *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-charcoal border-gray-600 text-white mt-2"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-charcoal border-gray-600 text-white mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white">Teléfono *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(787) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-charcoal border-gray-600 text-white mt-2"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="position" className="text-white">Posición de Interés *</Label>
                    <Select value={formData.position} onValueChange={(value) => setFormData({ ...formData, position: value })}>
                      <SelectTrigger className="bg-charcoal border-gray-600 text-white mt-2">
                        <SelectValue placeholder="Selecciona una posición" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="instalacion">Técnico de Instalación</SelectItem>
                        <SelectItem value="soporte">Técnico de Soporte</SelectItem>
                        <SelectItem value="vendedor">Vendedor</SelectItem>
                        <SelectItem value="otra">Otra</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="experience" className="text-white">Años de Experiencia *</Label>
                    <Input
                      id="experience"
                      type="number"
                      min="0"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="bg-charcoal border-gray-600 text-white mt-2"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="why" className="text-white">¿Por qué ITSS? (opcional)</Label>
                  <Textarea
                    id="why"
                    value={formData.why}
                    onChange={(e) => setFormData({ ...formData, why: e.target.value })}
                    className="bg-charcoal border-gray-600 text-white mt-2 min-h-[120px]"
                    placeholder="Cuéntanos por qué te gustaría trabajar con nosotros..."
                  />
                  <p className="text-gray-500 text-xs mt-2">Mínimo 200 caracteres recomendados</p>
                </div>

                <div>
                  <Label className="text-white">CV / Resumé *</Label>

                  {!uploadedCV ? (
                    <div className="mt-2">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        id="cv-upload"
                      />
                      <label
                        htmlFor="cv-upload"
                        className="block w-full p-8 border-2 border-dashed border-gray-600 rounded-xl hover:border-skyBlue transition-colors cursor-pointer group"
                      >
                        <div className="text-center">
                          <Upload className="w-12 h-12 text-gray-400 group-hover:text-skyBlue mx-auto mb-4 transition-colors" />
                          <p className="text-gray-400 group-hover:text-white transition-colors mb-2">
                            Click para subir CV/Resume
                          </p>
                          <p className="text-xs text-gray-500">
                            PDF, DOC o DOCX (máx 5MB)
                          </p>
                        </div>
                      </label>
                      {uploadError && (
                        <p className="text-red-400 text-sm mt-2">{uploadError}</p>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="mt-2 flex items-center gap-3 p-4 bg-charcoal rounded-xl border border-gray-600">
                        <FileText className="w-8 h-8 text-skyBlue flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-medium truncate">{uploadedCV.name}</p>
                          <p className="text-sm text-gray-400">
                            {(uploadedCV.size / 1024).toFixed(0)} KB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setUploadedCV(null);
                            setUploadError('');
                          }}
                          className="w-8 h-8 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-400 flex items-center justify-center transition-colors flex-shrink-0"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="p-3 bg-skyBlue/10 border border-skyBlue/30 rounded-xl">
                        <p className="text-skyBlue text-xs">
                          📎 Por favor envía tu CV a <strong>itservice.pr4u@gmail.com</strong> con el asunto "Aplicación - [Posición]" después de enviar este formulario
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-deepBlue to-skyBlue text-lg">
                  Enviar Aplicación
                </Button>

                <p className="text-gray-500 text-xs text-center">
                  Tu información es confidencial. Ver nuestra{' '}
                  <a href="/privacidad" className="text-skyBlue hover:underline">
                    política de privacidad
                  </a>
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-12 h-12 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4">¡Aplicación Recibida!</h3>
                <p className="text-gray-300 mb-6">
                  Revisaremos tu perfil y te contactaremos en 3-5 días hábiles si hay un match.
                </p>
                <p className="text-gray-400 text-sm">
                  Mientras tanto, síguenos en redes para conocer más sobre ITSS
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proceso de Aplicación
            </h2>
            <p className="text-gray-400 text-lg">
              Cómo unirte a ITSS
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-elevated p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-deepBlue to-skyBlue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-skyBlue text-sm font-semibold mb-2">Paso {index + 1}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{step.description}</p>
                  {step.note && <p className="text-gray-500 text-xs">{step.note}</p>}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestra Cultura
            </h2>
            <p className="text-gray-400 text-lg">
              Así trabajamos en ITSS
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culture.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-elevated p-8"
                >
                  <Icon className="w-12 h-12 text-skyBlue mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 italic">&ldquo;{item.quote}&rdquo;</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Beneficios de Trabajar con Nosotros
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-elevated p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-elevated p-8 md:p-12 text-center"
          >
            <AlertCircle className="w-16 h-16 text-skyBlue mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Aún No Estás Seguro?
            </h2>
            <p className="text-gray-400 mb-6">
              Conversemos sin compromiso
            </p>
            <p className="text-gray-300 mb-8">
              Si tienes preguntas sobre las posiciones, el ambiente de trabajo, o simplemente quieres conocernos mejor,
              estamos disponibles para una llamada o café.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild className="bg-gradient-to-r from-deepBlue to-skyBlue">
                <a href="https://wa.me/19392842551?text=Hola%2C%20tengo%20preguntas%20sobre%20trabajar%20en%20ITSS" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp: (939) 284-2551
                </a>
              </Button>

              <Button variant="outline" className="border-skyBlue text-skyBlue hover:bg-skyBlue hover:text-white" asChild>
                <a href="mailto:itservice.pr4u@gmail.com">
                  <FileText className="w-5 h-5 mr-2" />
                  Email: itservice.pr4u@gmail.com
                </a>
              </Button>
            </div>

            <p className="text-gray-500 text-sm">
              Síguenos en Instagram y TikTok (@itservicespr) para ver cómo trabajamos día a día
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-deepBlue to-purple-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para Construir el Futuro con ITSS?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Envía tu CV hoy y únete a una empresa en crecimiento
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                12+ años de experiencia
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                120+ proyectos completados
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                Equipo en expansión
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#apply"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-deepBlue rounded-xl font-bold hover:bg-gray-100 transition-colors"
              >
                Ver Posiciones Disponibles
              </motion.a>

              <motion.a
                href="tel:9392842551"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-deepBlue transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Llamar: (939) 284-2551
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
