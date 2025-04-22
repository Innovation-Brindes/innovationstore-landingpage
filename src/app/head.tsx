import Script from 'next/script'

export default function HeadScript() {
  return (
    <>
      <Script id="schema-org" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Innovation Store",
            "url": "https://innovationstore.com.br",
            "logo": "https://innovationstore.com.br/logo.png",
            "description": "Plataforma completa para brindes personalizados corporativos.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-11-XXXX-XXXX",
              "contactType": "customer service",
              "areaServed": "BR",
              "availableLanguage": "Portuguese"
            },
            "sameAs": [
              "https://www.facebook.com/innovationstore",
              "https://www.instagram.com/innovationstore",
              "https://www.linkedin.com/company/innovation-store"
            ]
          }
        `}
      </Script>
      <Script id="schema-product" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Innovation Store - Plataforma de Brindes Personalizados",
            "description": "Plataforma digital para solicitar brindes personalizados com preços em tempo real.",
            "provider": {
              "@type": "Organization",
              "name": "Innovation Store"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "BRL",
              "availability": "https://schema.org/InStock"
            }
          }
        `}
      </Script>
    </>
  )
}
