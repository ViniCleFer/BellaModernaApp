import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const TitleArea = styled.View`
  flex-direction: row;
  height: ${hp('9.86%')};
  align-items: center;
  background-color: #fff;
  border-color: #f2f1f3;
  border-width: ${wp('0.36%')};
  border-style: solid;
`;

export const Title = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: ${hp('2.82%')};
  color: #625c70;
  font-weight: bold;
  margin-left: ${wp('7.5%')};
`;

export const AreaInfo = styled.View`
  background-color: #fff;
  padding-top: ${hp('4.23%')};
  padding-left: ${wp('8.13%')};
  padding-right: ${wp('8.13%')};
`;

export const SubTitle = styled.Text`
  font-size: ${hp('2.11%')};
  color: #958fa3;
  font-weight: normal;
  align-items: center;
`;

export const InputArea = styled.TextInput`
  font-size: ${hp('2.82%')};
  height: ${hp('6.34%')};
  align-self: stretch;
  color: #312e38;
  font-weight: normal;
  padding-left: ${wp('3.75%')};
  margin-top: ${hp('0.53%')};
  align-items: center;
  border: 1px solid #958fa3;
  border-radius: 4px;
`;

export const AreaSubmitButton = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: ${hp('2.82%')};
  background-color: #fff;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #a51c60;
  height: ${hp('7.75%')};
  width: ${wp('71.25%')};
  align-items: center;
  justify-content: center;
`;

export const TextSubmitButton = styled.Text`
  font-size: ${hp('2.82%')};
  color: rgb(255, 255, 255);
  font-weight: normal;
  align-items: center;
`;
