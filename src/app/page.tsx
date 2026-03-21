import { Navbar } from '@/components/organisms/Navbar'
import { Footer } from '@/components/organisms/Footer'
import { HeroSection } from '@/sections/HeroSection'
import { AboutSection } from '@/sections/AboutSection'
import { ServicesSection } from '@/sections/ServicesSection'
import { PortfolioSection } from '@/sections/PortfolioSection'
import { TestimonialsSection } from '@/sections/TestimonialsSection'
import { CTASection } from '@/sections/CTASection'
import { ContactSection } from '@/sections/ContactSection'
import { ScrollReveal } from '@/components/atoms/ScrollReveal'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HeroSection />
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal>
          <ServicesSection />
        </ScrollReveal>
        <ScrollReveal>
          <PortfolioSection />
        </ScrollReveal>
        <ScrollReveal>
          <TestimonialsSection />
        </ScrollReveal>
        <CTASection />
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  )
}
