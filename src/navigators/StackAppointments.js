import { createStackNavigator } from 'react-navigation-stack';

import Conversations from '~/pages/Conversations';
import Appointments from '~/pages/Appointments';
import AppointmentsDoctor from '~/pages/AppointmentsDoctor';
import AppointmentsType from '~/pages/AppointmentsType';
import AppointmentsDate from '~/pages/AppointmentsDate';
import AppointmentsHour from '~/pages/AppointmentsHour';

const StackAppointments = createStackNavigator({
  Conversations: {
    screen: Conversations,
    navigationOptions: {
      header: null,
      title: 'Conversations',
    },
  },
  AppointmentsDoctor: {
    screen: AppointmentsDoctor,
    navigationOptions: {
      header: null,
      title: 'AppointmentsDoctor',
    },
  },
  Appointments: {
    screen: Appointments,
    navigationOptions: {
      header: null,
      title: 'Appointments',
    },
  },
  AppointmentsType: {
    screen: AppointmentsType,
    navigationOptions: {
      header: null,
      title: 'AppointmentsType',
    },
  },
  AppointmentsDate: {
    screen: AppointmentsDate,
    navigationOptions: {
      header: null,
      title: 'AppointmentsDate',
    },
  },
  AppointmentsHour: {
    screen: AppointmentsHour,
    navigationOptions: {
      header: null,
      title: 'AppointmentsHour',
    },
  },
});

export default StackAppointments;
