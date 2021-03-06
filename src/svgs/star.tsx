import * as React from 'react';
import { Svg } from './style';

interface Props {
  space?: any;
}

export const Star: React.FC<Props> = ({ space }) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      id='Group'
      width='13.61'
      height='13.101'
      viewBox='0 0 13.61 13.101'
      padding={space}
    >
      <defs>
        <linearGradient
          id='linear-gradient'
          x1='.196'
          x2='.848'
          y1='.111'
          y2='1'
          gradientUnits='objectBoundingBox'
        >
          <stop offset='0' stopColor='#e83866' />
          <stop offset='.067' stopColor='#e83866' />
          <stop offset='.801' stopColor='#e57a3c' />
          <stop offset='1' stopColor='#e57a3c' />
        </linearGradient>
      </defs>
      <path
        id='Path_1050'
        fill='url(#linear-gradient)'
        d='M13.61 14.573l-4.945-.325L6.8 9.569l-1.86 4.679-4.94.325 3.789 3.217-1.243 4.88L6.8 19.979l4.257 2.691-1.241-4.88z'
        data-name='Path 1050'
        transform='translate(0 -9.569)'
      />
    </Svg>
  );
};
