import React, {ReactElement} from 'react';
import MainLayout from "../layout/MainLayout";
import Head from "next/head";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Профиль</title>
        <meta name="description" content="IT-COFFEETIME" />
        <link rel="icon" href="/IT-COFFEETIME.ico" />
      </Head>
      <div>
        Профиль
      </div>
    </>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default Profile;
