import { createStackNavigator } from 'react-navigation-stack';

import Pessoas from '~/pages/Persons';
import ProfilePrograms from '~/pages/ProfilePrograms';
import Programs from '~/pages/Programs';
import ProgramDetail from '~/pages/ProgramDetail';
import ProgramDetailMaternity from '~/pages/ProgramDetailMaternity';
import ProgramDetailPregnancy from '~/pages/ProgramDetailPregnancy';
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
  ProgramDetailMaternity: {
    screen: ProgramDetailMaternity,
    navigationOptions: {
      header: null,
      title: 'ProgramDetailMaternity',
    },
  },
  ProgramDetailPregnancy: {
    screen: ProgramDetailPregnancy,
    navigationOptions: {
      header: null,
      title: 'ProgramDetailPregnancy',
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
