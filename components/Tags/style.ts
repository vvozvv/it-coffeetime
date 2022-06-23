import styled from "styled-components";
import {COLORS} from "../../ constants/colors";

export const TagItem = styled.div`
  padding: 2px 15px;
  border-radius: 5px;
  background: ${COLORS.primary};
  font-size: 16px;
`;

export const TagsStyle = styled.div`
  grid-column: 1 / 4;
`;
