import { z } from 'zod';

export const quoteFormSchema = z.object({
  name: z.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(100, 'El nombre es muy largo'),

  phone: z.string()
    .regex(/^(\+1)?[\s-]?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$/,
      'Formato inválido. Usa: (787) 123-4567 o 787-123-4567'),

  email: z.string()
    .email('Email inválido')
    .optional()
    .or(z.literal('')),

  location: z.string()
    .min(3, 'La ubicación debe tener al menos 3 caracteres')
    .max(100, 'La ubicación es muy larga'),

  service: z.string()
    .min(1, 'Selecciona un servicio'),

  notes: z.string()
    .max(1000, 'Las notas son muy largas')
    .optional(),

  attachment: z.instanceof(File)
    .optional()
    .refine(
      (file) => !file || file.size <= 5 * 1024 * 1024,
      'El archivo debe ser menor a 5MB'
    )
    .refine(
      (file) => !file || ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'].includes(file.type),
      'Solo se aceptan imágenes (JPG, PNG) o PDF'
    ),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

export const waitlistFormSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  whatsapp: z.string().regex(/^(\+1)?(787|939)\d{7}$/, 'Formato de teléfono inválido'),
  interests: z.array(z.string()).optional(),
});

export const loginFormSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export const registerFormSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().regex(/^(\+1)?(787|939)\d{7}$/, 'Formato de teléfono inválido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'],
});
