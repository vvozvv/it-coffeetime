import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {MainSection, MainTitle} from "./global";
import Logo from '../public/coffee-svgrepo-com.svg';
import Image from "next/image";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>IT-COFFEETIME</title>
        <meta name="description" content="IT-COFFEETIME" />
        <link rel="icon" href="/IT-COFFEETIME.ico" />
      </Head>

      <main className="container">
        <MainSection>
          <div>
            <MainTitle>IT <br/>  COFFEE <br/> TIME </MainTitle>
            <Image
              src={Logo}
              alt="Picture of the author"
              width={50}
              height={50}
            />
          </div>
        </MainSection>
      </main>
    </div>
  )
}

Home.displayName = 'Home';

export default Home
