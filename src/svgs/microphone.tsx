import * as React from 'react';
import { Svg } from './style';

interface Props {
  space?: any;
}

export const Microphone: React.FC<Props> = ({ space }) => {
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
          stroke='#1dd950'
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
        width='22.752'
        height='31.284'
        viewBox='0 0 22.752 31.284'
        x='24'
        y='16'
      >
        <path
          id='Path_1035'
          fill='#1dd950'
          d='M15.376 20.908a5.688 5.688 0 0 0 5.688-5.688V6.688a5.688 5.688 0 1 0-11.376 0v8.532a5.688 5.688 0 0 0 5.688 5.688zm-2.844-14.22a2.844 2.844 0 1 1 5.688 0v8.532a2.844 2.844 0 1 1-5.688 0zm14.22 8.532a1.422 1.422 0 0 0-2.844 0 8.532 8.532 0 1 1-17.064 0 1.422 1.422 0 1 0-2.844 0 11.377 11.377 0 0 0 9.954 11.28v2.94H11.11a1.422 1.422 0 0 0 0 2.844h8.532a1.422 1.422 0 0 0 0-2.844H16.8V26.5a11.377 11.377 0 0 0 9.952-11.28z'
          data-name='Path 1035'
          transform='translate(-4 -1)'
        />
      </svg>
    </Svg>
  );
};
