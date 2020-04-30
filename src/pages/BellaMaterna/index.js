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

export default function BellaMaterna(props) {
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
        <DescriptionTitle>Bellamaterna</DescriptionTitle>

        <DescriptionText>
          O Bellamaterna é uma plataforma que fornece atendimento consultivo
          feito por profissionais de saúde nas áreas de enfermagem obstétrica e
          pediátrica, amamentação e nutrição, ilimitado 24hs por dia 7 dias por
          semana, por chat de vídeo e voz, esclarecendo dúvidas relativas a
          gestação, amamentação, nutrição, desenvolvimento, saúde e bem-estar
          dos bebês, gestantes ou mães. De forma alguma os profissionais poderão
          emitir diagnósticos ou prescrições de medicamentos controlados.
        </DescriptionText>
        <DescriptionText>
          Nossa plataforma não substitui o acompanhamento médico, e os
          profissionais de saúde sempre vão encorajar o acompanhamento médico e
          seus respectivos tratamentos.
        </DescriptionText>
        <DescriptionText>
          Emergências devem ser encaminhadas diretamente ao serviço emergencial
          de sua cidade ou região (SAMU).
        </DescriptionText>
        <DescriptionText>
          O Bellamaterna através de um processo de investigação e seleção dos
          profissionais de saúde, garantem que os mesmos estão aptos a exercerem
          a consultoria de enfermagem, nutrição e amamentação, estando os mesmos
          em dia com suas obrigações perante os conselhos federais e regionais
          de sua categoria.
        </DescriptionText>
        <DescriptionText>
          O Bellamaterna sendo uma plataforma de conexão entre profissionais de
          saúde e usuárias, fornece apenas a tecnologia e a curadoria dos
          profissionais, porém não nos responsabilizamos por opiniões ou
          quaisquer indicações feitas pelos profissionais, uma vez que os mesmos
          são autônomos, sendo remunerados por minuto de atendimento, e
          submetido as resoluções e normas de éticas e de conduta de seus
          conselhos de classe.
        </DescriptionText>
        <DescriptionText>
          Somos uma empresa de desenvolvimento tecnológico, o que nos configura
          apenas como meio de conexão entre profissionais de saúde e usuários
          através de uma tecnologia segura e estável. Deste modo, não somos
          classificados como empresa de saúde, não tendo nenhuma
          responsabilidade sobre quaisquer atos ou consequências decorrentes dos
          atendimentos ocorridos dentro de nossa plataforma.
        </DescriptionText>
      </AreaInfo>
    </Container>
  );
}
