import React, { ReactNode } from 'react';
import { SettingsMenu } from '../components/page/SettingsMenu/SettingsMenu';
import Header from "../components/page/Header/Header";

interface ISettingsLayout {
  children: ReactNode;
}

export const SettingsLayout = ({ children }: ISettingsLayout) => {
  return (
    <div>
      <Header />
      <main className={'container'}>
        <SettingsMenu />
        <main>
          {children}
        </main>
      </main>

    </div>
  );
};
