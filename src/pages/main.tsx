import * as React from 'react';
import { Navbar, Header, Bar, Body } from '../components';
interface Props {}

const Main: React.FC<Props> = () => {
  const [state, setState] = React.useState(1);

  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Bar state={state} setState={setState} />
      <Body state={state} />
    </React.Fragment>
  );
};

export default Main;
