import React from 'react';
import Tag from "./Tag";
import FlexContainer from "../FlexContainer/FlexContainer";
import {TagsStyle} from './style';
import {Paragraph} from "../Paragraph/Paragraph";

interface ITags {
  enableTitle: boolean;
  tags: string[];
}

const Tags = ({enableTitle, tags}: ITags) => {
  return (
    <TagsStyle>
      {enableTitle && <Paragraph size={16}>Теги</Paragraph>}
      <FlexContainer>
        {tags.map((item, idx) => (
          <Tag key={idx} name={item}/>
        ))}
      </FlexContainer>
    </TagsStyle>
  );
};

export default Tags;
