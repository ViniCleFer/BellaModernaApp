import React from 'react';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

import Conversas from '~/pages/Conversations';
import Records from '~/pages/Records';
import StackPersons from '~/navigators/StackPersons';
import SwitchMore from '~/navigators/SwitchMore';

const TabStack = createBottomTabNavigator(
  {
    Conversas,
    Records: {
      screen: Records,
      navigationOptions: {
        header: null,
        title: 'Prontuarios',
      },
    },
    StackPersons: {
      screen: StackPersons,
      navigationOptions: {
        header: null,
        title: 'Pessoas',
      },
    },
    SwitchMore: {
      screen: SwitchMore,
      navigationOptions: {
        header: null,
        title: 'Mais',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#A51C60',
      inactiveTintColor: '#958FA3',
      style: {
        backgroundColor: '#FFF',
        height: hp('10.56%'),
      },
      labelStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('2.11%'),
      },
    },

    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = Icon;
        let iconName;

        if (routeName === 'Conversas') iconName = 'comments';
        else if (routeName === 'Records') iconName = 'user-md';
        else if (routeName === 'StackPersons') iconName = 'users';
        else if (routeName === 'SwitchMore') iconName = 'ellipsis-h';

        return (
          <IconComponent
            style={{ marginTop: hp('1.94%') }}
            name={iconName}
            size={20}
            color={tintColor}
          />
        );
      },
    }),
  }
);

export default TabStack;
