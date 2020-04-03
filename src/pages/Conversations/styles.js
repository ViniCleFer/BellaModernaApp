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
  background-color: #fff;
  border-width: ${wp('0.36%')};
  border-style: solid;
`;

export const Title = styled.Text`
  font-size: ${hp('2.82%')};
  color: #625c70;
  font-weight: bold;
  margin-left: ${wp('7.5%')};
`;

export const DateArea = styled.View`
  height: ${hp('4.23%')};
  width: ${wp('26.25%')};
  background-color: #958fa3;
  border-radius: 50;
  margin-top: ${hp('4.23%')};
  align-items: center;
  justify-content: center;
`;

export const DateText = styled.Text`
  font-size: ${hp('2.11%')};
  line-height: ${hp('2.82%')};
  color: #fff;
  font-weight: normal;
  justify-content: center;
`;

export const AreaInfo = styled.FlatList`
  background-color: #e5e5e5;
  flex: 1;
`;

export const Card = styled.View`
  margin-left: ${wp('2.5%')};
  margin-right: ${wp('2.5%')};
  margin-bottom: ${hp('0.18%')};
  margin-top: ${hp('3.17%')};
`;

export const Separator = styled.View`
  width: ${wp('0.18%')};
  background-color: #c6bddb;
`;

export const TimeLineCard = styled.View`
  flex-direction: row;
`;

export const IconArea = styled.View`
  align-items: center;
  margin-left: ${wp('2.5%')};
  justify-content: center;
`;

export const DescArea = styled.View`
  flex-direction: column;
  margin-left: ${wp('4.0%')};
  justify-content: center;
`;

export const TimeLineTitle = styled.Text`
  line-height: ${hp('2.82%')};
  font-size: ${hp('2.11%')};
  font-weight: bold;
  color: #a51c60;
  padding-bottom: ${hp('0.18%')};
`;

export const HourText = styled.Text`
  color: #958fa3;
  line-height: ${hp('2.46%')};
  font-size: ${hp('1.76%')};
`;

export const ResultCard = styled.View`
  flex-direction: row;
`;

export const LineArea = styled.View`
  align-items: center;
  margin-left: ${wp('5.0%')};
  justify-content: center;
`;

export const Line = styled.Text`
  height: ${hp('10.74%')};
  width: ${wp('0.47%')};
  background-color: #c6bddb;
`;

export const ReportArea = styled.View`
  flex-direction: column;
  margin-left: ${wp('5.94%')};
  margin-top: ${hp('1.06')};
`;

export const Report = styled.Text`
  line-height: ${hp('3.87%')};
  font-size: ${hp('2.82%')};
  font-weight: normal;
  color: #958fa3;
  justify-content: center;
  margin-bottom: ${hp('2.12%')};
`;

export const LastReport = styled.Text`
  line-height: ${hp('3.87%')};
  font-size: ${hp('2.82%')};
  font-weight: normal;
  color: #958fa3;
  justify-content: center;
  margin-bottom: ${hp('2.12%')};
`;
