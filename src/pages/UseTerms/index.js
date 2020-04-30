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

export default function UseTerms(props) {
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
        <DescriptionTitle>Termos de uso do serviço</DescriptionTitle>

        <DescriptionText>
          Bellamaterna é um aplicativo que conecta gestantes e mães de bebes até
          os 2 anos completos de idade a uma rede nacional de profissionais de
          saúde, para consultoria de enfermagem, amamentação e nutrição.
        </DescriptionText>
        <DescriptionText>
          A aplicação móvel é fornecida e gerida pela Bellamaterna
          Desenvolvimento ltda – me, e seus serviços e conteúdos serão
          disponibilizados através de contratação da plataforma diretamente pela
          usuária final, ou através de licenças de uso fornecidas por
          seguradoras e operadoras de saúde, empresas ou quaisquer entidades
          públicas ou privadas que contratar os serviços do Bellamaterna, a fim
          de repassa-los aos seus usuários, colaboradores, parceiros ou
          clientes. A interação e uso dos benefícios do aplicativo Bellamaterna
          pelos profissionais de saúde cadastrados depende diretamente da
          leitura e concordância dos termos e políticas de uso descritos neste
          documento.
        </DescriptionText>
        <DescriptionText>
          A interação e uso dos benefícios do aplicativo Bellamaterna pelos
          profissionais de saúde cadastrados depende diretamente da leitura e
          concordância dos termos e políticas de uso descritos neste documento.
        </DescriptionText>
      </AreaInfo>
    </Container>
  );
}
