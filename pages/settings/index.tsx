import React, { ReactElement } from 'react';
import { SettingsLayout } from '../../layout/SettingsLayout';

const Settings = () => {
  return (
    <div>
      Настройка страницы
    </div>
  );
};

Settings.getLayout = function getLayout(page: ReactElement) {
  return (
    <SettingsLayout>
      {page}
    </SettingsLayout>
  )
}

export default Settings;
