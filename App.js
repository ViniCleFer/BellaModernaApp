import { createAppContainer } from 'react-navigation';
import { YellowBox } from 'react-native';

import TabStack from '~/TabStack';
// import StackNav from '~/StackNav';

YellowBox.ignoreWarnings(['']);

export default createAppContainer(TabStack);
