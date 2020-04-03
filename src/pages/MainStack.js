import { createStackNavigator } from 'react-navigation-stack';

import TabStack from '~/TabStack';

const MainStack = createStackNavigator({
  TabStack: {
    screen: TabStack,
    navigationOptions: {
      header: null,
    },
  },
});

export default MainStack;
