import React from 'react';
import {CardStyle, ImageStyle, TextBoxStyle} from './style';
import {Paragraph} from "../Paragraph/Paragraph";
import MockImage from '../../public/mock-image.jpg'
import Image from "next/image";

interface ICard {
  name: string;
  underground: string;
}

const Card = ({name, underground}: ICard) => {
  return (
    <CardStyle>
      <ImageStyle>
        <Image
          src={MockImage}
          alt=""
          width={300}
          height={100}
        />
      </ImageStyle>
      <TextBoxStyle>
        <Paragraph lineHeight={18}>{name}</Paragraph>
        <Paragraph size={10}>{underground}</Paragraph>
      </TextBoxStyle>
    </CardStyle>
  );
};

export default Card;
