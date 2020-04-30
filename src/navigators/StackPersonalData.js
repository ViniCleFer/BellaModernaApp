import { createStackNavigator } from 'react-navigation-stack';

import PersonalData from '~/pages/PersonalData';
import Name from '~/pages/Name';
import Phone from '~/pages/Phone';
import SocialRecord from '~/pages/SocialRecord';
import BirthDate from '~/pages/BirthDate';
import Address from '~/pages/Address';
import Email from '~/pages/Email';
import Password from '~/pages/Password';

const StackPersonalData = createStackNavigator({
  PersonalData: {
    screen: PersonalData,
    navigationOptions: {
      header: null,
      title: 'PersonalData',
    },
  },
  Name: {
    screen: Name,
    navigationOptions: {
      header: null,
      title: 'Name',
    },
  },
  Phone: {
    screen: Phone,
    navigationOptions: {
      header: null,
      title: 'Phone',
    },
  },
  SocialRecord: {
    screen: SocialRecord,
    navigationOptions: {
      header: null,
      title: 'SocialRecord',
    },
  },
  BirthDate: {
    screen: BirthDate,
    navigationOptions: {
      header: null,
      title: 'BirthDate',
    },
  },
  Address: {
    screen: Address,
    navigationOptions: {
      header: null,
      title: 'Address',
    },
  },
  Email: {
    screen: Email,
    navigationOptions: {
      header: null,
      title: 'Email',
    },
  },
  Password: {
    screen: Password,
    navigationOptions: {
      header: null,
      title: 'Password',
    },
  },
});

export default StackPersonalData;
