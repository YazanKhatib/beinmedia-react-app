import * as React from 'react';
import { Svg } from './style';

interface Props {
  space?: any;
}

export const Account: React.FC<Props> = ({ space }) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='50'
      height='50'
      viewBox='0 0 60 60'
      padding={space}
    >
      <defs>
        <filter
          id='Ellipse_1'
          width='60'
          height='60'
          x='0'
          y='0'
          filterUnits='userSpaceOnUse'
        >
          <feOffset />
          <feGaussianBlur result='blur' stdDeviation='2.5' />
          <feFlood floodOpacity='.161' />
          <feComposite in2='blur' operator='in' />
          <feComposite in='SourceGraphic' />
        </filter>
      </defs>
      <g filter='url(#Ellipse_1)'>
        <g
          id='Ellipse_1-2'
          fill='#e9edf0'
          stroke='#a7b5d2'
          strokeWidth='2px'
          data-name='Ellipse 1'
          transform='translate(7.5 7.5)'
        >
          <circle cx='22.5' cy='22.5' r='22.5' stroke='none' />
          <circle cx='22.5' cy='22.5' r='21.5' fill='none' />
        </g>
      </g>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='27.247'
        height='27.247'
        viewBox='0 0 27.247 27.247'
        x='16'
        y='16'
      >
        <defs>
          <linearGradient
            id='linear-gradient'
            x1='.186'
            x2='.87'
            y1='.94'
            y2='.208'
            gradientUnits='objectBoundingBox'
          >
            <stop offset='.067' stopColor='#e83866' />
            <stop offset='.801' stopColor='#e57a3c' />
          </linearGradient>
        </defs>
        <path
          id='Path_994'
          fill='url(#linear-gradient)'
          d='M15.669 2A13.71 13.71 0 0 0 2 15.669a13.275 13.275 0 0 0 3.554 9.159 13.627 13.627 0 0 0 19.274.82l.82-.82a13.622 13.622 0 0 0-.82-19.274A13.275 13.275 0 0 0 15.669 2zm0 24.605A11.224 11.224 0 0 1 8.015 23.6a8.255 8.255 0 0 1 10.662-4.511 8.123 8.123 0 0 1 4.511 4.511 10.647 10.647 0 0 1-7.519 3.005zm-2.733-13.669a2.734 2.734 0 1 1 2.734 2.734 2.742 2.742 0 0 1-2.734-2.734zm12.166 8.2a11.747 11.747 0 0 0-5.332-4.646 5.293 5.293 0 0 0-.547-7.655 5.537 5.537 0 0 0-7.655.41 5.589 5.589 0 0 0 0 7.245 11.747 11.747 0 0 0-5.331 4.648 10.936 10.936 0 1 1 18.864 0z'
          data-name='Path 994'
          transform='translate(-2 -2)'
        />
      </svg>
    </Svg>
  );
};
