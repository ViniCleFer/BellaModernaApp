import { createAppContainer } from 'react-navigation';
import { YellowBox } from 'react-native';

import TabStack from '~/TabStack';

YellowBox.ignoreWarnings(['']);

export default createAppContainer(TabStack);
