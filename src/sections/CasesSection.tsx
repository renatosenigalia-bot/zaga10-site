'use client'

import { Container } from '@/components/atoms/Container'

const metrics = [
  {
    value: '876',
    unit: 'leads',
    delta: '+750%',
    deltaPositive: true,
    label: 'Leads Gerados',
    description: 'em 90 dias de campanha',
  },
  {
    value: 'R$8,62',
    unit: '',
    delta: '-62,1%',
    deltaPositive: true,
    label: 'Custo por Lead',
    description: 'vs. média anterior do cliente',
  },
  {
    value: '128,8K',
    unit: '',
    delta: '+132%',
    deltaPositive: true,
    label: 'Alcance Orgânico',
    description: 'crescimento no período',
  },
  {
    value: '+402%',
    unit: '',
    delta: '',
    deltaPositive: true,
    label: 'Visitas ao Perfil',
    description: 'aumento acumulado no ciclo',
  },
]

export function CasesSection() {
  return (
    <section
      id="cases"
      className="bg-brand-navy py-4xl relative overflow-hidden"
      aria-label="Cases e Resultados"
    >
      {/* Subtle background accent */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(200,240,0,0.04) 0%, transparent 70%)',
        }}
      />

      <Container>
        {/* Header */}
        <div className="mb-3xl">
          <p className="font-body text-label text-brand-electric uppercase tracking-[0.2em] mb-md">
            Cases &amp; Resultados
          </p>
          <h2 className="font-subtitle font-semibold text-h3 lg:text-h2 text-white mb-md">
            Números que provam a estratégia.
          </h2>
          <p className="font-body text-body text-white/60 max-w-prose">
            Resultados reais de campanhas reais — sem achismo, sem vanity metrics.
          </p>
        </div>

        {/* Case Card */}
        <div
          className="rounded-xl border border-white/10 overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.03)' }}
        >
          {/* Case header strip */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-md px-xl py-lg border-b border-white/10">
            <div>
              <span
                className="font-display text-brand-electric uppercase"
                style={{ fontSize: '1.5rem', letterSpacing: '0.06em' }}
              >
                Espaço K2
              </span>
              <p className="font-body text-body-sm text-white/50 mt-xs">
                Pilates, Funcional e Musculação — Osasco / SP
              </p>
            </div>
            <span
              className="inline-flex items-center gap-sm font-body text-label text-brand-navy uppercase tracking-widest px-md py-sm rounded-md font-semibold"
              style={{ background: '#C8F000', fontSize: '0.65rem' }}
            >
              &#10003;&nbsp; Case Verificado
            </span>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-white/10 lg:divide-y-0">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="flex flex-col justify-between p-xl gap-md group"
              >
                {/* Big number */}
                <div>
                  <div className="flex items-end gap-sm flex-wrap">
                    <span
                      className="font-display text-white leading-none"
                      style={{ fontSize: 'clamp(2.4rem, 5vw, 3.5rem)' }}
                    >
                      {m.value}
                    </span>
                    {m.unit && (
                      <span
                        className="font-subtitle font-semibold text-white/50 pb-1"
                        style={{ fontSize: '1rem' }}
                      >
                        {m.unit}
                      </span>
                    )}
                  </div>

                  {/* Delta badge */}
                  {m.delta && (
                    <span
                      className="inline-block mt-sm font-subtitle font-semibold text-brand-navy text-body-sm px-sm py-xs rounded"
                      style={{ background: '#C8F000', fontSize: '0.78rem' }}
                    >
                      {m.delta}
                    </span>
                  )}
                </div>

                {/* Label + description */}
                <div>
                  <p className="font-subtitle font-semibold text-white text-body-sm uppercase tracking-wide">
                    {m.label}
                  </p>
                  <p className="font-body text-body-sm text-white/40 mt-xs leading-snug">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer strip */}
          <div className="px-xl py-md border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-sm">
            <p className="font-body text-body-sm text-white/40">
              Segmento: Academia &amp; Wellness · Estratégia: Tráfego Pago + Social Media
            </p>
            <p className="font-body text-body-sm text-white/30">
              Período: 90 dias
            </p>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-xl font-body text-body-sm text-white/30 text-center">
          Dados auditados e validados com o cliente. Resultados podem variar conforme segmento e histórico da marca.
        </p>
      </Container>
    </section>
  )
}
