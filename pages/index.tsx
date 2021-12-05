import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Notes on software development</title>
        <meta name="description" content="Mikhail Vasin's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Notes on software development</h1>
      <p>Work in progress. Stay tuned...</p>
    </div>
  )
}

export default Home
