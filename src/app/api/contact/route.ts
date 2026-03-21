import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { resend } from '@/lib/resend'

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(20).max(2000),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const { name, email, message } = parsed.data
    const contactEmail = process.env.CONTACT_EMAIL || 'contato@zaga10.com.br'

    await resend.emails.send({
      from: 'Site Zaga10 <noreply@zaga10.com.br>',
      to: contactEmail,
      replyTo: email,
      subject: `Nova mensagem de ${name} — Site Zaga10`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0E1B2D;">Nova mensagem via site</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #3D4D5C; font-weight: 600;">Nome:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #3D4D5C; font-weight: 600;">E-mail:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #3D4D5C; font-weight: 600; margin-bottom: 8px;">Mensagem:</p>
            <div style="background: #F5F7FA; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
          </div>
          <hr style="margin: 32px 0; border-color: #B0BEC5;" />
          <p style="color: #B0BEC5; font-size: 12px;">
            Enviado via formulário de contato — zaga10.com.br
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[contact/route] Erro ao enviar e-mail:', error)
    return NextResponse.json(
      { error: 'Erro interno. Tente novamente.' },
      { status: 500 }
    )
  }
}
