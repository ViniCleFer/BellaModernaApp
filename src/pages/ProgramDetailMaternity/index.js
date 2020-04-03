import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import imagetitle from '~/assets/maternidade.png';

import {
  Container,
  TitleArea,
  Title,
  AreaInfo,
  TextTitle,
  TextDesc,
  AreaProfessional,
  AreaSubmitButton,
  SubmitButton,
  TextSubmitButton,
} from './styles';

export default function MaternityProgram(props) {
  const navigateBack = () => {
    props.navigation.goBack();
  };

  return (
    <Container showsVerticalScrollIndicator={false}>
      <TitleArea source={imagetitle}>
        <Icon
          name="arrow-back"
          size={(hp('2.82%'), wp('5%'))}
          color="#fff"
          style={{ marginLeft: wp('7.5%'), marginTop: hp('4.23%') }}
          onPress={navigateBack}
        />
        <Title>Programa Maternidade</Title>
      </TitleArea>

      <AreaInfo>
        <TextTitle>Programa</TextTitle>
        <TextDesc>
          Sabemos que não é fácil passar pela adaptação de uma maternidade. Este
          programa irá te ajudar a cuidar melhor do seu bebê durante esta fase
          tão importante.
        </TextDesc>
        <AreaProfessional>
          <TextTitle>Profissionais</TextTitle>
          <TextDesc>- Pediatra</TextDesc>
          <TextDesc>- Enfermeira Obstetra</TextDesc>
          <TextDesc>- Nutricionista</TextDesc>
        </AreaProfessional>

        <TextTitle>Público</TextTitle>
        <TextDesc>Mães</TextDesc>
      </AreaInfo>

      <AreaSubmitButton>
        <SubmitButton
          onPress={() => {}}
          activeOpacity={0.7}
          style={{
            borderRadius: 50,
            borderColor: 'transparent',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: hp('0.35%') },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          }}
        >
          <TextSubmitButton>Inscrever-se</TextSubmitButton>
        </SubmitButton>
      </AreaSubmitButton>
    </Container>
  );
}
