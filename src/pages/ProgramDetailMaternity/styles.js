import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const TitleArea = styled.ImageBackground`
  flex-direction: row;
  height: ${hp('40.14%')};
`;

export const Title = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: ${hp('2.82%')};
  line-height: ${hp('3.87%')};
  color: #fff;
  font-weight: bold;
  margin-left: ${wp('7.5%')};
  margin-top: ${hp('3.87%')};
`;

export const AreaInfo = styled.View`
  background-color: #fff;
  padding-right: ${wp('7.5%')};
  padding-left: ${wp('7.5%')};
`;

export const TextTitle = styled.Text`
  font-size: ${hp('2.82%')};
  line-height: ${hp('3.87%')};
  color: #625c70;
  font-weight: bold;
  margin-top: ${hp('5.63%')};
`;

export const TextDesc = styled.Text`
  font-size: ${hp('2.82%')};
  line-height: ${hp('3.87%')};
  color: #625c70;
  font-weight: normal;
`;

export const AreaProfessional = styled.View`
  flex-direction: column;
`;

export const AreaSubmitButton = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: ${hp('4.75%')};
  padding-top: ${hp('5.63%')};
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
