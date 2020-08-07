import * as React from 'react';
import { Svg } from './style';

interface Props {
  space?: any;
}

export const Home: React.FC<Props> = ({ space }) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='19'
      viewBox='0 0 22 19'
      padding={space}
    >
      <path
        id='icons8-home_1_'
        fill='#435f95'
        d='M12 2a1 1 0 0 0-.711.3L1.2 11.1a.5.5 0 0 0 .3.9H4v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8h2.5a.5.5 0 0 0 .3-.9L12.717 2.3h-.006A1 1 0 0 0 12 2z'
        data-name='icons8-home (1)'
        transform='translate(-1 -2)'
      />
    </Svg>
  );
};
