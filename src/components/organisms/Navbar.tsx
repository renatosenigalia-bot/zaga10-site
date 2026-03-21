'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { List, X } from '@phosphor-icons/react'
import { Button } from '@/components/atoms/Button'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Bloquear scroll do body quando menu aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-normal',
          scrolled
            ? 'bg-brand-navy/95 backdrop-blur-sm shadow-nav'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="max-w-[1280px] mx-auto px-md lg:px-xl py-md flex items-center justify-between">
          {/* Logo */}
          <a href="#" aria-label="Zaga10 Comunicação — página inicial">
            <Image
              src="/images/logo/zaga10-logo-dark.svg"
              alt="Zaga10 Comunicação"
              width={140}
              height={40}
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-xl" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body font-semibold text-body-sm text-white/90 hover:text-brand-electric transition-colors duration-fast"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              variant="secondary"
              size="md"
              className="text-white border-white hover:bg-white/10"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Falar com a Zaga10
            </Button>
          </div>

          {/* Mobile hambúrguer */}
          <button
            className="lg:hidden text-white p-sm"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <nav
        id="mobile-menu"
        aria-label="Menu de navegação mobile"
        className={[
          'fixed inset-0 bg-brand-navy z-40 flex flex-col items-center justify-center gap-xl',
          'transition-all duration-normal lg:hidden',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-subtitle font-semibold text-h2 text-white hover:text-brand-electric transition-colors duration-fast"
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <Button
          variant="primary"
          size="lg"
          className="mt-lg"
          onClick={() => {
            closeMenu()
            document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Falar com a Zaga10
        </Button>
      </nav>
    </>
  )
}
