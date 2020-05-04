import React, { useState, useRef } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  const navigateBack = () => {
    props.navigation.navigate('PersonalData');
  };

  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            <SubTitleBold>viniclefer@gmail.com</SubTitleBold>
            <SubTitle> para:</SubTitle>
          </EmailArea>
        </SubTitleArea>

        <InputArea
          placeholder="Digite seu endereço"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />

        <SubTitle>Senha</SubTitle>

        <InputArea
          placeholder="Digite seu endereço"
          ref={passwordRef}
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          returnKeyType="send"
          onSubmitEditing={() => {}}
        />
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
          <TextSubmitButton>Salvar</TextSubmitButton>
        </SubmitButton>
      </AreaSubmitButton>
    </Container>
  );
}
