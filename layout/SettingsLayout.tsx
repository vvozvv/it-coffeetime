import React, { ReactNode } from 'react';
import { SettingsMenu } from '../components/page/SettingsMenu/SettingsMenu';
import Header from "../components/page/Header/Header";
import styled from "styled-components";

const SettingsLayoutContainer = styled.main`
    display: grid;
    grid-template-columns: 330px 1fr;
    grid-gap: 30px;
`;


interface ISettingsLayout {
  children: ReactNode;
}

export const SettingsLayout = ({ children }: ISettingsLayout) => {
  return (
    <div>
      <Header />
      <SettingsLayoutContainer className={'container'}>
        <SettingsMenu />
        <main>
          {children}
        </main>
      </SettingsLayoutContainer>

    </div>
  );
};
