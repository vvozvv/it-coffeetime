import React from 'react';
import {About, CompanyLink, Container, ImageBlock, Information, InfoText, Profession, Title} from "./style";
import Image from 'next/image';
import Link from "next/link";
import {IProfile} from "../../../interface/profile";
import Tags from "../../Tags/Tags";
import MockImage from '../../../public/mock-image.jpg'
import { H1, H3 } from '../../Paragraph/Paragraph';

interface IPersonalProfile {
  profile: IProfile;
}

const PersonalProfile = ({ profile }: IPersonalProfile) => {
  const companyName = profile.info.company ? `@${profile.info.company}` : 'Без компании';
  return (
    <Container>
      <About>
        <ImageBlock>
          <Image
            src={MockImage}
            alt=""
            width={300}
            height={100}
          />
        </ImageBlock>
        <div>
          <H1>{profile.name}, {profile.age}</H1>
          <H3 color={'grayNight'} weight={'normal'}>{profile.profession},</H3>
          <Link href={'/'}>
            <CompanyLink>{companyName}</CompanyLink>
          </Link>
          <InfoText>
            {profile.about}
          </InfoText>
        </div>
      </About>
      <Information>
        Информация
        <Tags enableTitle tags={profile.info.tags} />
      </Information>
    </Container>
  );
};

export default PersonalProfile;
