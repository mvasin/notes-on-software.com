import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Notes on software development</title>
        <meta name="description" content="Mikhail Vasin's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Notes on software development</h1>
      <p style={{ textAlign: 'center' }}>Work in progress. Stay tuned...</p>
    </div>
  )
}

export default Home
