import styled from 'styled-components/native';
// import { RectButton } from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.TouchableOpacity`
  height: ${hp('8.45%')};
  background: #fff;
  align-items: center;

  border-style: solid;
  border-width: ${wp('0.18%')};
  border-color: #f2f1f3;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text`
  height: ${hp('2.82%')};
  color: #625c70;
  font-weight: bold;
  margin-left: ${wp('5%')};
  align-items: center;
`;
