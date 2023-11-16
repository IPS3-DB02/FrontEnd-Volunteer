import '@/app/globals.scss'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import { UserProvider } from '@auth0/nextjs-auth0/client'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const brandish = localFont({
  src: '../../public/fonts/Brandish.ttf',
  display: 'swap',
  variable: '--font-brandish',
})

const centuryGothic = localFont({
  src: '../../public/fonts/CenturyGothic.ttf',
  display: 'swap',
  variable: '--font-century-gothic',
})

export const metadata: Metadata = {
  title: 'Volunteer',
  description: 'Volunteer',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${brandish.variable} ${centuryGothic.variable}`}
    >
      
      <UserProvider>
        <body className={roboto.className}>{children}</body>
      </UserProvider>
    </html>
  )
}

export default RootLayout
