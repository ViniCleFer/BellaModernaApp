import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LinhaDoTempo from '~/pages/TimeLine';

const TimeLineStack = createStackNavigator({
  LinhaDoTempo: {
    screen: LinhaDoTempo,
  },
});

export default createAppContainer(TimeLineStack);
