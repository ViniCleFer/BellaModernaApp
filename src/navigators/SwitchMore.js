import { createSwitchNavigator } from 'react-navigation';

import More from '~/pages/More';
import Questionnaires from '~/pages/Questionnaires';
import Programs from '~/pages/Programs';
import StackAccount from '~/navigators/StackAccount';
import StackPersonalData from '~/navigators/StackPersonalData';
import StackLegalInfo from '~/navigators/StackLegalInfo';
import PersonalData from '~/pages/PersonalData';
import PlanDetails from '~/pages/PlanDetails';
import Payment from '~/pages/Payment';

const SwitchMore = createSwitchNavigator({
  More: {
    screen: More,
    navigationOptions: {
      header: null,
      title: 'Mais',
    },
  },
  Questionnaires: {
    screen: Questionnaires,
    navigationOptions: {
      header: null,
      title: 'Questionnaires',
    },
  },
  Programs: {
    screen: Programs,
    navigationOptions: {
      header: null,
      title: 'Programs',
    },
  },
  StackAccount: {
    screen: StackAccount,
    navigationOptions: {
      header: null,
      title: 'StackAccount',
    },
  },
  StackPersonalData: {
    screen: StackPersonalData,
    navigationOptions: {
      header: null,
      title: 'StackPersonalData',
    },
  },
  StackLegalInfo: {
    screen: StackLegalInfo,
    navigationOptions: {
      header: null,
      title: 'StackLegalInfo',
    },
  },
  PersonalData: {
    screen: PersonalData,
    navigationOptions: {
      header: null,
      title: 'PersonalData',
    },
  },
  PlanDetails: {
    screen: PlanDetails,
    navigationOptions: {
      header: null,
      title: 'PlanDetails',
    },
  },
  Payment: {
    screen: Payment,
    navigationOptions: {
      header: null,
      title: 'Payment',
    },
  },
});

export default SwitchMore;
