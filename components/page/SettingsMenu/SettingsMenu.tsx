import React from 'react';
import {SettingMenuStyle} from "./style";

const menu = ['Личная информация', 'Безопасность', 'Участие', 'Уведомления']

export const SettingsMenu = () => {
  return (
    <SettingMenuStyle>
      {menu.map((item, idx) => <p key={idx}>{item}</p>)}
    </SettingMenuStyle>
  );
};
