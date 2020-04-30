import { createStackNavigator } from 'react-navigation-stack';

import Pessoas from '~/pages/Persons';
import Dependents from '~/pages/Dependents';
import ProfilePrograms from '~/pages/ProfilePrograms';
import Programs from '~/pages/Programs';
import ProgramDetail from '~/pages/ProgramDetail';
import MedicalRecord from '~/pages/MedicalRecord';
import TimeLine from '~/pages/TimeLine';

const StackPersons = createStackNavigator({
  Pessoas: {
    screen: Pessoas,
    navigationOptions: {
      header: null,
      title: 'Pessoas',
    },
  },
  Dependents: {
    screen: Dependents,
    navigationOptions: {
      header: null,
      title: 'Dependents',
    },
  },
  ProfilePrograms: {
    screen: ProfilePrograms,
    navigationOptions: {
      header: null,
      title: 'ProfilePrograms',
    },
  },
  Programs: {
    screen: Programs,
    navigationOptions: {
      header: null,
      title: 'Programs',
    },
  },
  ProgramDetail: {
    screen: ProgramDetail,
    navigationOptions: {
      header: null,
      title: 'ProgramDetail',
    },
  },
  MedicalRecord: {
    screen: MedicalRecord,
    navigationOptions: {
      header: null,
      title: 'MedicalRecord',
    },
  },
  TimeLine: {
    screen: TimeLine,
    navigationOptions: {
      header: null,
      title: 'TimeLine',
    },
  },
});

export default StackPersons;
