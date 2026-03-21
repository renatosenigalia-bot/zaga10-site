import Image from 'next/image'

interface PortfolioCardProps {
  src: string
  alt: string
  client: string
  category: string
}

export function PortfolioCard({ src, alt, client, category }: PortfolioCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg aspect-[4/3] group cursor-pointer">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 400px"
        className="object-cover transition-transform duration-normal group-hover:scale-[1.02]"
      />
      {/* Overlay base */}
      <div className="absolute inset-0 bg-brand-navy/20 transition-all duration-normal group-hover:bg-brand-navy/75" />
      {/* Conteúdo visível no hover */}
      <div className="absolute bottom-0 left-0 right-0 p-lg translate-y-2 opacity-0 transition-all duration-normal group-hover:translate-y-0 group-hover:opacity-100">
        <p className="font-body text-caption text-brand-electric uppercase tracking-widest mb-xs">
          {category}
        </p>
        <h3 className="font-subtitle font-semibold text-h4 text-white">
          {client}
        </h3>
      </div>
    </div>
  )
}
