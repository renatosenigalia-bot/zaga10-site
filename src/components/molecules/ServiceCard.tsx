import { Icon as PhosphorIcon } from '@phosphor-icons/react'

interface ServiceCardProps {
  icon: React.ElementType
  title: string
  description: string
}

export function ServiceCard({ icon: IconComponent, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-md p-xl bg-white border border-brand-graphite/20 rounded-lg shadow-card group transition-all duration-normal hover:border-brand-electric hover:shadow-card-hover">
      <div className="text-brand-navy group-hover:text-brand-electric transition-colors duration-normal">
        <IconComponent size={48} weight="regular" aria-hidden="true" />
      </div>
      <h3 className="font-subtitle font-semibold text-h4 text-brand-navy">
        {title}
      </h3>
      <p className="font-body text-body text-brand-graphite line-clamp-2">
        {description}
      </p>
    </div>
  )
}
