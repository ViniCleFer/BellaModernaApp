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
  DateDescriptionText,
} from './styles';

export default function Provisions(props) {
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
        <DescriptionTitle>Disposições finais</DescriptionTitle>

        <DescriptionText>
          Este termo constitui a totalidade do acordo entre nós e você com
          relação ao assunto contido neste Contrato e substituem todos os
          anteriores e atuais acordos, propostas e comunicações, escrita ou
          oral, relacionado a esse assunto.
        </DescriptionText>
        <DescriptionText>
          Você também pode estar sujeito a termos e condições adicionais que
          podem ser aplicadas quando você usa os produtos ou serviços de
          terceiros que estão disponíveis através dos Serviços. Em caso de
          qualquer conflito entre tais termos de terceiros e condições e este
          Contrato, este irá governar. Este Contrato será regido e interpretado
          de acordo com as leis do Brasil, sem levar em conta qualquer conflito
          de provisões legais nelas contidas.
        </DescriptionText>
        <DescriptionText>
          Este Contrato é pessoal para você e você não pode atribuir a ninguém.
          Se qualquer disposição deste Acordo for considerada ilegal, nula ou
          por qualquer razão inaplicável, então essa disposição será considerada
          separável deste acordo e não afetará a validade e aplicabilidade de
          quaisquer disposições remanescentes. Este acordo não se destina a
          beneficiar qualquer terceiro, e não cria quaisquer terceiros
          beneficiários.
        </DescriptionText>
        <DescriptionText>
          Assim sendo, o presente acordo só pode ser invocado ou executado por
          você ou por nós.
        </DescriptionText>
        <DescriptionText>
          Você concorda que, independentemente de qualquer estatuto ou lei em
          contrário, qualquer reclamação ou causa de ação que você pode ter
          decorrentes ou relacionadas com a utilização dos Serviços ou este
          Contrato deve ser apresentado por você no prazo de três anos após tal
          reclamação ou causa de ação, ou ser barrado para sempre.
        </DescriptionText>
        <DescriptionText>
          Qualquer e todas as disposições deste Acordo, que seria razoavelmente
          esperado para ser realizada após o término ou expiração deste Acordo
          devem sobreviver e ser exequível após a rescisão ou término incluindo,
          sem limitação, as disposições relativas à propriedade, indenização,
          limitação de responsabilidade.
        </DescriptionText>
        <DateDescriptionText>14/03/18</DateDescriptionText>
        <DescriptionText>
          Direitos reservados a Bellamaterna Desenvolvimento LTDA-ME.
        </DescriptionText>
      </AreaInfo>
    </Container>
  );
}
