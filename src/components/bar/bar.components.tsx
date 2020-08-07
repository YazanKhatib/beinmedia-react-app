import React, { Dispatch } from 'react';
import { Wifi, Video, Microphone } from '../../svgs';

import {
  Container,
  Text,
  Box,
  State,
  Button,
  LeftSection,
  RightSection,
} from './bar.style';

interface Props {
  state: number;
  setState: Dispatch<number>;
}

export const Bar: React.FC<Props> = ({ state, setState }) => {
  return (
    <Container>
      <LeftSection>
        <Box>
          <State>
            <Text>سرعة الأنترنت</Text>
            <Text>٣٦ Mbps</Text>
          </State>
          <Wifi />
        </Box>

        <Box>
          <State>
            <Text>تجربة الكاميرا</Text>
            <Text>لم تقم باختبارها</Text>
          </State>
          <Video />
        </Box>

        <Box>
          <State>
            <Text>تجربة الكاميرا</Text>
            <Text>جيد جدآ</Text>
          </State>
          <Microphone />
        </Box>
      </LeftSection>

      <RightSection>
        <Button active={state === 4} onClick={() => setState(4)}>
          حجز عيادة (20 دينار كويتي)
        </Button>
        <Button active={state === 3} onClick={() => setState(3)}>
          كورسات
        </Button>
        <Button active={state === 2} onClick={() => setState(2)}>
          برودكاست
        </Button>
        <Button active={state === 1} onClick={() => setState(1)}>
          متجر
        </Button>
        <Button active={state === 0} onClick={() => setState(0)}>
          نبذه عن هند
        </Button>
      </RightSection>
    </Container>
  );
};
