import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
`;

export const About = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 40px;
`;

export const Information = styled.div`
  padding: 30px;
  background: var(--color-gray);
  border-radius: var(--border-radius);
`;

export const ImageBlock = styled.div``;

export const InfoText = styled.div`
  margin: 30px 0 0 0;
`;

export const Title = styled.h1`
  margin: 0 0 10px 0;
`;

export const Profession = styled.h2`
  margin: 0;
`;

export const CompanyLink = styled.div`
  color: blue;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
