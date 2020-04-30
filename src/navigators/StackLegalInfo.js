import { createStackNavigator } from 'react-navigation-stack';

import LegalInfo from '~/pages/LegalInfo';
import UseTerms from '~/pages/UseTerms';
import GeneralConditions from '~/pages/GeneralConditions';
import BellaManterna from '~/pages/BellaMaterna';
import UseDeclaration from '~/pages/UseDeclaration';
import Security from '~/pages/Security';
import Signature from '~/pages/Signature';
import Provisions from '~/pages/Provisions';

const StackLegalInfo = createStackNavigator({
  LegalInfo: {
    screen: LegalInfo,
    navigationOptions: {
      header: null,
      title: 'LegalInfo',
    },
  },
  UseTerms: {
    screen: UseTerms,
    navigationOptions: {
      header: null,
      title: 'UseTerms',
    },
  },
  GeneralConditions: {
    screen: GeneralConditions,
    navigationOptions: {
      header: null,
      title: 'GeneralConditions',
    },
  },
  BellaManterna: {
    screen: BellaManterna,
    navigationOptions: {
      header: null,
      title: 'BellaManterna',
    },
  },
  UseDeclaration: {
    screen: UseDeclaration,
    navigationOptions: {
      header: null,
      title: 'UseDeclaration',
    },
  },
  Security: {
    screen: Security,
    navigationOptions: {
      header: null,
      title: 'Security',
    },
  },
  Signature: {
    screen: Signature,
    navigationOptions: {
      header: null,
      title: 'Signature',
    },
  },
  Provisions: {
    screen: Provisions,
    navigationOptions: {
      header: null,
      title: 'Provisions',
    },
  },
});

export default StackLegalInfo;
