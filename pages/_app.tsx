import '../styles/globals.css'

import { Analytics } from '@vercel/analytics/react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { perCollectionSEOTitle } from '../lib/constants/labels'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full h-screen">
      <Component {...pageProps} />
      <Head>
        {/* default title */}
        <title>{perCollectionSEOTitle.ficto_healthtech}</title>
        <link
          rel="icon"
          href="/favicon.png"
        />
      </Head>
      <Analytics />
    </div>
  )
}

