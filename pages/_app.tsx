import 'tailwindcss/tailwind.css'
import './tailwind-overrides.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
// @ts-ignore
import {MDXProvider} from '@mdx-js/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="prose p-6">
      <MDXProvider components={mdComponents}>
      <Component {...pageProps} />
      </MDXProvider>
    </div>
  )
}

const mdComponents = {
  a: Link
}

export default MyApp
