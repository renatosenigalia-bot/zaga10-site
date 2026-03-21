import { Mail, Instagram, Linkedin, Clock } from 'lucide-react'
import { Container } from '@/components/atoms/Container'
import { ContactForm } from '@/components/organisms/ContactForm'

const contactInfo = [
  {
    Icon: Mail,
    label: 'E-mail',
    value: 'contato@zaga10.com.br',
    href: 'mailto:contato@zaga10.com.br',
  },
  {
    Icon: Instagram,
    label: 'Instagram',
    value: '@zaga10comunicacao',
    href: 'https://www.instagram.com/zaga10comunicacao',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: 'Zaga10 Comunicação',
    href: 'https://www.linkedin.com/company/zaga10',
  },
  {
    Icon: Clock,
    label: 'Horário',
    value: 'Seg–Sex · 9h–18h',
    href: null,
  },
]

export function ContactSection() {
  return (
    <section id="contato" className="bg-white py-4xl" aria-label="Entre em contato">
      <Container>
        <div className="mb-3xl">
          <p className="font-body text-label text-brand-electric uppercase tracking-[0.2em] mb-md">
            Contato
          </p>
          <h2 className="font-subtitle font-semibold text-h3 lg:text-h2 text-brand-navy">
            Vamos conversar?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4xl">
          <div>
            <ContactForm />
          </div>

          <div className="flex flex-col gap-xl">
            <div>
              <h3 className="font-subtitle font-semibold text-h4 text-brand-navy mb-lg">
                Outras formas de contato
              </h3>
              <ul className="flex flex-col gap-lg">
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-center gap-md">
                    <div className="w-10 h-10 rounded-md bg-brand-offwhite flex items-center justify-center flex-shrink-0">
                      <Icon size={20} strokeWidth={1.5} className="text-brand-navy" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-body text-caption text-brand-graphite uppercase tracking-wide">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="font-body text-body text-brand-navy hover:text-brand-electric transition-colors duration-fast"
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-body text-body text-brand-navy">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
