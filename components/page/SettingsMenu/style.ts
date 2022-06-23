import styled from "styled-components";
import {COLORS} from "../../../ constants/colors";
import Link from "next/link";
import colorToRGBA from "color-to-rgba";

export const SettingMenuStyle = styled.div`
  padding: 20px;
  background: ${COLORS.grayDay};
  border-radius: 15px;
`;

interface ISettingsButtonStyle {
  isActive: boolean;
}

export const SettingsButtonStyle = styled('a')<ISettingsButtonStyle>(({ isActive }: ISettingsButtonStyle) => `
  background: ${isActive ? '#ffffff' : "inherit" };
  display: block;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: ${colorToRGBA('#fff', 0.5)};
  }
`);

