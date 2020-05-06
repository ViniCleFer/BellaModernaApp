import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.ScrollView`
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

export const ProfileArea = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ProfileIconArea = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50;
  height: ${hp('2.64%')};
  width: ${wp('4.69%')};
  margin-top: ${hp('-1.06%')};
`;

export const ProfilePhoto = styled.Image`
  height: ${hp('17.61%')};
  width: ${wp('31.25%')};
  border-radius: 60;
  justify-content: center;
  align-items: center;
  margin-top: ${hp('2.82%')};
`;

export const LinkPhoto = styled.TouchableHighlight`
  background-color: #fff;
  height: ${hp('2.99%')};
  justify-content: center;
  background: transparent;
  margin-top: ${hp('-0.70%')};
  margin-bottom: ${hp('0;70%')};
`;

export const LinkTextPhoto = styled.Text`
  font-size: ${hp('2.11%')};
  color: #a51c60;
  font-weight: normal;
  align-items: center;
`;

export const SubtitleArea = styled.View`
  height: ${hp('8.98%')};
`;

export const Subtitle = styled.Text`
  font-size: ${hp('2.11%')};
  color: #625c70;
  font-weight: bold;
  margin-left: ${wp('7.5%')};
  margin-top: ${hp('4.75%')};
`;

export const AreaInfo = styled.View`
  background-color: #fff;
`;

export const NavButton = styled.TouchableHighlight`
  background-color: #fff;
  height: ${hp('8.98%')};
  justify-content: center;
`;

export const ButtonNavArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonArea = styled.View`
  justify-content: center;
`;

export const IconArea = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TextNavButton = styled.Text`
  font-size: ${hp('2.11%')};
  color: #312e38;
  font-weight: normal;
  align-items: center;
  margin-left: ${wp('7.50%')};
`;

export const TextProfile = styled.Text`
  font-size: ${hp('2.11%')};
  color: #958fa3;
  font-weight: normal;
  align-items: center;
  margin-left: ${wp('7.50%')};
`;

export const TextPassword = styled.TextInput`
  margin-top: ${hp('-1%')};
  padding-top: ${hp('1%')};
  padding-bottom: ${hp('1%')};
  height: ${hp('5%')};
  font-size: ${hp('2.11%')};
  color: #958fa3;
  font-weight: normal;
  align-items: center;
  margin-left: ${wp('7.50%')};
`;

export const NavButtonAddress = styled.TouchableHighlight`
  justify-content: center;
  background: #fff;
  padding-top: ${hp('1.51%')};
  padding-bottom: ${hp('1.58%')};
`;

export const AreaAddress = styled.View`
  justify-content: center;
  width: ${wp('79.50%')};
`;

export const TextProfileAddress = styled.Text`
  font-size: ${hp('2.11%')};
  color: #958fa3;
  font-weight: normal;
  align-items: center;
  margin-left: ${wp('7.50%')};
`;
