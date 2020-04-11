import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;

export const BackgroundTitle = styled(LinearGradient).attrs({
  colors: ['#A51C60', '#DD6998', '#DD6998'],
  // locations: [0.74, 50.74, 97.72],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-left: ${wp('5.0%')};
`;

export const Title = styled.Text`
  font-size: ${hp('3.17%')};
  margin-left: ${wp('6.25%')};
  color: #fff;
  font-weight: bold;
`;

export const PersonArea = styled.View`
  height: ${hp('13.03%')};
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

export const AreaInfo = styled.View`
  flex-direction: column;
  margin-left: ${wp('2.50%')};
`;

export const PersonName = styled.Text`
  font-size: ${hp('2.82%')};
  font-weight: bold;
  color: #625c70;
`;

export const PersonAge = styled.Text`
  font-size: ${hp('2.11%')};
  font-weight: normal;
  color: #625c70;
`;

export const ButtonsArea = styled.View`
  flex: 1;
`;

export const PeopleBar = styled.View`
  align-items: center;
  height: ${hp('11.27%')};
  border-color: #f2f1f3;
  border-width: ${wp('0.36%')};
  border-style: solid;
  flex-direction: row;
  justify-content: space-between;
`;

export const CircleArea = styled.View`
  align-items: center;
  flex-direction: row;
  padding-left: ${wp('3.44%')};
`;

export const IconArea = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const BorderCircle = styled.View`
  /**/
  margin-top: ${hp('0.1%')};
  height: ${hp('8.80%')};
  width: ${wp('15.63%')};
  align-items: center;
  justify-content: center;
  border-radius: 50;
  border-width: ${wp('0.62%')};
  border-color: #f0f;
  border-style: solid;
`;

export const PeopleCircle = styled.Image`
  height: ${hp('7.39%')};
  width: ${wp('13.13%')};
  margin-left: ${wp('1.25%')};
  margin-right: ${wp('1.25%')};
  border-style: solid;
  border-radius: 50;
  align-items: center;
`;
