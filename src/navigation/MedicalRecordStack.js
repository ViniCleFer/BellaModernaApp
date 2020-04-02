import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Prontuario from '~/pages/MedicalRecord';

const MedicalRecordStack = createStackNavigator({
  Prontuario: {
    screen: Prontuario,
  },
});

export default createAppContainer(MedicalRecordStack);
