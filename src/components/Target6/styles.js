import styled from 'styled-components/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const Container = styled.View`
  justify-content: center;
  flex-direction: column;
`;

export const ContainerTouch = styled.View`
  position: absolute;
  flex: 1;
  z-index: 5;
  top: ${hp('1%')};
  left: ${wp('-3%')};
`;

export const TransparentText = styled.Text``;

/*
  left: 0px;
  top: -5px;
*/
