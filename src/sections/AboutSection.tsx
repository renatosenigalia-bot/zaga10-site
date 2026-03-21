import { Container } from '@/components/atoms/Container'

const stats = [
  { value: '10+', label: 'Anos de mercado' },
  { value: '50+', label: 'Projetos entregues' },
  { value: '3', label: 'Grandes marcas atendidas' },
]

export function AboutSection() {
  return (
    <section id="sobre" className="bg-brand-offwhite py-4xl" aria-label="Sobre a Zaga10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4xl items-center">
          {/* Texto */}
          <div>
            <p className="font-body text-label text-brand-electric uppercase tracking-[0.2em] mb-md">
              Sobre a Zaga10
            </p>
            <h2 className="font-subtitle font-semibold text-h3 lg:text-h2 text-brand-navy mb-xl">
              Estratégia sólida.
              <br />
              Criatividade sem limite.
            </h2>
            <div className="flex flex-col gap-md mb-2xl">
              <p className="font-body text-body text-brand-graphite">
                Nascemos da convicção de que comunicação de verdade precisa de dois elementos que
                raramente coexistem: a solidez do zagueiro que sustenta o jogo, e a genialidade
                do camisa 10 que decide a partida.
              </p>
              <p className="font-body text-body text-brand-graphite">
                Há mais de uma década, ajudamos marcas como Nestlé, Bayer e Apsen a construir
                identidades memoráveis — do posicionamento estratégico à execução criativa em
                todos os pontos de contato.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-xl">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-xs">
                  <span className="font-display text-display text-brand-electric leading-none">
                    {value}
                  </span>
                  <span className="font-body text-caption text-brand-graphite uppercase tracking-wide">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Elemento visual decorativo */}
          <div aria-hidden="true" className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Grade geométrica verde elétrico */}
              <div className="absolute inset-0 border-2 border-brand-electric/30 rounded-lg" />
              <div className="absolute inset-4 border-2 border-brand-electric/50 rounded-lg" />
              <div className="absolute inset-8 border-2 border-brand-electric/70 rounded-lg" />
              <div className="absolute inset-12 border-2 border-brand-electric rounded-lg" />
              {/* Linha diagonal */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    'linear-gradient(45deg, transparent 48%, #C8F000 48%, #C8F000 52%, transparent 52%)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-display-xl text-brand-electric/20 select-none">
                  Z10
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
