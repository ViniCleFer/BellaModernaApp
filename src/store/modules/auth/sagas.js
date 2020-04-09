import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { signInSuccess, SignFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
    });

    const { user } = response.data;

    yield put(signInSuccess(user));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(SignFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
