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
  SubTitle,
  InputArea,
  AreaSubmitButton,
  SubmitButton,
  TextSubmitButton,
} from './styles';

export default function Password(props) {
  const navigateBack = () => {
    props.navigation.navigate('PersonalData');
  };

  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [pastPassowrd, setPastPassowrd] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handlePassword(confirmPassword) {
    props.navigation.navigate('PersonalData', { confirmPassword });
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
        <Title>Alterar Senha</Title>
      </TitleArea>

      <AreaInfo>
        <SubTitle>Senha Antiga</SubTitle>

        <InputArea
          placeholder="Digite sua senha atual"
          value={pastPassowrd}
          secureTextEntry
          onChangeText={setPastPassowrd}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />

        <SubTitle>Nova Senha</SubTitle>

        <InputArea
          placeholder="Digite sua nova senha"
          ref={passwordRef}
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          returnKeyType="next"
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
        />

        <SubTitle>Redigite sua nova Senha</SubTitle>

        <InputArea
          placeholder="Redigite sua nova senha"
          ref={confirmPasswordRef}
          value={confirmPasswordRef}
          secureTextEntry
          onChangeText={setConfirmPassword}
          returnKeyType="send"
          onSubmitEditing={() => handlePassword(confirmPassword)}
        />

        <AreaSubmitButton>
          <SubmitButton
            onPress={() => handlePassword(confirmPassword)}
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
      </AreaInfo>
    </Container>
  );
}
