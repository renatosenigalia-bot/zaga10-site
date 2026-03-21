import Image from 'next/image'
import { Quotes } from '@phosphor-icons/react'

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  avatarSrc: string
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  avatarSrc,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-md p-xl bg-white border border-brand-graphite/10 rounded-lg shadow-card min-h-48">
      <Quotes
        size={32}
        weight="fill"
        className="text-brand-electric"
        aria-hidden="true"
      />
      <blockquote className="font-body font-medium text-body-lg text-brand-navy italic flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-md pt-md border-t border-brand-graphite/10">
        <Image
          src={avatarSrc}
          alt={`${name} — ${role} na ${company}`}
          width={48}
          height={48}
          className="rounded-full object-cover border-2 border-brand-electric flex-shrink-0"
        />
        <div>
          <p className="font-subtitle font-semibold text-body text-brand-navy">
            {name}
          </p>
          <p className="font-body text-caption text-brand-graphite">
            {role} · {company}
          </p>
        </div>
      </div>
    </div>
  )
}
