import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import Logo from '../../../public/coffee-svgrepo-com.svg';
import NotificationIcon from '../../../public/icon-notification.svg';
import {Account, AccountName, HeaderContainer, SiteName} from "./style";
import {LOGO_ICON_SIZE, NOTIFICATION_ICON_SIZE} from "../../../ constants/app";
import FlexContainer from "../../FlexContainer/FlexContainer";

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <FlexContainer align={'center'}>
          <Image
            src={Logo}
            alt="Picture of the author"
            width={LOGO_ICON_SIZE}
            height={LOGO_ICON_SIZE}
          />
          <SiteName>IT-COFFEETIME</SiteName>
        </FlexContainer>
      </Link>
      <Account>
        <Image
          src={NotificationIcon}
          alt="notification"
          width={NOTIFICATION_ICON_SIZE}
          height={NOTIFICATION_ICON_SIZE}
        />
        <AccountName>Иван Иванов</AccountName>
      </Account>
    </HeaderContainer>
  );
};

Header.displayName = 'Header';

export default Header;
