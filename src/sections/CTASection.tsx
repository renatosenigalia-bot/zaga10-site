'use client'

import { Container } from '@/components/atoms/Container'
import { Button } from '@/components/atoms/Button'

export function CTASection() {
  return (
    <section
      className="bg-brand-electric py-4xl"
      aria-label="Chamada para ação"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
          {/* Texto */}
          <div>
            <h2 className="font-subtitle font-semibold text-h3 lg:text-h2 text-brand-navy mb-lg">
              Pronto para dar o próximo passo?
            </h2>
            <p className="font-body text-body-lg text-brand-navy/80">
              De estratégia ao pixel — entregamos o trabalho completo.
              Vamos conversar sobre o seu projeto.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-md lg:items-start xl:items-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Falar com a Zaga10
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Ver portfólio
            </Button>
          </div>
        </div>

        <p className="font-body text-caption text-brand-navy/60 mt-lg">
          Resposta em até 24h · Sem compromisso
        </p>
      </Container>
    </section>
  )
}
