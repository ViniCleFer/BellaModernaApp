import { createSwitchNavigator } from 'react-navigation';

import Account from '~/pages/Account';
import PersonalData from '~/pages/PersonalData';
import PlanDetails from '~/pages/PlanDetails';
import Payment from '~/pages/Payment';

const StackAccount = createSwitchNavigator({
  Account: {
    screen: Account,
    navigationOptions: {
      header: null,
      title: 'Conta',
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

export default StackAccount;
