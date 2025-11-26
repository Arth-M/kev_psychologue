import './globals.css'
import Script from "next/script"
import Navbar from './_components/navbar.jsx'
import Footer from './_components/footer.jsx'

// Métadonnées principales - OUTSIDE the component
export const metadata = {
  title:
    'Novurba - Urbanisme en Occitanie',
  description:
    "Raphaël Sinet est urbaniste diplômé et dirigeant de Novurba. Il accompagne les métropoles, mairies et communes dans la réalisation de plans budgétaires, de plan locaux d'urbanisme ou de projet d'expansion ou de remodellement.",
  // Auteur
  authors: [{ name: 'Raphaël Sinet' }],
  creator: 'ATU-Web',
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'Raphaël Sinet - Urbaniste en Occitanie',
    description:
      'Urbaniste diplômé basé à Montpellier, dirigeant de Novurba. Accompagnement des communes, métropoles, mairies pour la réalisation de plans financiers, PLU ou nouveaux projets.',
    siteName: 'Raphaël Sinet - Urbaniste',
    url: 'https://novurba.fr',
    images: [
      {
        url: 'https://media.licdn.com/dms/image/v2/C4E0BAQG70Y3ZqeWGqQ/company-logo_200_200/company-logo_200_200/0/1678785499189?e=2147483647&v=beta&t=ZU4eGSYK1ZBKuX5rrXqULVpQnSn_bfO6VwIUOlEd4XY',
        width: 309,
        height: 303,
        alt: 'Photographie de Raphaël Sinet, dirigeant de NovUrba',
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Raphaël Sinet - Urbaniste en Occitanie',
    description: 'Accompagnement des métropoles, communes et mairies - NovUrba.',
    images: [
      'https://media.licdn.com/dms/image/v2/C4E0BAQG70Y3ZqeWGqQ/company-logo_200_200/company-logo_200_200/0/1678785499189?e=2147483647&v=beta&t=ZU4eGSYK1ZBKuX5rrXqULVpQnSn_bfO6VwIUOlEd4XY',
    ],
  },
  // Lien canonique
  alternates: {
    canonical: 'https://novurba.fr/', // à remplacer
  },
}

// JSON-LD optimisé pour le SEO local - OUTSIDE the component
export const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'https://schema.org/Urbanist',
  name: 'Raphaël Sinet',
  image: 'https://media.licdn.com/dms/image/v2/C4E0BAQG70Y3ZqeWGqQ/company-logo_200_200/company-logo_200_200/0/1678785499189?e=2147483647&v=beta&t=ZU4eGSYK1ZBKuX5rrXqULVpQnSn_bfO6VwIUOlEd4XY',
  description:
    "Raphaël Sinet est urbaniste diplômé et dirigeant de Novurba. Il accompagne les métropoles, mairies et communes dans la réalisation de plans budgétaires, de plan locaux d'urbanisme ou de projet d'expansion ou de remodellement",
  address: {
    '@type': 'PostalAddress',
    streetAddress: '21 AVENUE DE LA GALINE',
    addressLocality: 'CASTELNAU-LE-LEZ',
    postalCode: '34170',
    addressCountry: 'FR',
    addressRegion: 'Occitanie',
  },
  // "geo": {
  //   "@type": "GeoCoordinates",
  //   "latitude": 43.60048665192196,
  //   "longitude": 3.867169968557686,
  // },
  // telephone: '+33-6-15-43-51-99',
  // email: 'c.castronovo.34@gmail.com',
  url: 'https://novurba.fr',
  sameAs: [
    'https://fr.linkedin.com/company/novurba?trk=public_post_feed-actor-image',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
        <link rel="icon" type="image/svg+xml" href="./images/cityN.svg"></link>
      </head>
      <body className='font-general h-screen'>
        <Navbar/>
        {children}
        <Footer />
        </body>
    </html>
  )
}
