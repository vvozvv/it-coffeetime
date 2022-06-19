import {COLORS} from "./colors";
import colorToRGBA from "color-to-rgba";
import {ITheme} from "../interface/theme";
import {Typography} from "./typography";


export const theme: ITheme = {
  fontSizes: Typography,
  /** Отступы и границы */
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  /** Общие цвета */
  colors: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    text: COLORS.text,
    error: COLORS.error
  },
  /** Размеры кнопок */
  buttonSizes: {
    s: {
      fontSize: Typography.fontSize3,
      lineHeight: Typography.lineHeight3,
    },
    m: {
      fontSize: Typography.fontSize2,
      lineHeight: Typography.lineHeight2,
    },
    l: {
      fontSize: Typography.fontSize1,
      lineHeight: Typography.lineHeight1,
    },
  },
  /** Цвета кнопок */
  buttonColors: {
    primary: {
      backgroundColor: COLORS.primary,
      '&:hover': {
        backgroundColor: `${colorToRGBA(COLORS.primary, 0.6)}`
      }
    },
    secondary: {
      backgroundColor: COLORS.secondary,
      color: '#fff',
      '&:hover': {
        backgroundColor: `${colorToRGBA(COLORS.secondary, 0.6)}`
      }
    },
    danger: {
      backgroundColor: COLORS.danger,
      color: '#fff',
      '&:hover': {
        backgroundColor: `${colorToRGBA(COLORS.danger, 0.6)}`
      }
    },
  }
}
