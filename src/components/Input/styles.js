import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  padding-left: ${wp('4.69%')};
  padding-right: ${wp('4.69%')};
  height: ${hp('8.27%')};
  background: #fff;
  border-style: solid;
  border-width: ${wp('0.31%')};
  border-color: #f2f1f3;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#C6BDDB',
})`
  font-size: ${hp('2.11%')};
  color: #fff;
  font-weight: normal;
`;
