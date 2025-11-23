import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/BoltDatabaseClient'
import { z } from 'zod'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0

const waitlistSchema = z.object({
  name: z.string().min(1, 'Name is required').max(200),
  email: z.string().email('Invalid email'),
  phone: z.string().max(50).optional(),
})

export async function POST(request: NextRequest) {
  let submittedEmail = ''

  try {
    const body = await request.json()
    const validatedData = waitlistSchema.parse(body)
    submittedEmail = validatedData.email

    console.log('[api/waitlist] Adding to waitlist:', validatedData.email)

    const result = await db.insert('waitlist', {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone || null,
      interests: [],
    })

    console.log('[api/waitlist] Successfully added to waitlist:', result[0].id)
    return NextResponse.json({ ok: true, data: result[0] }, { status: 200 })

  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('[api/waitlist] Validation error:', error.errors)
      return NextResponse.json(
        { ok: false, error: 'Invalid form data', details: error.errors },
        { status: 400 }
      )
    }

    const message = error instanceof Error ? error.message : 'Unknown error'

    if (message.includes('duplicate') || message.includes('unique')) {
      console.error('[api/waitlist] Duplicate email:', submittedEmail)
      return NextResponse.json(
        { ok: false, error: 'duplicate', message: 'Email already registered' },
        { status: 409 }
      )
    }

    console.error('[api/waitlist] submission error:', error)

    return NextResponse.json(
      { ok: false, error: `Failed to add to waitlist: ${message}` },
      { status: 500 }
    )
  }
}
