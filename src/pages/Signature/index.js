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

export default function Signature(props) {
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
        <DescriptionTitle>Assinatura</DescriptionTitle>

        <DescriptionText>
          O Bellamaterna é uma plataforma que prove acesso ilimitado a consultas
          de enfermagem e nutrição durante o período de vigência da assinatura
          do programa.
        </DescriptionText>
        <DescriptionText>
          As assinaturas podem ser adquiridas diretamente pela usuária mediante
          compra através de cartão de crédito, ou liberado o uso através de
          adesão ao programa fornecido por um terceiro.
        </DescriptionText>
        <DescriptionText>
          No caso da assinatura diretamente pela usuária, preços e políticas
          serão descritas nas condições comerciais que podem ser consultadas a
          qualquer momento em nosso site, ou no próprio aplicativo.
        </DescriptionText>
      </AreaInfo>
    </Container>
  );
}
