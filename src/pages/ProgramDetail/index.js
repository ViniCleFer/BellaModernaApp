import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import imagetitle from '~/assets/gestacao.png';

// import api from '~/services/api';

import {
  Container,
  TitleArea,
  Title,
  AreaInfo,
  TextTitle,
  TextDesc,
  AreaProfessional,
  AreaTextDesc,
  AreaSubmitButton,
  SubmitButton,
  TextSubmitButton,
} from './styles';

export default function ProgramDetail(props) {
  const program = props.navigation.getParam('program');

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
        <Title>Programa {program.name}</Title>
      </TitleArea>

      <AreaInfo>
        <TextTitle>Programa</TextTitle>
        <TextDesc>{program.description}</TextDesc>
        <AreaProfessional>
          <TextTitle>Profissionais</TextTitle>
          {program.professionals.map((professionals) => (
            <TextDesc key={professionals}>{program.professionals}</TextDesc>
          ))}
        </AreaProfessional>

        <TextTitle>Público</TextTitle>
        <TextDesc>Mulheres grávidas</TextDesc>
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
