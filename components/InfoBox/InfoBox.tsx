import React, {ReactNode} from 'react';
import {Paragraph} from "../Paragraph/Paragraph";

interface IInfoBox {
  title: string;
  children: ReactNode;
}

const InfoBox = ({title, children}: IInfoBox) => {
  return (
    <div>
      <Paragraph color={'grayNight'}>{title}</Paragraph>
      {children}
    </div>
  );
};

export default InfoBox;
