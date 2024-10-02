import "./globals.css";
import { Poppins } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "react-hot-toast";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})


export const metadata = {
  title: "Soni Interiors - Transforming Homes into Dream Spaces",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  `}>
        <main className="max-w-[1600px] mx-auto">
        <NextTopLoader 
         color="#FBB03B"
        />
          <Header />
          {children}
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}