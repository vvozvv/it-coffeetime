export interface ITypography {
  fontFamily: string;
  fontSize1: string;
  fontSize2: string;
  fontSize3: string;
  fontSizeH1: string;
  fontSizeH2: string;
  fontSizeH3: string
  lineHeight1: string;
  lineHeight2: string;
  lineHeight3: string;
  lineHeightH1: string;
  lineHeightH2: string;
  lineHeightH3: string;
}

export const Typography: ITypography = {
  fontFamily: '"Inter", sans-serif',
  fontSize1: '16px',
  fontSize2: '14px',
  fontSize3: '12px',
  fontSizeH1: '28px',
  fontSizeH2: '22px',
  fontSizeH3: '18px',
  lineHeight1: '24px',
  lineHeight2: '20px',
  lineHeight3: '16px',
  lineHeightH1: '28px',
  lineHeightH2: '24px',
  lineHeightH3: '24px',
};

export type TypographyWeight = 'normal' | 'lighter' | 'bold';
