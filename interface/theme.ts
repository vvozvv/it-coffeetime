import {ITypography} from "../ constants/typography";

interface IColor {
  [id: string]: string;
}

export interface IButtonColors {
  primary: object;
  secondary: object;
  danger: object;
}

export interface ITheme {
  fontSizes: ITypography;
  space: number[];
  colors: IColor;
  buttonSizes: object;
  buttonColors: IButtonColors;
}
