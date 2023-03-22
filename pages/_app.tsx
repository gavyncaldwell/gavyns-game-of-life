import type { AppProps } from 'next/app'
import { Normalize } from 'styled-normalize'
import '@style/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Normalize />
      <Component {...pageProps} />
    </>
  )
}
