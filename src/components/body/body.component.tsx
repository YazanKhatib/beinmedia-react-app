import * as React from 'react';
import { Store, About } from '../../components';

import { Container, LeftSection, RightSection, Image } from './body.style';

interface Props {
  state: number;
}

const component = (state: number) => {
  switch (state) {
    case 0:
      return <About />;
    case 1:
      return <Store count={5} />;
    case 2:
      return <Store count={10} />;
  }
};

export const Body: React.FC<Props> = ({ state }) => {
  return (
    <Container>
      <LeftSection>
        <Image
          src={require('../../assets/images/hendalnahedhsedited.png')}
          alt=''
        />
      </LeftSection>

      <RightSection>{component(state)}</RightSection>
    </Container>
  );
};
