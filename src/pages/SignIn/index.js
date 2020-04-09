import React, { useState } from 'react';
import { Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import logo from '~/assets/logo.png';

import Background from './components/Background';
import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();

  // const [email, setEmail] = useState('');

  const email = 'viniclefer@gmail.com';

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            returnKeyType="send"
            value={email}
            onChangeText={email}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SignIn.defaultProps = {
  navigation: null,
};
