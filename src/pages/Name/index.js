import React, { useState } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import {
  Container,
  TitleArea,
  Title,
  AreaInfo,
  SubTitle,
  InputArea,
  AreaSubmitButton,
  SubmitButton,
  TextSubmitButton,
} from './styles';

export default function Name(props) {
  const profile = useSelector((state) => state.user.profile);

  const navigateBack = () => {
    props.navigation.navigate('PersonalData');
  };

  const [name, setName] = useState(profile.name);

  function handleName(value) {
    props.navigation.navigate('PersonalData', { value });
  }

  return (
    <Container>
      <TitleArea>
        <Icon
          name="arrow-back"
          size={(hp('2.82%'), wp('5%'))}
          color="#625C70"
          style={{ marginLeft: wp('7.5%') }}
          onPress={navigateBack}
        />
        <Title>Nome</Title>
      </TitleArea>

      <AreaInfo>
        <SubTitle>Nome</SubTitle>
        <InputArea
          value={name}
          onChangeText={(text) => setName(text)}
          autoCorrect={false}
          placeholder="Digite seu nome"
        />
      </AreaInfo>
      <AreaSubmitButton>
        <SubmitButton
          onPress={() => handleName(name)}
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
          <TextSubmitButton>Salvar</TextSubmitButton>
        </SubmitButton>
      </AreaSubmitButton>
    </Container>
  );
}
