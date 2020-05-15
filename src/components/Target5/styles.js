import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Container = styled.View`
  justify-content: center;
  flex-direction: column;
  top: ${hp('1.5%')};
`;

export const ContainerTouch = styled.View`
  position: absolute;
  flex: 1;
  z-index: 5;
  left: 30px;
`;

export const TransparentText = styled.Text``;
