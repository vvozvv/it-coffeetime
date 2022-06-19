import React from 'react';
import {About, Box, Container, Information, LogoBox, Name} from "./style";
import Logo from "../../../public/point.png";
import ShareIcon from "../../../public/icon/share.svg";
import Image from "next/image";
import FlexContainer from "../../FlexContainer/FlexContainer";
import Link from "next/link";
import InfoBox from "../../InfoBox/InfoBox";
import Button from "../../Button/Button";
import {Paragraph} from "../../Paragraph/Paragraph";
import Tags from "../../Tags/Tags";
import {IProfile} from "../../../interface/profile";

interface ICompanyProfile {
  profile: IProfile
}

const CompanyProfile = ({profile}: ICompanyProfile) => {
  return (
    <Container>
      <LogoBox>
        <Image
          src={Logo}
          alt=""
          width={150}
          height={150}
          objectFit={'scale-down'}
        />
      </LogoBox>
      <Information>
        <About>
          <Name>{profile?.name}</Name>
          <FlexContainer>
            <Button size="s">Вступить</Button>
            <Link href={'/'}>
              <Image
                src={ShareIcon}
                alt=""
                width={25}
                height={25}
              />
            </Link>
          </FlexContainer>
        </About>
        <Box>
          <InfoBox title={'В it-coffee'}>
            <Paragraph>24 сотрудника</Paragraph>
          </InfoBox>
          <InfoBox title={'В it-coffee'}>
            <Paragraph>24 сотрудника</Paragraph>
          </InfoBox>
          <InfoBox title={'Город'}>
            <Paragraph>Москва</Paragraph>
          </InfoBox>
          <InfoBox title={'Сайт'}>
            <Link href={'/'}>site.ru</Link>
          </InfoBox>
          {profile?.info?.tags && (
            <Tags enableTitle tags={profile.info.tags}/>
          )}
        </Box>
      </Information>
    </Container>
  );
};

export default CompanyProfile;
