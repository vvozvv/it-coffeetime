import styled from "styled-components";
import {Appearance} from "./types";
import {SpaceProps, variant, SizeProps} from 'styled-system';
import {theme} from "../../ constants/theme";

interface IButtonProps {
  appearance: Appearance;
}

type Props = IButtonProps & SpaceProps & SizeProps;

export const ButtonCustom = styled.button<Props>`
  ${theme['buttonColors'].primary}

  font-size: 1em;
  padding: 1em 2em;
  border-radius: 3px;
  cursor: pointer;
  border: none;
  height: auto;

  &:hover {
    cursor: pointer;
    background: #EDEDED;
  }
  &:focus, &:active {
    background: #DBDBDB;
    border: 1px solid #7F7F7F;
  }
`;


export const Button = styled(ButtonCustom)(
  variant({
    prop: 'size',
    variants: theme['buttonSizes']
  }),
  variant({
    prop: 'color',
    variants: theme['buttonColors']
  })
)
