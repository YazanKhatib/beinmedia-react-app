import * as React from 'react';
import { Bell, Account, Arrow } from '../../svgs';

import {
  Container,
  ListText,
  UserText,
  WelcomeText,
  LeftSection,
  RightSection,
} from './style';

export const Navbar: React.FC = () => {
  return (
    <Container>
      <LeftSection>
        <ListText>١٤ قائمة الانتظار</ListText>
        <Arrow space='0 0 0 20px' />
      </LeftSection>

      <RightSection>
        <UserText>مالك محمد</UserText>
        <WelcomeText> مرحبا بك</WelcomeText>
        <Account />
        <Bell space='0 60px' />
      </RightSection>
    </Container>
  );
};
