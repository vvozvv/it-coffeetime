import React from 'react';
import {TagItem} from "./style";
import {Paragraph} from "../Paragraph/Paragraph";

interface ITag {
  name: string;
}

const Tag = ({ name }: ITag) => {
  return (
    <TagItem>
      <Paragraph size={14}>{name}</Paragraph>
    </TagItem>
  );
};

export default Tag;
