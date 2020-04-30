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
  DescriptionTitle,
  DescriptionText,
} from './styles';

export default function GeneralConditions(props) {
  const navigateBack = () => {
    props.navigation.navigate('LegalInfo');
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
      <AreaInfo showsVerticalScrollIndicator={false}>
        <DescriptionTitle>Condições Gerais</DescriptionTitle>

        <DescriptionText>
          Ao aceitar as condições descritas neste termo, você estará aderindo ao
          contrato de uso da plataforma Bellamaterna, que rege as condições,
          regras e responsabilidade de uso em todas as suas funcionalidades e
          publicações de conteúdo.
        </DescriptionText>
        <DescriptionText>
          Futuras alterações deste termo, podem a qualquer momento serem
          publicadas em nossa plataforma, e será solicitada a renovação de
          aceite do termo, afim de permitir o uso da aplicação dentro das
          condições estipuladas.
        </DescriptionText>
        <DescriptionText>
          Nos comprometemos a manter sempre a última versão do termo publicada
          em nosso site, com acesso irrestrito a qualquer pessoa independente de
          ser usuário de nossa plataforma.
        </DescriptionText>
      </AreaInfo>
    </Container>
  );
}
