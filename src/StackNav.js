import { createStackNavigator } from 'react-navigation-stack';

import Programs from '~/pages/Programs';
import MedicalRecord from '~/pages/MedicalRecord';
import TimeLine from '~/pages/TimeLine';
import Pessoas from '~/pages/Persons';
import Conversas from '~/pages/Conversations';

import Profissionais from '~/pages/Professionals';
import Mais from '~/pages/More';

const StackNav = createStackNavigator({
  Programs,
  Pessoas,

  MedicalRecord,
  TimeLine,
  Conversas,
  Mais,
  Profissionais,
});

export default StackNav;
