import { HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'main' | 'article' | 'header' | 'footer'
}

export function Container({
  as: Tag = 'div',
  children,
  className = '',
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={['max-w-[1280px] mx-auto px-md lg:px-xl', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Tag>
  )
}
