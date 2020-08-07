import * as React from 'react';
import { Svg } from './style';

interface Props {
  space?: any;
}

export const Arrow: React.FC<Props> = ({ space }) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='16.989'
      height='17.01'
      viewBox='0 0 16.989 17.01'
      padding={space}
    >
      <path
        id='arrow-right_2_'
        fill='#1d428b'
        d='M22.883 13.961a1.416 1.416 0 0 0-.3-.467L15.5 6.412a1.422 1.422 0 0 0-2.011 2.011l4.674 4.66H7.416a1.416 1.416 0 0 0 0 2.833h10.75l-4.674 4.66a1.422 1.422 0 1 0 2.008 2.011l7.082-7.082a1.464 1.464 0 0 0 .3-1.544z'
        data-name='arrow-right (2)'
        transform='translate(-6 -5.996)'
      />
    </Svg>
  );
};
