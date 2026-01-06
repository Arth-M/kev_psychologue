'use client'
import "./globals.css";
import Script from "next/script";
import Navbar from "./_components/navbar.jsx";
import Footer from "./_components/footer.jsx";

import { useState } from 'react'

// REMETTRE LES METADATA QUAND ON MET LE SITE EN LIGNE ET ENLEVER USE CLIENT ET PAGE CODE !!!!

// Métadonnées principales - OUTSIDE the component
// export const metadata = {
//   title: "Kevin Nicolas - Psychologue à Baillargues",
//   description:
//     "Kevin Nicolas est un Psychologue diplômé installé à Baillargues. Il travaille sur les traumas, les phobies et les addictions notamment avec l'EMDR.",
//   // Auteur
//   authors: [{ name: "Kevin Nicolas" }],
//   creator: "ATU-Web",
//   // Open Graph
//   openGraph: {
//     type: "website",
//     locale: "fr_FR",
//     title: "Kevin Nicolas - Psychologue à Baillargues",
//     description:
//       "Psychologue diplômé basé à Baillargues. Il pratique des thérapies sur les traumas, les phobies et les addictions notamment avec l'emdr.",
//     siteName: "Kevin Nicolas - Psychologue",
//     url: "https://psychologue-baillargues.fr",
//     // images: [
//     //   {
//     //     url: 'https://media.licdn.com/dms/image/v2/C4E0BAQG70Y3ZqeWGqQ/company-logo_200_200/company-logo_200_200/0/1678785499189?e=2147483647&v=beta&t=ZU4eGSYK1ZBKuX5rrXqULVpQnSn_bfO6VwIUOlEd4XY',
//     //     width: 309,
//     //     height: 303,
//     //     alt: 'Photographie de Raphaël Sinet, dirigeant de NovUrba',
//     //   },
//     // ],
//   },

//   // Lien canonique
//   alternates: {
//     canonical: "https://psychologue-baillargues.fr", // à remplacer
//   },
// };

// export const jsonLdData = {
//   "@context": "https://schema.org",
//   "@type": "LocalBusiness",
//   additionalType: "https://schema.org/Psychologist",
//   name: "Kévin Nicolas",
//   image: "https://psychologue-baillargues.fr/images/kevin_nicolas.webp",
//   description:
//     "Kevin Nicolas est un Psychologue diplômé installé à Baillargues. Il travaille sur les traumas, les phobies et les addictions notamment avec l'EMDR.",
//   address: {
//     "@type": "PostalAddress",
//     // streetAddress: '10 avenue de Toulouse',
//     addressLocality: "Baillargues",
//     postalCode: "34670",
//     addressCountry: "FR",
//     addressRegion: "Occitanie",
//   },
//   // "geo": {
//   //   "@type": "GeoCoordinates",
//   //   "latitude": 43.60048665192196,
//   //   "longitude": 3.867169968557686,
//   // },
//   // telephone: '+33-6-15-43-51-99', // à remplacer
//   // email: 'c.castronovo.34@gmail.com', // à remplacer
//   url: "https://psychologue-baillargues.fr", // à remplacer
//   sameAs: [
//     "https://www.doctolib.fr/psychologue/baillargues/kevin-nicolas-baillargues",
//     "https://maps.app.goo.gl/C4F5RqbkyCzRkHzYA",
//     "https://fr.linkedin.com/in/kevin-nicolas-4b57b5b6",
//   ],
//   openingHoursSpecification: [
//     {
//       "@type": "OpeningHoursSpecification",
//       dayOfWeek: ["Tuesday", "Thursday", "Friday"],
//       opens: "09:00",
//       closes: "20:00",
//     },
//   ],
//   priceRange: "60 EUR",
//   offers: [
//     {
//       "@type": "Offer",
//       price: "60",
//       priceCurrency: "EUR",
//       description: "Consultation standard",
//     },
//   ],
//   paymentAccepted: ["Cash", "Check"],
//   currenciesAccepted: "EUR",
// };

export default function RootLayout({ children }) {
  const [codeTrue, setCodeTrue] = useState(false)
  const [userTest, setUserTest] = useState(false)
  const [code, setCode] = useState("")

  const handleCodeSubmit = () => {
    code === '34000' ? setCodeTrue(true) : setUserTest(true)
  }

  if (!codeTrue) {
    return (
      <html lang="fr">
        <head>
          {/* <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLdData),
            }}
          /> */}
          <link rel="icon" type="image/svg+xml" href="./images/cityN.svg"></link>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
          </style>
        </head>
        <body className='oswald  h-screen'>
       <div className="px-5 w-full h-full flex flex-col items-center justify-center">
        <label htmlFor="code" className="text-xl text-black text-center">Site en construction. <br></br>Un code est nécessaire pour y accéder</label>
        <input type="password" name='code' placeholder="xxxx"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="border border-gray-200 rounded-lg mt-4 px-2 py-1"
        />
        <button onClick={handleCodeSubmit} className="rounded-xl bg-white shadow-calypso-800 shadow-lg hover:bg-calypso-500 hover:-translate-y-0.5 px-3 py-2 text-black font-semibold mt-6 tracking-wide">Envoyer</button>
        {userTest ?
        <div className="text-sm text-black mt-1">Il est nécessaire d'entrer le bon code pour continuer
      </div>
    :
    <div className="hidden"></div>}
    </div>
    </body>
    </html>
    )
  } else {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
        <link rel="icon" type="image/svg" href="./images/phoenix.svg"></link>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Chewy&family=Sansation:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
        </style>
      </head>
      <body className="sansation-regular text-mako-900 h-screen grid grid-rows-[1fr_11fr_1fr]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
}
