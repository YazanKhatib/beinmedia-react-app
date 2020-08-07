import * as React from 'react';
import { Logo, Home, Star } from '../../svgs';

import {
  Container,
  OutterContainer,
  InnerContainer,
  Image,
  Button,
  ButtonText,
  TextFirst,
  TextSecond,
  TextThird,
} from './header.style';

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo space='0 0 0 40px' />
      <OutterContainer>
        <Button>
          <ButtonText>مشغول بإستشارة</ButtonText>
        </Button>
        <InnerContainer>
          <TextFirst>العيادة الرقمية</TextFirst>
          <TextSecond>لـ د. هند الناهض</TextSecond>
          <TextThird>
            تقييم
            <Star />
            <Star />
            <Star />
            <Star />
          </TextThird>
        </InnerContainer>
        <Image src={require('../../assets/images/bigavatar.png')} alt='' />
        <Home space='20px 0 0 20px' />
      </OutterContainer>
    </Container>
  );
};
