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

export const PersonArea = styled.View`
  height: ${hp('14.79%')};
  flex-direction: row;
  align-items: center;
  background-color: #fff;
`;

export const PersonImage = styled.Image`
  height: ${hp('7.39%')};
  width: ${wp('13.13%')};
  margin-left: ${wp('5.0%')};
  border-radius: 50;
`;

export const PersonAreaInfo = styled.View`
  flex-direction: column;
  margin-left: ${wp('2.50%')};
`;

export const PersonName = styled.Text`
  font-size: ${hp('2.82%')};
  font-weight: bold;
  color: #625c70;
`;

export const PersonEmail = styled.Text`
  font-size: ${hp('2.11%')};
  font-weight: normal;
  color: #625c70;
`;

export const PerfilArea = styled.TouchableHighlight`
  background-color: #fff;
`;

export const PersonPerfil = styled.Text`
  font-size: ${hp('1.76%')};
  font-weight: normal;
  color: #e48abf;
`;

export const AreaInfo = styled.View`
  background-color: #fff;
`;

export const NavButton = styled.TouchableHighlight`
  background-color: #fff;
  height: ${hp('8.98%')};
  justify-content: center;
`;

export const AreaButton = styled.View`
  flex-direction: row;
`;

export const TextNavButton = styled.Text`
  font-size: ${hp('2.82%')};
  color: #625c70;
  font-weight: normal;
  align-items: center;
  margin-left: ${wp('8.44%')};
`;
