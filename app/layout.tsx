import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: "Fintech Basics Assistant for Kids",
  description: "An AI-powered chatbot for answering basic fintech questions in a kid-friendly manner.",
  openGraph: {
    title: "Fintech Basics Assistant for Kids",
    description: "An AI-powered chatbot for answering basic fintech questions in a kid-friendly manner.",
    url: "https://fintech-model-v2-35rg7a3f7-usha-rajendirans-projects.vercel.app/",
    siteName: "Fintech AI Tools",
    images: [
      {
        url: "https://fintech-model-v2-35rg7a3f7-usha-rajendirans-projects.vercel.app/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "Fintech Assistant for Kids",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
