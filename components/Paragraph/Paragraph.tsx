import React, {ReactNode} from 'react';
import {IColorsPalette} from "../../ constants/colors";
import {H1Style, H2Style, H3Style, P} from "./style";

// type IColor = COLORS.text | CO

export interface IParagraph {
  color?: IColorsPalette;
  children: ReactNode;
  size?: number;
  lineHeight?: number;
}

export const Paragraph = (props: IParagraph) => <P {...props}> {props.children} </P>;

export const H1 = (props: IParagraph) => <H1Style {...props}> {props.children} </H1Style>;

export const H2 = (props: IParagraph) => <H2Style {...props}> {props.children} </H2Style>;

export const H3 = (props: IParagraph) => <H3Style {...props}> {props.children} </H3Style>;
