import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
`;

export const DateButton = styled.TouchableOpacity`
  flex-direction: row;
  font-size: ${hp('2.82%')};
  height: ${hp('6.34%')};
  align-self: stretch;
  color: #312e38;
  font-weight: normal;
  margin-top: ${hp('0.53%')};
  padding-left: ${wp('3.75%')};
  align-items: center;
  border: 1px solid #958fa3;
  border-radius: 4px;
`;

export const DateText = styled.Text`
  font-size: ${hp('2.82%')};
  line-height: ${hp('4.23%')};
  color: #625c70;
  font-weight: normal;
  margin-left: ${wp('3.75%')};
  margin-right: ${wp('3.75%')};
`;

export const IconArea = styled.View`
  align-items: flex-end;
  flex: 1;
`;

export const Picker = styled.View`
  background: #fff;
  padding: 15px 30px;
`;
