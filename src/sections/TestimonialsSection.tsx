import { Container } from '@/components/atoms/Container'
import { TestimonialCard } from '@/components/molecules/TestimonialCard'

const testimonials = [
  {
    quote:
      'A Zaga10 entende comunicação de verdade. Trouxeram clareza visual e estratégica para nossa marca em um momento crítico de posicionamento.',
    name: 'Nome do Cliente',
    role: 'Diretor de Marketing',
    company: 'Empresa',
    avatarSrc: '/images/testimonials/cliente-01.jpg',
  },
  {
    quote:
      'Trabalhar com a Zaga10 é ter a segurança de que cada detalhe será pensado — da estratégia ao pixel final.',
    name: 'Nome do Cliente',
    role: 'CEO',
    company: 'Empresa',
    avatarSrc: '/images/testimonials/cliente-02.jpg',
  },
  {
    quote:
      'O diferencial deles é a combinação de rigor estratégico com execução criativa de alto nível. Raros no mercado.',
    name: 'Nome do Cliente',
    role: 'Gerente de Marca',
    company: 'Empresa',
    avatarSrc: '/images/testimonials/cliente-03.jpg',
  },
]

export function TestimonialsSection() {
  return (
    <section
      className="bg-brand-offwhite py-4xl"
      aria-label="Depoimentos de clientes"
    >
      <Container>
        <div className="text-center mb-3xl max-w-2xl mx-auto">
          <p className="font-body text-label text-brand-electric uppercase tracking-[0.2em] mb-md">
            Depoimentos
          </p>
          <h2 className="font-subtitle font-semibold text-h3 lg:text-h2 text-brand-navy">
            O que nossos clientes dizem.
          </h2>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-xl"
          role="region"
          aria-label="Depoimentos de clientes"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              quote={t.quote}
              name={t.name}
              role={t.role}
              company={t.company}
              avatarSrc={t.avatarSrc}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
