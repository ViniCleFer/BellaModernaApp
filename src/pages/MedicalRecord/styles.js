import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
`;

export const TitleArea = styled.View`
  flex-direction: row;
  height: ${hp('9.86%')};
  align-items: center;
  border-color: #f2f1f3;
  border-width: ${wp('0.36%')};
  border-style: solid;
`;

export const Title = styled.Text`
  height: ${hp('2.82%')};
  line-height: ${hp('3.87%')};
  color: #625c70;
  font-weight: bold;
  margin-left: ${wp('7.5%')};
`;

export const DateArea = styled.View`
  background-color: #ccc; /*#f2f1f3*/

  height: ${hp('8.45%')};
  justify-content: center;
`;

export const DateText = styled.Text`
  font-size: ${hp('2.11%')};
  line-height: ${hp('2.82%')};
  color: #958fa3;
  margin-left: ${wp('6.25%')};
  font-weight: bold;
`;

export const AreaInfo = styled.FlatList`
  background-color: #ccc; /*#f2f1f3*/
`;

export const Card = styled.View`
  margin-left: ${wp('5.0%')};
  margin-right: ${wp('5.0%')};
  margin-bottom: ${hp('2.82%')};
`;

export const TopCard = styled.View`
  /*TouchableHighLight*/
  background-color: #fff;
  height: ${hp('11.27%')};
  flex-direction: row;
  border-top-left-radius: ${wp('1.25%')};
  border-top-right-radius: ${wp('1.25%')};
  align-items: center;
  justify-content: space-between;
`;

export const DoctorImage = styled.Image`
  height: ${hp('7.39%')};
  width: ${wp('13.13%')};
  margin-left: ${wp('5.0%')};
  border-radius: 50;
  justify-content: center;
`;

export const AreaDoctorInfo = styled.View`
  flex-direction: column;
  margin-left: ${wp('3.44')};
`;

export const DoctorName = styled.Text`
  font-size: ${hp('2.11%')};
  line-height: ${hp('2.82%')};
  color: #625c70;
  font-weight: bold;
`;

export const DoctorSpecialty = styled.Text`
  font-size: ${hp('2.11%')};
  line-height: ${hp('2.82%')};
  color: #625c70;
  font-weight: normal;
`;

export const IconArea = styled.View`
  align-items: flex-end;
  flex: 1;
`;

export const Separator = styled.View`
  height: ${hp('0.18%')};
  background-color: #f2f1f3;
`;

export const BodyCard = styled.View`
  background-color: #fff;
  padding-left: ${wp('5%')};
  padding-right: ${wp('5%')};
  padding-top: ${hp('0.36%')};
  padding-bottom: ${hp('3.17%')};
`;

export const BodyTitle = styled.Text`
  line-height: ${hp('2.82%')};
  font-size: ${hp('2.11%')};
  font-weight: normal;
  color: #958fa3;
  padding-top: ${hp('2.82%')};
`;

export const InfoProblem = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const BodyText = styled.Text`
  line-height: ${hp('2.82%')};
  font-size: ${hp('2.11%')};
  font-weight: normal;
  color: #625c70;
  padding-bottom: ${hp('0.18%')};
`;
export const InfoRisk = styled.View`
  flex-direction: row;
`;

export const ColorRiskGreen = styled.View`
  height: ${hp('2.82%')};
  width: ${wp('7.5%')};
  margin-right: ${wp('1.25%')};
  border-radius: 4;
  background-color: #25d366;
  justify-content: center;
`;

export const ColorRiskBlue = styled.View`
  height: ${hp('2.82%')};
  width: ${wp('7.5%')};
  margin-right: ${wp('1.25%')};
  border-radius: 4;
  background-color: #2f80ed;
`;

export const BottomCard = styled.View`
  height: ${hp('8.63%')};
  background-color: #fff;
  border-bottom-left-radius: ${wp('1.25%')};
  border-bottom-right-radius: ${wp('1.25%')};
  justify-content: center;
  padding-left: ${wp('5%')};
`;
export const CallType = styled.Text`
  font-size: ${hp('1.76%')};
  font-weight: bold;
  line-height: ${hp('2.46%')};
  color: #625c70;
  margin-bottom: ${wp('0.18%')};
`;

export const Duration = styled.Text`
  font-size: ${hp('1.76%')};
  font-weight: normal;
  line-height: ${hp('2.46%')};
  color: #625c70;
`;
