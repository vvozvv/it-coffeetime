import styled from "styled-components";
import {COLORS} from "../../ constants/colors";

export const CardStyle = styled.div`
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  height: 230px;
  background: ${COLORS.grayDay}
`;

export const ImageStyle = styled.div`
  height: 120px;
  & > span {
   height: 100% !important;
   z-index: 1;
  }
`;

export const TextBoxStyle = styled.div`
  padding: 20px;
`;

export const ContainerStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`;
