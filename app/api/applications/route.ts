import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/BoltDatabaseClient'
import { z } from 'zod'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0

const MAX_FILE_SIZE = 5 * 1024 * 1024

const applicationSchema = z.object({
  name: z.string().min(1, 'Name is required').max(200),
  email: z.string().email('Invalid email'),
  phone: z.string().min(1, 'Phone is required').max(50),
  position: z.string().min(1, 'Position is required').max(100),
  experience: z.number().min(0).max(99).or(z.string().transform(val => parseInt(val) || 0)),
  why_itss: z.string().max(2000).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || ''
    let validatedData
    let cvUrl: string | null = null

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData()
      const rawData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        position: formData.get('position') as string,
        experience: formData.get('experience') as string,
        why_itss: formData.get('why_itss') as string,
      }

      validatedData = applicationSchema.parse(rawData)

      const file = formData.get('cv') as File | null
      if (file && file.size > 0) {
        if (file.size > MAX_FILE_SIZE) {
          console.error('[api/applications] CV file too large:', file.size)
          return NextResponse.json(
            { ok: false, error: 'CV file size exceeds 5MB limit' },
            { status: 400 }
          )
        }
        console.log('[api/applications] CV file received but Bolt File Storage not configured, continuing without file')
      }
    } else {
      const body = await request.json()
      validatedData = applicationSchema.parse(body)
    }

    console.log('[api/applications] Creating application for:', validatedData.email)

    const result = await db.insert('applications', {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      position: validatedData.position,
      experience: typeof validatedData.experience === 'number'
        ? validatedData.experience
        : parseInt(validatedData.experience as string) || 0,
      why_itss: validatedData.why_itss || null,
    })

    console.log('[api/applications] Successfully created application:', result[0].id)
    return NextResponse.json({ ok: true, data: result[0] }, { status: 200 })

  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('[api/applications] Validation error:', error.errors)
      return NextResponse.json(
        { ok: false, error: 'Invalid form data', details: error.errors },
        { status: 400 }
      )
    }

    console.error('[api/applications] submission error:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'

    return NextResponse.json(
      { ok: false, error: `Failed to submit application: ${message}` },
      { status: 500 }
    )
  }
}
