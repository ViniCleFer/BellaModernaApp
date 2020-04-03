import { createAppContainer } from 'react-navigation';
import { YellowBox } from 'react-native';

import MainStack from '~/pages/MainStack';
// import StackNav from '~/StackNav';

YellowBox.ignoreWarnings(['']);

export default createAppContainer(MainStack);
