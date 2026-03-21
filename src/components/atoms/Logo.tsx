interface LogoProps {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`font-display tracking-wider select-none ${className}`}>
      <span className="text-white">ZAGA</span>
      <span style={{ color: '#C8F000' }}>10</span>
    </span>
  )
}
