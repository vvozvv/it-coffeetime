import React, {ReactElement} from 'react';
import MainLayout from "../layout/MainLayout";
import Head from "next/head";
import {PLACE_RECOMMEND, PROFILE} from "../model/profile.mock";
import CompanyProfile from "../components/page/CompanyProfile/CompanyProfile";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";
import PersonalProfile from '../components/page/PersonalProfile/PersonalProfile';

const Profile = () => {
  return (
    <>
      <Head>
        <title>Профиль</title>
        <meta name="description" content="IT-COFFEETIME"/>
        <link rel="icon" href="/IT-COFFEETIME.ico"/>
      </Head>

      <div>
        {/*<PersonalProfile profile={PROFILE} />*/}
        <CompanyProfile profile={PROFILE}/>
        <Section title={'Любимые места'}>
          {PLACE_RECOMMEND.map((item, index) => (
            <Card key={index} name={item.name} underground={item.underground}/>
          ))}
        </Section>
        <Section title={'Скидки компании'}>
          {PLACE_RECOMMEND.map((item, index) => (
            <Card key={index} name={item.name} underground={item.underground}/>
          ))}
        </Section>
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
