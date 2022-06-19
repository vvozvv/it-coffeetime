import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import { SpaceProps, SizeProps } from 'styled-system';

export type Appearance = 'primary' | 'secondary' | 'danger';
export type Dimension = 's' | 'm' | 'l';

export interface StyledButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'>, SpaceProps, SizeProps {
  color?: Appearance;
  size?: Dimension;
}
