import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const brandish = localFont({ src: '../fonts/brandish.ttf' })
const centuryGothic = localFont({ src: '../fonts/centurygothic.ttf' })

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
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
    </>
  )
}

export default App
