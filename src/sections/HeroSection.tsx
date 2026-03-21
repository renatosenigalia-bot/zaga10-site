import { Button } from '@/components/atoms/Button'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-brand-navy overflow-hidden"
      aria-label="Apresentação da Zaga10"
    >
      {/* Elemento decorativo — forma geométrica Verde Elétrico */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 w-1/2 h-full opacity-[0.07] pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, transparent 30%, #C8F000 30%, #C8F000 70%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute right-[10%] top-[20%] w-px h-[60%] bg-brand-electric opacity-20"
      />

      <div className="max-w-[1280px] mx-auto px-md lg:px-xl w-full pt-[80px]">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="font-body text-label text-brand-electric uppercase tracking-[0.2em] mb-lg">
            Agência de Comunicação
          </p>

          {/* Headline */}
          <h1 className="font-display text-display xl:text-display-xl text-white mb-xl leading-none">
            Estratégia que defende.{' '}
            <span className="text-brand-electric">Criatividade que ataca.</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-body-lg text-white/75 max-w-prose mb-2xl">
            Da identidade ao pixel, do posicionamento à campanha — entregamos comunicação
            completa para marcas que querem ser lembradas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-md">
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
              variant="ghost"
              size="lg"
              className="text-white hover:text-brand-electric"
              onClick={() =>
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Ver portfólio →
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-xl left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <CaretDown size={24} aria-hidden="true" />
      </div>
    </section>
  )
}
