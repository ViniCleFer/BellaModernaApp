import React from 'react';
import { useSelector } from 'react-redux';

import createMainStack from '~/navigators/MainStack';

export default function Index() {
  const signed = useSelector((state) => state.auth.signed);

  const Routes = createMainStack(signed);

  return <Routes />;
}
