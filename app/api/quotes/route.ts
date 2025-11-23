import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/BoltDatabaseClient'
import { z } from 'zod'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0

const MAX_FILE_SIZE = 5 * 1024 * 1024

// Helper: normalize strings
const s = (v: unknown) => (typeof v === 'string' ? v.trim() : '')

const quoteSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters').max(100),
  email: z.string().email('Invalid email').or(z.literal('')).optional(),
  phone: z.string().min(1, 'Phone is required').max(50),
  service: z.string().min(1, 'Service is required').max(100),
  message: z.string().max(2000).optional(),
  location: z.string().min(3, 'Location must be at least 3 characters').max(100),
})

export async function POST(request: NextRequest) {
  try {
    // Parse multipart form data
    const formData = await request.formData()

    // Extract and normalize all fields
    const rawData = {
      name: s(formData.get('name')),
      email: s(formData.get('email')),
      phone: s(formData.get('phone')),
      service: s(formData.get('service')),
      message: s(formData.get('message') ?? formData.get('notes')),
      location: s(formData.get('location')),
    }

    // Validate with Zod
    const validatedData = quoteSchema.parse(rawData)

    // Handle file upload (optional)
    const file = formData.get('file') as File | null
    if (file && file.size > 0) {
      if (file.size > MAX_FILE_SIZE) {
        console.error('[api/quotes] File too large:', file.size)
        return NextResponse.json(
          { ok: false, error: 'File size exceeds 5MB limit' },
          { status: 400 }
        )
      }
      console.log('[api/quotes] File received but storage not configured, continuing without file')
    }

    console.log('[api/quotes] Inserting quote request for:', validatedData.name)

    // Insert into Supabase database
    const result = await db.insert('quote_requests', {
      name: validatedData.name,
      email: validatedData.email || '',
      phone: validatedData.phone,
      service: validatedData.service,
      message: validatedData.message || null,
      location: validatedData.location,
    })

    const insertedId = result[0]?.id

    console.log('[api/quotes] Successfully created quote request:', insertedId)

    // ALWAYS return JSON
    return NextResponse.json(
      { ok: true, id: insertedId, data: result[0] },
      { status: 200 }
    )

  } catch (error) {
    // Validation errors
    if (error instanceof z.ZodError) {
      console.error('[api/quotes] Validation error:', error.errors)
      return NextResponse.json(
        { ok: false, error: 'Invalid form data', details: error.errors },
        { status: 400 }
      )
    }

    // All other errors - ALWAYS return JSON, never HTML
    console.error('[api/quotes] submission error:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'

    return NextResponse.json(
      { ok: false, error: `Failed to submit quote: ${message}` },
      { status: 500 }
    )
  }
}
