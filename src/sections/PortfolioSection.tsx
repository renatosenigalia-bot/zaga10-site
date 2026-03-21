import { Container } from '@/components/atoms/Container'
import { PortfolioCard } from '@/components/molecules/PortfolioCard'
import { Button } from '@/components/atoms/Button'

const portfolioItems = [
  {
    src: '/images/portfolio/nestle-campanha-institucional.svg',
    alt: 'Campanha institucional Nestlé Brasil — projeto Zaga10',
    client: 'Nestlé',
    category: 'Campanha Institucional',
  },
  {
    src: '/images/portfolio/bayer-identidade-produto.svg',
    alt: 'Identidade de produto Bayer — projeto Zaga10',
    client: 'Bayer',
    category: 'Identidade de Produto',
  },
  {
    src: '/images/portfolio/apsen-branding-farmaceutico.svg',
    alt: 'Branding farmacêutico Apsen — projeto Zaga10',
    client: 'Apsen',
    category: 'Branding Farmacêutico',
  },
  {
    src: '/images/portfolio/cliente-social-media.svg',
    alt: 'Projeto de social media — Zaga10',
    client: 'Marca Parceira',
    category: 'Social Media',
  },
  {
    src: '/images/portfolio/cliente-campanha-digital.svg',
    alt: 'Campanha digital — projeto Zaga10',
    client: 'Marca Parceira',
    category: 'Campanha Digital',
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-brand-navy py-4xl" aria-label="Portfólio da Zaga10">
      <Container>
        <div className="mb-3xl">
          <p className="font-body text-label text-brand-electric uppercase tracking-[0.2em] mb-md">
            Portfólio
          </p>
          <h2 className="font-subtitle font-semibold text-h3 lg:text-h2 text-white mb-md">
            Projetos que falam por si.
          </h2>
          <p className="font-body text-body text-white/70 max-w-prose">
            Marcas líderes confiam na Zaga10 para construir e manter comunicação de alto nível.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-lg mb-3xl">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.client + item.category}
              src={item.src}
              alt={item.alt}
              client={item.client}
              category={item.category}
            />
          ))}
        </div>

        <div className="text-center">
          <p className="font-body text-body text-white/60 mb-lg">
            Quer ver mais projetos?
          </p>
          <Button
            variant="secondary"
            size="md"
            className="text-white border-white hover:bg-white/10"
            onClick={() =>
              document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Falar sobre o seu projeto
          </Button>
        </div>
      </Container>
    </section>
  )
}
