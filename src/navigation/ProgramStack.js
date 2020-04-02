import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Programas from '~/pages/Programs';

const ProgramStack = createStackNavigator({
  Programas: {
    screen: Programas,
  },
});

export default createAppContainer(ProgramStack);
