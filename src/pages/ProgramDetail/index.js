import React from 'react';
import { Alert } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

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

export default function ProgramDetail(props) {
  const program = props.navigation.getParam('program');

  const id = props.navigation.getParam('id');

  const navigateBack = () => {
    props.navigation.goBack();
  };

  async function subscribe() {
    await api.post(`/program/${program._id}/${id}`);

    Alert.alert('Inscrição concluída com sucesso');

    props.navigation.navigate('ProfilePrograms', { program });
  }

  return (
    <Container showsVerticalScrollIndicator={false}>
      <TitleArea
        source={{ uri: `http://localhost:3333/files/${program.image_url}` }}
      >
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
            <TextDesc key={professionals}>{professionals}</TextDesc>
          ))}
        </AreaProfessional>

        <TextTitle>Público</TextTitle>
        <TextDesc>{program.public}</TextDesc>
      </AreaInfo>

      <AreaSubmitButton>
        <SubmitButton
          onPress={subscribe}
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
