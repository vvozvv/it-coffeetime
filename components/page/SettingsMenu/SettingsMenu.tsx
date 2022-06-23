import React from 'react';
import {SettingMenuStyle, SettingsButtonStyle} from "./style";
import Link from "next/link";
import {useRouter} from "next/router";

interface IMenuList {
  text: string;
  path: string;
}

const menu: IMenuList[] = [
  {text: 'Личная информация', path: '/settings'},
  {text: 'Безопасность', path: '/settings/profile'},
  {text: 'Участие', path: '/'},
  {text: 'Уведомления', path: '/'},
]

export const SettingsMenu = () => {
  const router = useRouter();

  return (
    <SettingMenuStyle>
      {menu.map((item, idx) => (
        <Link href={item.path} key={idx}>
          <SettingsButtonStyle isActive={router.asPath === item.path} >
            <p>{item.text}</p>
          </SettingsButtonStyle>
        </Link>
      ))}
    </SettingMenuStyle>
  );
};
