'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { Input } from '@/components/atoms/Input'
import { Textarea } from '@/components/atoms/Textarea'
import { Button } from '@/components/atoms/Button'

const schema = z.object({
  name: z.string().min(2, 'Nome deve ter ao menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  message: z.string().min(20, 'Mensagem deve ter ao menos 20 caracteres'),
  website: z.string().max(0, 'Campo inválido'),
})

type FormData = z.infer<typeof schema>
type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    if (data.website) {
      setStatus('success')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, message: data.message }),
      })
      if (!res.ok) throw new Error('Falha no envio')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-md p-2xl bg-green-50 border border-green-200 rounded-lg text-center">
        <CheckCircle size={48} className="text-green-600" aria-hidden="true" />
        <h3 className="font-subtitle font-semibold text-h4 text-brand-navy">
          Mensagem enviada!
        </h3>
        <p className="font-body text-body text-brand-graphite">
          Retornaremos em até 24h. Obrigado pelo contato.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      aria-label="Formulário de contato"
      className="flex flex-col gap-lg"
      noValidate
    >
      <div aria-hidden="true" className="hidden" tabIndex={-1}>
        <input
          {...register('website')}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          placeholder="Website"
        />
      </div>

      <Input
        {...register('name')}
        label="Nome"
        placeholder="Seu nome completo"
        error={errors.name?.message}
        autoComplete="name"
      />
      <Input
        {...register('email')}
        label="E-mail"
        type="email"
        placeholder="seu@email.com.br"
        error={errors.email?.message}
        autoComplete="email"
      />
      <Textarea
        {...register('message')}
        label="Mensagem"
        placeholder="Conte um pouco sobre seu projeto ou necessidade..."
        error={errors.message?.message}
      />

      {status === 'error' && (
        <div className="flex items-center gap-sm p-md bg-red-50 border border-red-200 rounded-md" role="alert">
          <AlertCircle size={20} className="text-red-500 flex-shrink-0" aria-hidden="true" />
          <p className="font-body text-body-sm text-red-700">
            Ops, erro ao enviar. Por favor, tente novamente.
          </p>
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" fullWidth loading={status === 'loading'}>
        Enviar mensagem
      </Button>
    </form>
  )
}
