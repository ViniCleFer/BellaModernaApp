import styled from 'styled-components/native';

import Button from './components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 150px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 30px;
  padding-left: 20;
  padding-right: 20;
`;
