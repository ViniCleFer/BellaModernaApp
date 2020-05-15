import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const ContainerTouch = styled.View`
  position: absolute;
  flex: 1;
  z-index: 5;
  bottom: ${hp('-7.92%')};
  left: ${wp('62.5%')};
`;

export const TransparentText = styled.Text``;

/*
  bottom: -45px;
  left: 225px;
*/
