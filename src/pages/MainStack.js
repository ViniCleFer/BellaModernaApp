import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TabStack from '~/TabStack';
import Login from '~/pages/SignIn';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createStackNavigator({
          Login,
        }),
        App: createStackNavigator({
          TabStack: {
            screen: TabStack,
            navigationOptions: {
              header: null,
            },
          },
        }),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
