# Quote/Cotización System

Complete quote request system with form validation, file upload, and success confirmation.

## Components Implemented

### 1. Quote Store (`stores/quote-store.ts`)
Zustand store for global state management:
- `isOpen`: Modal visibility state
- `selectedService`: Pre-selected service ID
- `openQuoteModal(service?)`: Open modal with optional pre-selected service
- `closeQuoteModal()`: Close modal and reset state

### 2. Validation Schema (`lib/validations.ts`)
Enhanced quote form validation with Zod:
- **name**: 3-100 characters
- **phone**: Flexible format - (787) 123-4567 or 787-123-4567
- **email**: Optional, valid email format
- **location**: 3-100 characters
- **service**: Required selection
- **notes**: Optional, max 1000 characters
- **attachment**: Optional file (JPG, PNG, PDF) max 5MB

### 3. Quote Modal (`components/shared/QuoteModal.tsx`)
Full-featured modal with:
- Multi-step form with validation
- File upload with preview
- Loading states
- Success confirmation with quote number
- WhatsApp integration
- Responsive design
- Keyboard accessible

## Features

### Form Fields
1. **Nombre Completo** - Required text input
2. **Teléfono** - Required with Puerto Rico format validation
3. **Email** - Optional email input
4. **Ubicación del Proyecto** - Required location
5. **Servicio de Interés** - Required dropdown with 12 options
6. **Detalles del Proyecto** - Optional textarea
7. **Adjuntar Archivo** - Optional file upload (images/PDF)

### Service Options
- Diseño de Red Empresarial
- Instalación de Fibra Óptica
- Red Wi-Fi Corporativa
- Sistema de CCTV Completo
- Expansión de Cámaras
- Control de Acceso Biométrico
- Automatización de Portones
- Sistema de Alarmas
- Consultoría Técnica
- Contrato de Soporte
- Otro (especificar en notas)

### Success State
After submission:
- Generated quote number (format: ITSS-2025-XXX)
- Confirmation checklist
- WhatsApp quick action button
- Close button

## Integration

### In Layout (`app/layout.tsx`)
```typescript
import { QuoteModal } from '@/components/shared/QuoteModal'

// In body
<QuoteModal />
```

### Usage in Components
```typescript
'use client'
import { useQuoteStore } from '@/stores/quote-store'

export function MyComponent() {
  const { openQuoteModal } = useQuoteStore()

  return (
    <button onClick={() => openQuoteModal()}>
      Solicitar Cotización
    </button>
  )
}
```

### Pre-select Service
```typescript
<button onClick={() => openQuoteModal('cctv-instalacion')}>
  Cotizar CCTV
</button>
```

## Current Implementation

### Hero Section
The main hero has two CTA buttons:
1. **Solicitar Cotización** - Opens quote modal
2. **WhatsApp** - Direct WhatsApp link

### Where to Add Quote Buttons
Consider adding quote buttons to:
- Service detail pages
- Portfolio project pages
- Service cards
- Footer
- Pricing tables (when implemented)

## Future Enhancements (TODO)

1. **Supabase Integration**
   - Save quotes to database
   - Upload attachments to storage
   - Send email confirmations
   - Track quote status

2. **Admin Dashboard**
   - View all quotes
   - Update quote status
   - Respond to quotes
   - Analytics

3. **User Account**
   - View quote history
   - Track quote status
   - Edit submitted quotes

4. **Notifications**
   - Email confirmation to user
   - Email alert to admin
   - WhatsApp notification
   - SMS confirmation

## Technical Notes

- Uses Zustand for state management (already in package.json)
- Uses Zod for form validation (already in package.json)
- Uses react-hook-form (already in package.json)
- File validation on client side
- Quote number generation uses timestamp + random
- Form resets on modal close
- Success state persists until modal close

## Build Status

✅ All components built successfully
✅ Type checking passed
✅ No build errors
✅ 27 static pages generated
