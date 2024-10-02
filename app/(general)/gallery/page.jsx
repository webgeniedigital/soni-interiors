import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export const metadata = {
    title: "Gallery | Soni Interiors",
    description: "Soni Interiors, providing excellent services for 28 years, specializes in transforming homes into dream spaces. Our unique skills and latest technology ensure client satisfaction.",
    openGraph: {
      title: 'Soni Interiors - Transforming Homes into Dream Spaces',
      description: 'Soni Interiors, providing excellent services for 28 years, specializes in transforming homes into dream spaces. Our unique skills and latest technology ensure client satisfaction.',
      siteName: 'Soni Interiors',
      images: [
        // {
        //   url: 'https://nextjs.org/og.png',
        //   width: 800,
        //   height: 600,
        // },
        // {
        //   url: 'https://nextjs.org/og-alt.png',
        //   width: 1800,
        //   height: 1600,
        //   alt: 'My custom alt',
        // },
        // Add this asap
      ],
      locale: 'en_IN',
      type: 'website',
      url: 'https://www.kpinteriors.com'
    },
    keywords: [
      'interior website', 'Soni Interiors', 'kp interior designer',
      'kp interior designer website', 'home interiors', 'kp home interiors'
    ]
  };

export default page