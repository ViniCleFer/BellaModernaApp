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

export const AreaInfo = styled.ScrollView`
  background-color: #fff;
`;

export const DescriptionTitle = styled.Text`
  font-size: ${hp('4.23%')};
  color: #312e38;
  font-weight: normal;
  align-items: center;
  margin-top: ${hp('2.82%')};
  margin-bottom: ${hp('2.82%')};
  margin-right: ${wp('7.5%')};
  margin-left: ${wp('7.5%')};
`;

export const DescriptionText = styled.Text`
  font-size: ${hp('2.82%')};
  color: #625c70;
  font-weight: normal;
  align-items: center;
  margin-bottom: ${hp('2.82%')};
  margin-right: ${wp('7.5%')};
`;

export const ItemArea = styled.View`
  flex-direction: row;
  margin-right: ${wp('7.5%')};
  margin-left: ${wp('7.5%')};
`;

export const ItemText = styled.Text`
  font-size: ${hp('5%')};
  color: #625c70;
  font-weight: normal;
  margin-right: ${wp('2.50%')};
  justify-content: flex-start;
  align-items: flex-start;
`;
