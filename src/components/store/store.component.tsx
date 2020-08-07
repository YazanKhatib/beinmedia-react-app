import * as React from 'react';
import { Download } from '../../svgs';

import {
  Container,
  InnerContainer,
  Card,
  Image,
  Text,
  SmallText,
} from './store.style';
import _ from 'lodash';

interface Props {
  count: number;
}

export const Store: React.FC<Props> = ({ count }) => {
  return (
    <Container>
      {_.times(count, (i) => (
        <Card key={i}>
          <Image src={require('../../assets/images/samples.png')} alt='' />
          <Text>تعرف على أسرار صناعة المحتوى التسويقي الفعال</Text>
          <InnerContainer>
            <SmallText>
              <Download space='0 5px 0 0' />
              12
            </SmallText>
            <SmallText>دينار كويتي 550</SmallText>
          </InnerContainer>
        </Card>
      ))}
    </Container>
  );
};
