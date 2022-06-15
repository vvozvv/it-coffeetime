import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>IT-COFFEETIME</title>
        <meta name="description" content="IT-COFFEETIME" />
        <link rel="icon" href="../public/IT-COFFEETIME.ico" />
      </Head>

      <main className={styles.main}>
        <h1>IT-COFFEETIME</h1>
      </main>
    </div>
  )
}

export default Home
