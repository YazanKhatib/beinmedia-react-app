import * as React from 'react';
import { Svg } from './style';

interface Props {
  space?: any;
}

export const Logo: React.FC<Props> = ({ space }) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='247.069'
      height='73.705'
      viewBox='0 0 247.069 73.705'
      padding={space}
    >
      <defs>
        <linearGradient
          id='linear-gradient'
          x1='.211'
          x2='.881'
          y1='.211'
          y2='1'
          gradientUnits='objectBoundingBox'
        >
          <stop offset='0' stopColor='#0f2756' />
          <stop offset='1' stopColor='#1d428b' />
        </linearGradient>
        <linearGradient
          id='linear-gradient-2'
          x1='.144'
          x2='1'
          y2='1'
          gradientUnits='objectBoundingBox'
        >
          <stop offset='0' stopColor='#e83866' />
          <stop offset='.244' stopColor='#e83866' />
          <stop offset='.715' stopColor='#e57a3c' />
          <stop offset='1' stopColor='#e57a3c' />
        </linearGradient>
      </defs>
      <g
        id='Group_71'
        data-name='Group 71'
        transform='translate(-249.052 -307.367)'
      >
        <g
          id='Group_68'
          data-name='Group 68'
          transform='translate(249.052 307.367)'
        >
          <g id='Group_70' data-name='Group 70'>
            <rect
              id='Rectangle_968'
              width='73.643'
              height='73.643'
              fill='#0f2756'
              data-name='Rectangle 968'
              rx='26'
              transform='translate(0 .062)'
            />
            <path
              id='Path_988'
              fill='url(#linear-gradient-2)'
              d='M876.477 1993.9v8.815h-7.409v9.22h7.409v26.906s.325 8.761 4.517 12.668 12.42 3.744 12.42 3.744h6.131l.288-10.072s-13.252 3.876-12.875-10.053.505-23.194.505-23.194h12.369v-9.22h-12.369v-8.814z'
              data-name='Path 988'
              transform='translate(-856.918 -1993.897)'
            />
          </g>
        </g>
        <text
          id='timeviewer'
          fill='#fff'
          fontFamily='Poppins-SemiBold, Poppins SemiBold'
          fontSize='27px'
          fontWeight='600'
          transform='translate(340.928 338.471)'
        >
          <tspan x='0' y='0'>
            timeviewer
          </tspan>
        </text>
        <text
          id='العيادة_الرقمية'
          fill='#fff'
          data-name='العيادة الرقمية'
          fontFamily='LoewNextArabic-Bold, Loew Next Arabic'
          fontSize='16px'
          fontWeight='700'
          letterSpacing='0.16em'
          transform='translate(341.121 366.976)'
        >
          <tspan x='0' y='0'>
            العيادة الرقمية
          </tspan>
        </text>
      </g>
    </Svg>
  );
};
