import Image from 'next/image'
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { Container } from '@/components/atoms/Container'

const footerLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

const socialLinks = [
  {
    label: 'Instagram da Zaga10',
    href: 'https://www.instagram.com/zaga10comunicacao',
    Icon: InstagramLogo,
  },
  {
    label: 'LinkedIn da Zaga10',
    href: 'https://www.linkedin.com/company/zaga10',
    Icon: LinkedinLogo,
  },
  {
    label: 'WhatsApp da Zaga10',
    href: 'https://wa.me/5511999999999',
    Icon: WhatsappLogo,
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy py-4xl">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl">
          {/* Coluna 1 — Logo + tagline */}
          <div className="flex flex-col gap-md">
            <Image
              src="/images/logo/zaga10-logo-dark.svg"
              alt=""
              aria-hidden="true"
              width={128}
              height={36}
            />
            <p className="font-body text-body text-white/60 max-w-xs">
              Estratégia que defende. Criatividade que ataca.
            </p>
          </div>

          {/* Coluna 2 — Links */}
          <div>
            <p className="font-body font-medium text-label text-white/40 uppercase tracking-widest mb-lg">
              Navegação
            </p>
            <ul className="flex flex-col gap-md">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-body-sm text-white/70 hover:text-brand-electric transition-colors duration-fast"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contato + redes sociais */}
          <div className="flex flex-col gap-lg">
            <div>
              <p className="font-body font-medium text-label text-white/40 uppercase tracking-widest mb-lg">
                Contato
              </p>
              <a
                href="mailto:contato@zaga10.com.br"
                className="font-body text-body-sm text-white/70 hover:text-brand-electric transition-colors duration-fast block"
              >
                contato@zaga10.com.br
              </a>
              <p className="font-body text-caption text-white/40 mt-xs">
                Seg–Sex · 9h–18h
              </p>
            </div>
            <div className="flex items-center gap-md">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-brand-electric transition-colors duration-fast"
                >
                  <Icon size={24} weight="regular" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-3xl pt-lg">
          <p className="font-body text-caption text-white/40 text-center">
            © {year} Zaga10 Comunicação. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}
