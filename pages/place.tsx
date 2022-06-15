import React, {ReactElement} from 'react';
import MainLayout from "../layout/MainLayout";
import Head from "next/head";

const Place = () => {
  return (
    <>
      <Head>
        <title>Места</title>
        <meta name="description" content="IT-COFFEETIME" />
        <link rel="icon" href="/IT-COFFEETIME.ico" />
      </Head>
      <div>
        Места
      </div>
    </>
  );
};

Place.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default Place;
