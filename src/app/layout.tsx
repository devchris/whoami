import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://devchris.net'),
  title: 'DevChris.net - Senior Software Engineer & Security Researcher',
  description: 'Personal website of Chris, Senior Software Engineer II at CrowdStrike and Founder of planubo.com. Sharing insights on AI, security research, and software engineering.',
  keywords: ['software engineer', 'security researcher', 'CrowdStrike', 'planubo', 'founder', 'AI', 'cybersecurity', 'blog'],
  authors: [{ name: 'Chris', url: 'https://devchris.net' }],
  creator: 'Chris',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devchris.net',
    title: 'DevChris.net - Senior Software Engineer & Security Researcher',
    description: 'Personal website of Chris, Senior Software Engineer II at CrowdStrike and Founder of planubo.com. Sharing insights on AI, security research, and software engineering.',
    siteName: 'DevChris.net',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevChris.net - Senior Software Engineer & Security Researcher',
    description: 'Personal website of Chris, Senior Software Engineer II at CrowdStrike and Founder of planubo.com. Sharing insights on AI, security research, and software engineering.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} data-theme="blue">
      <body className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}