import React, {ReactNode} from 'react';
import { ContainerStyle } from '../Card/style';
import {H2} from "../Paragraph/Paragraph";
import { SectionStyle } from './style';

interface ISection {
  children: ReactNode;
  title: string;
}

const Section = ({ children, title }: ISection) => {
  return (
    <SectionStyle>
      <H2>{title}</H2>
      <ContainerStyle>
        {children}
      </ContainerStyle>
    </SectionStyle>
  );
};

export default Section;
