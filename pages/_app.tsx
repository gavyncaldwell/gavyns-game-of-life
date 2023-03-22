import type { AppProps } from 'next/app'
import { Normalize } from 'styled-normalize'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Normalize />
      <Component {...pageProps} />
    </>
  )
}
