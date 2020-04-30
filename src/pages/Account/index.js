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
  AreaButton,
  TextNavButton,
} from './styles';

export default function Account(props) {
  const navigateBack = () => {
    props.navigation.goBack();
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
        <Title>Mais Opções</Title>
      </TitleArea>
      <AreaInfo>
        <NavButton underlayColor="#f2f1f3" onPress={() => {}}>
          <AreaButton>
            <Icon
              name="clipboard-outline"
              size={(hp('3.87%'), wp('6.88%'))}
              color="#625C70"
              style={{ marginLeft: wp('5.94%') }}
              onPress={navigateBack}
            />
            <TextNavButton>Dados Pessoais</TextNavButton>
          </AreaButton>
        </NavButton>
        <NavButton underlayColor="#f2f1f3" onPress={() => {}}>
          <AreaButton>
            <Icon
              name="clipboard-account"
              size={(hp('3.87%'), wp('6.88%'))}
              color="#625C70"
              style={{ marginLeft: wp('5.94%') }}
              onPress={navigateBack}
            />
            <TextNavButton>Detalhes do Plano</TextNavButton>
          </AreaButton>
        </NavButton>
        <NavButton underlayColor="#f2f1f3" onPress={() => {}}>
          <AreaButton>
            <Icon
              name="account-circle"
              size={(hp('3.87%'), wp('6.88%'))}
              color="#625C70"
              style={{ marginLeft: wp('5.94%') }}
              onPress={navigateBack}
            />
            <TextNavButton>Forma de Pagamento</TextNavButton>
          </AreaButton>
        </NavButton>
      </AreaInfo>
    </Container>
  );
}
