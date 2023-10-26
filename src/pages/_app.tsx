import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import { Auth0Provider } from '@auth0/auth0-react'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const brandish = localFont({ src: '../fonts/brandish.ttf' })
const centuryGothic = localFont({ src: '../fonts/centurygothic.ttf' })

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Auth0Provider
      domain="dev-8iig0ztggfp21g4p.eu.auth0.com"
      clientId="ObChpl973tgIPgJ8lmT1MkoC3WcSbPlZ"
      authorizationParams={{
        redirect_uri: 'http://localhost:3000',
      }}
    >
      <style jsx global>
        {`
          :root {
            --font-base: ${roboto.style.fontFamily};
            --font-brandish: ${brandish.style.fontFamily};
            --font-century-gothic: ${centuryGothic.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </Auth0Provider>
  )
}

export default App
