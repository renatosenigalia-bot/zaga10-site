# Zaga10 Site

Landing page institucional da Zaga10 Comunicação.

**Stack:** Next.js 14 (App Router, SSG) · TypeScript · Tailwind CSS v3 · Vercel

## Setup

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.local.example .env.local
# Editar .env.local com sua RESEND_API_KEY

# 3. Rodar em desenvolvimento
npm run dev
# → http://localhost:3000
```

## Variáveis de Ambiente

| Variável | Descrição |
|----------|-----------|
| `RESEND_API_KEY` | Chave API do Resend (https://resend.com) |
| `CONTACT_EMAIL` | E-mail de destino do formulário (default: contato@zaga10.com.br) |

## Deploy na Vercel

1. Conectar repositório no [vercel.com](https://vercel.com)
2. Configurar Environment Variables (`RESEND_API_KEY`, `CONTACT_EMAIL`)
3. Deploy automático em cada push para `main`

## Estrutura

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata global, JSON-LD
│   ├── page.tsx            # Homepage (todas as seções)
│   ├── sitemap.ts          # Sitemap dinâmico
│   ├── robots.ts           # robots.txt
│   ├── globals.css         # Tailwind base + scroll reveal
│   └── api/contact/        # API Route — envio via Resend
├── components/
│   ├── atoms/              # Button, Input, Textarea, Container, ScrollReveal
│   ├── molecules/          # ServiceCard, PortfolioCard, TestimonialCard
│   └── organisms/          # Navbar, Footer, ContactForm
├── sections/               # HeroSection, AboutSection, ...
└── lib/
    └── resend.ts           # Instância do cliente Resend
```

## Imagens Necessárias (antes do go-live)

```
public/images/
├── logo/
│   ├── zaga10-logo-dark.svg          # Navbar e Footer
│   └── zaga10-logo-principal.svg     # OG image, etc.
├── portfolio/
│   ├── nestle-campanha-institucional.jpg   # 800×600 (4:3) — aprovação Nestlé
│   ├── bayer-identidade-produto.jpg        # 800×600 (4:3) — aprovação Bayer
│   ├── apsen-branding-farmaceutico.jpg     # 800×600 (4:3) — aprovação Apsen
│   ├── cliente-social-media.jpg            # TBD
│   └── cliente-campanha-digital.jpg        # TBD
├── testimonials/
│   ├── cliente-01.jpg   # 120×120 (1:1)
│   ├── cliente-02.jpg   # 120×120 (1:1)
│   └── cliente-03.jpg   # 120×120 (1:1)
└── og-image.jpg         # 1200×630 — Open Graph
```

> ⚠️ **Conteúdo de portfólio e depoimentos:** requer aprovação dos clientes antes do deploy em produção.
