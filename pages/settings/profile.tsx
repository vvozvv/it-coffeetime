import React, {ReactElement} from 'react';
import {SettingsLayout} from "../../layout/SettingsLayout";

const Profile = () => {
  return (
    <div>
      profile
    </div>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <SettingsLayout>
      {page}
    </SettingsLayout>
  )
}

export default Profile;
