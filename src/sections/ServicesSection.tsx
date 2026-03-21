import { Palette, TrendingUp, PenLine, Instagram, Megaphone } from 'lucide-react'
import { Container } from '@/components/atoms/Container'
import { ServiceCard } from '@/components/molecules/ServiceCard'

const services = [
  {
    icon: Palette,
    title: 'Branding & Identidade Visual',
    description:
      'Criamos marcas com alma — do naming ao sistema visual completo, com identidade que dura.',
  },
  {
    icon: TrendingUp,
    title: 'Estratégia de Conteúdo',
    description:
      'Posicionamento, tom de voz e calendário editorial alinhados aos objetivos do negócio.',
  },
  {
    icon: PenLine,
    title: 'Design Gráfico & Editorial',
    description:
      'Materiais que comunicam e convertem — apresentações, catálogos, peças publicitárias.',
  },
  {
    icon: Instagram,
    title: 'Social Media & Digital',
    description:
      'Gestão de redes sociais com estratégia, criatividade e métricas que importam.',
  },
  {
    icon: Megaphone,
    title: 'Campanhas & Ativações',
    description:
      'Do conceito à produção — campanhas integradas que geram awareness e resultados mensuráveis.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-white py-4xl" aria-label="Serviços da Zaga10">
      <Container>
        <div className="text-center mb-3xl max-w-2xl mx-auto">
          <p className="font-body text-label text-brand-electric uppercase tracking-[0.2em] mb-md">
            O que fazemos
          </p>
          <h2 className="font-subtitle font-semibold text-h3 lg:text-h2 text-brand-navy mb-md">
            Serviços que constroem marcas de verdade.
          </h2>
          <p className="font-body text-body text-brand-graphite">
            Do estratégico ao executivo — cobrimos todos os pontos de contato da sua comunicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-xl">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
