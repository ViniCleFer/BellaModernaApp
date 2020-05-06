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
  SubTitleArea,
  SubTitle,
  EmailArea,
  SubTitleBold,
  InputArea,
  AreaSubmitButton,
  SubmitButton,
  TextSubmitButton,
} from './styles';

export default function Email(props) {
  const profile = useSelector((state) => state.user.profile);

  const navigateBack = () => {
    props.navigation.navigate('PersonalData');
  };

  const [email, setEmail] = useState('');

  function handleEmail(email) {
    props.navigation.navigate('PersonalData', { email });
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
        <Title>Alterar E-mail</Title>
      </TitleArea>

      <AreaInfo>
        <SubTitleArea>
          <SubTitle>Alterar o e-mail de </SubTitle>
          <EmailArea>
            <SubTitleBold>{profile.email}</SubTitleBold>
            <SubTitle> para:</SubTitle>
          </EmailArea>
        </SubTitleArea>

        <InputArea
          placeholder="Digite seu endereço"
          autoCapitalize="none"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
          returnKeyType="next"
          onSubmitEditing={() => handleEmail(email)}
        />
      </AreaInfo>
      <AreaSubmitButton>
        <SubmitButton
          onPress={() => handleEmail(email)}
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
