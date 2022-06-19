import {theme} from "../../ constants/theme";
import styled from "styled-components";
import {IParagraph} from "./Paragraph";
import {COLORS} from "../../ constants/colors";

const DefaultParagraph = styled.p`
  margin: 0;
`;

export const H1Style = styled.h1(() => `
    color: ${COLORS.text};
    font-size: ${theme.fontSizes.fontSizeH1};
    line-height: ${theme.fontSizes.lineHeight1};
    font-family: ${theme.fontSizes.fontFamily};
`);

export const H2Style = styled.h2(() => `
    color: ${COLORS.text};
    font-size: ${theme.fontSizes.fontSizeH2};
    line-height: ${theme.fontSizes.lineHeight2};
    font-family: ${theme.fontSizes.fontFamily};
`);

export const H3Style = styled.h3(() => `
    color: ${COLORS.text};
    font-size: ${theme.fontSizes.fontSizeH3};
    line-height: ${theme.fontSizes.lineHeight3};
    font-family: ${theme.fontSizes.fontFamily};
`);

export const P = styled(DefaultParagraph)(({ color, size, lineHeight}: IParagraph) => `
    color: ${color ? COLORS[color] : COLORS.text};
    font-size: ${size ? `${size}px` : theme.fontSizes.fontSize1};
    line-height: ${lineHeight ? `${lineHeight}px` : theme.fontSizes.lineHeight1};
    font-family: ${theme.fontSizes.fontFamily};
`);
