import { createStackNavigator } from 'react-navigation-stack';

import Programs from '~/pages/Programs';
import MedicalRecord from '~/pages/MedicalRecord';
import TimeLine from '~/pages/TimeLine';

const StackNav = createStackNavigator({
  Programs: {
    screen: Programs,
  },
  MedicalRecord: {
    screen: MedicalRecord,
  },
  TimeLine: {
    screen: TimeLine,
  },
});

export default StackNav;
