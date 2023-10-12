
import { Metadata } from 'next'
import Image from 'next/image'
import HomePageComp from './Components/Pages/HomePage/HomePageComp'

export const metadata: Metadata = {
  title: 'Dream City',
  description: 'Dream City Description', 
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
 

export default function Home() {

  

  return (
    <main className="min-h-screen">
      <HomePageComp />
    </main>
  )
}
