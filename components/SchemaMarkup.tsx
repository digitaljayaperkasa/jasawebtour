import React from 'react';

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa Pembuatan Website Tour Profesional",
    "provider": {
      "@type": "LocalBusiness",
      "name": "jasawebtour.com",
      "image": "https://jasawebtour.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bali",
        "addressCountry": "ID"
      },
      "telephone": "+6287862250460",
      "priceRange": "Rp 1.750.000 - Rp 7.500.000"
    },
    "description": "Jasa pembuatan website tour & travel profesional, modern, dan SEO optimized untuk meningkatkan booking bisnis tour Anda.",
    "areaServed": "Indonesia",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Paket Pembuatan Website Tour",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paket Starter"
          },
          "price": "1750000",
          "priceCurrency": "IDR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paket Profesional"
          },
          "price": "3500000",
          "priceCurrency": "IDR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paket Ultimate"
          },
          "price": "7500000",
          "priceCurrency": "IDR"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
