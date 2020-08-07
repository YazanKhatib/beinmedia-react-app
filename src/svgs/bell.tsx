import * as React from 'react';
import { Svg } from './style';

interface Props {
  space?: any;
}

export const Bell: React.FC<Props> = ({ space }) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='21.406'
      height='27.928'
      viewBox='0 0 26.406 32.928'
      padding={space}
    >
      <path
        id='Path_995'
        fill='#1c3668'
        d='M27.105 20.451V15.2a9.9 9.9 0 0 0-8.252-9.754V3.65a1.65 1.65 0 0 0-3.3 0v1.8A9.9 9.9 0 0 0 7.3 15.2v5.248A4.952 4.952 0 0 0 4 25.105v3.3a1.651 1.651 0 0 0 1.65 1.65h5.182a6.6 6.6 0 0 0 12.741 0h5.182a1.651 1.651 0 0 0 1.65-1.65v-3.3a4.952 4.952 0 0 0-3.3-4.654zM10.6 15.2a6.6 6.6 0 1 1 13.2 0v4.951H10.6zm6.6 16.5a3.3 3.3 0 0 1-2.839-1.65h5.677a3.3 3.3 0 0 1-2.838 1.657zm9.9-4.951H7.3v-1.65a1.651 1.651 0 0 1 1.65-1.65h16.5a1.651 1.651 0 0 1 1.65 1.65z'
        data-name='Path 995'
        transform='translate(-4 -2)'
      />
    </Svg>
  );
};
