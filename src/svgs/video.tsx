import * as React from 'react';
import { Svg } from './style';

interface Props {
  space?: any;
}

export const Video: React.FC<Props> = ({ space }) => {
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
          stroke='#e21956'
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
        width='24.01'
        height='14.406'
        viewBox='0 0 24.01 14.406'
        x='24'
        y='24'
      >
        <path
          id='Path_1044'
          fill='#e21956'
          d='M25.446 7.381a1.2 1.2 0 0 0-1.2 0l-4.238 2.088A3.6 3.6 0 0 0 16.406 6H5.6A3.6 3.6 0 0 0 2 9.6v7.2a3.6 3.6 0 0 0 3.6 3.6h10.8a3.6 3.6 0 0 0 3.6-3.469l4.274 2.137A1.189 1.189 0 0 0 26.003 18V8.4a1.2 1.2 0 0 0-.557-1.019zM17.607 16.8a1.2 1.2 0 0 1-1.2 1.2H5.6a1.2 1.2 0 0 1-1.2-1.2V9.6a1.2 1.2 0 0 1 1.2-1.2h10.8a1.2 1.2 0 0 1 1.2 1.2zm6-.744l-3.6-1.8v-2.109l3.6-1.8z'
          data-name='Path 1044'
          transform='translate(-2 -6)'
        />
      </svg>
    </Svg>
  );
};
