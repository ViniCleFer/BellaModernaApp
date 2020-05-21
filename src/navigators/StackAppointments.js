import { createStackNavigator } from 'react-navigation-stack';

import Conversations from '~/pages/Conversations';
import Appointments from '~/pages/Appointments';

const StackAppointments = createStackNavigator({
  Conversations: {
    screen: Conversations,
    navigationOptions: {
      header: null,
      title: 'Conversations',
    },
  },
  Appointments: {
    screen: Appointments,
    navigationOptions: {
      header: null,
      title: 'Appointments',
    },
  },
});

export default StackAppointments;
