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

export default function Security(props) {
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
        <DescriptionTitle>
          Segurança de armazenamento de dados e política de privacidade
          confidencialidade das informações e atendimento dos usuários
        </DescriptionTitle>

        <DescriptionText>
          O Bellamaterna se compromete a manter dentro dos mais restritos
          padrões de segurança da informação, todo e qualquer dado fornecido por
          nossos usuários, podendo estes serem fornecidos ou gerados através de
          imagens, diálogos e documentos obtidos através de interações dentro da
          plataforma, ou fornecidos pelos usuários em seus processos de uso e
          cadastramento.
        </DescriptionText>
        <DescriptionText>
          Nos comprometemos também a não fornecermos os dados em hipótese alguma
          para terceiros sob qualquer circunstância, salvo sob medida judicial,
          ou pedido médico, e neste caso com autorização por escrito do usuário,
          com identificação do médico solicitante.
        </DescriptionText>
        <DescriptionText>
          O acesso de médicos as informações, aqui denominadas como prontuário
          das consultas, pode ser fornecido pela plataforma Bellamaterna,
          mediante autorização do usuário, que deve cadastrar seu médico na
          plataforma. O acesso será feito através de login exclusivo para
          médicos, com acesso restrito aos prontuários de sua ou suas pacientes
          exclusivamente.
        </DescriptionText>
        <DescriptionText>
          O Bellamaterna garante certificações de segurança de padrões
          internacionais em todas as nossas plataformas, e contratações de
          ferramentas de interação e banco de dados de confiabilidade comprovada
          através de uso em outras plataformas como UBER, 99 TAXI, entre outras.
        </DescriptionText>
        <DescriptionText>
          As informações e atendimentos ficarão armazenados em nossos bancos de
          dados por no mínimo 5 anos.
        </DescriptionText>
      </AreaInfo>
    </Container>
  );
}
