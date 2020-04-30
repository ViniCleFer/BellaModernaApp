import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  TitleArea,
  Title,
  AreaInfo,
  NavButton,
  TextNavButton,
} from './styles';

export default function LegalInfo(props) {
  const navigateBack = () => {
    props.navigation.navigate('StackAccount');
  };

  return (
    <Container>
      <TitleArea>
        <Icon
          name="arrow-left"
          size={(hp('2.82%'), wp('5%'))}
          color="#625C70"
          style={{ marginLeft: wp('7.5%') }}
          onPress={navigateBack}
        />
        <Title>Informações Legais</Title>
      </TitleArea>
      <AreaInfo>
        <NavButton
          underlayColor="#f2f1f3"
          onPress={() => props.navigation.navigate('UseTerms')}
        >
          <TextNavButton>Termos de uso do serviço</TextNavButton>
        </NavButton>
        <NavButton
          underlayColor="#f2f1f3"
          onPress={() => props.navigation.navigate('GeneralConditions')}
        >
          <TextNavButton>Condições gerais</TextNavButton>
        </NavButton>
        <NavButton
          underlayColor="#f2f1f3"
          onPress={() => props.navigation.navigate('BellaMaterna')}
        >
          <TextNavButton>Bellamaterna</TextNavButton>
        </NavButton>
        <NavButton
          underlayColor="#f2f1f3"
          onPress={() => props.navigation.navigate('UseDeclaration')}
        >
          <TextNavButton>Declaração de uso</TextNavButton>
        </NavButton>
        <NavButton
          underlayColor="#f2f1f3"
          onPress={() => props.navigation.navigate('Security')}
        >
          <TextNavButton>Segurança e confidencialidade</TextNavButton>
        </NavButton>
        <NavButton
          underlayColor="#f2f1f3"
          onPress={() => props.navigation.navigate('Signature')}
        >
          <TextNavButton>Assinatura</TextNavButton>
        </NavButton>
        <NavButton
          underlayColor="#f2f1f3"
          onPress={() => props.navigation.navigate('Provisions')}
        >
          <TextNavButton>Disposições finais</TextNavButton>
        </NavButton>
      </AreaInfo>
    </Container>
  );
}
