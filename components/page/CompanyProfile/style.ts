import styled from "styled-components";
import {COLORS} from "../../../ constants/colors";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-gap: 20px;
`;

export const LogoBox = styled.div`
  background: #c9ffda;
  padding: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Information = styled.div`
  padding: 60px;
  background: ${COLORS.grayDay};
  border-radius: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const About = styled.div``;
export const Name = styled.h1``;
export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;


export const H = styled.div``;
