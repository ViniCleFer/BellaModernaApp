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

export const AreaInfo = styled.FlatList`
  background-color: #fff;
`;

export const NavButton = styled.TouchableHighlight`
  background-color: #fff;
  height: ${hp('8.98%')};
  justify-content: center;
`;

export const TextNavButton = styled.Text`
  font-size: ${hp('2.82%')};
  color: #625c70;
  font-weight: normal;
  align-items: center;
  margin-left: ${wp('7.50%')};
`;
