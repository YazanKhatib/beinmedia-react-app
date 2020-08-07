import * as React from 'react';
import { Svg } from './style';

interface Props {
  space?: any;
}

export const Wifi: React.FC<Props> = ({ space }) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='70'
      height='70'
      viewBox='0 0 70 70'
      padding={space}
    >
      <defs>
        <filter
          id='Ellipse_2'
          width='70'
          height='70'
          x='0'
          y='0'
          filterUnits='userSpaceOnUse'
        >
          <feOffset dy='4' />
          <feGaussianBlur result='blur' stdDeviation='3' />
          <feFlood floodOpacity='.161' />
          <feComposite in2='blur' operator='in' />
          <feComposite in='SourceGraphic' />
        </filter>
      </defs>
      <g filter='url(#Ellipse_2)'>
        <g
          id='Ellipse_2-2'
          fill='#fff'
          stroke='#e28519'
          strokeWidth='3px'
          data-name='Ellipse 2'
          transform='translate(9 5)'
        >
          <circle cx='26' cy='26' r='26' stroke='none' />
          <circle cx='26' cy='26' r='24.5' fill='none' />
        </g>
      </g>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='21.81'
        height='18.007'
        viewBox='0 0 21.81 18.007'
        x='24'
        y='22'
      >
        <path
          id='wifi'
          fill='#e28519'
          d='M12 15a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-8a7.06 7.06 0 0 0-4.95 2.05 1 1 0 1 0 1.41 1.41 5 5 0 0 1 7.08 0A1.015 1.015 0 1 0 17 13.05 7.06 7.06 0 0 0 12 11zm0-4a11.08 11.08 0 0 0-7.78 3.22 1 1 0 0 0 1.42 1.42 9 9 0 0 1 12.72 0 1 1 0 1 0 1.42-1.42A11.08 11.08 0 0 0 12 7zm10.61.39a15 15 0 0 0-21.22 0 1 1 0 0 0 1.42 1.42 13 13 0 0 1 18.38 0 1 1 0 1 0 1.42-1.42z'
          transform='translate(-1.096 -2.993)'
        />
      </svg>
    </Svg>
  );
};
