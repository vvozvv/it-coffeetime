import React, {ReactNode} from 'react';
import Header from "../components/page/Header/Header";

interface IMainLayout {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
  console.log(children)
  return (
    <>
      <Header />
      <main className={'container'}>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
