import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/BoltDatabaseClient'
import { z } from 'zod'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(200),
  email: z.string().email('Invalid email'),
  phone: z.string().max(50).optional(),
  subject: z.string().min(1, 'Subject is required').max(200),
  message: z.string().min(1, 'Message is required').max(5000),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    console.log('[api/contacts] Creating contact for:', validatedData.email)

    const contactResult = await db.insert('contacts', {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone || null,
      subject: validatedData.subject,
      message: validatedData.message,
    })

    const contactId = contactResult[0].id

    try {
      await db.insert('contact_messages', {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        subject: validatedData.subject,
        message: validatedData.message,
      })
    } catch (messageError) {
      console.error('[api/contacts] Failed to create message entry (non-critical):', messageError)
    }

    console.log('[api/contacts] Successfully created contact:', contactId)
    return NextResponse.json({ ok: true, data: contactResult[0] }, { status: 200 })

  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('[api/contacts] Validation error:', error.errors)
      return NextResponse.json(
        { ok: false, error: 'Invalid form data', details: error.errors },
        { status: 400 }
      )
    }

    console.error('[api/contacts] submission error:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'

    return NextResponse.json(
      { ok: false, error: `Failed to submit contact: ${message}` },
      { status: 500 }
    )
  }
}
