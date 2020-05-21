import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const TargetView = styled.View``;

export const ModalView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ModalText = styled.Text`
  padding-top: ${hp('5.28%')};
  font-size: ${hp('3.52%')};
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #a51c60;
  position: absolute;
  height: ${hp('10.56%')};
  width: ${wp('18.75%')};
  border-radius: 50;
  bottom: ${hp('1.5%')};
  right: ${wp('3.8%')};
  justify-content: center;
  align-items: center;
`;

export const ContainerCard = styled.TouchableOpacity`
  width: ${wp('80%')};
  background-color: #fff;
  padding-top: ${hp('3%')};
  padding-bottom: ${hp('3%')};
  padding-right: ${wp('3.5%')};
  padding-left: ${wp('3.5%')};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fefefe;
  margin-top: ${hp('1.5%')};
  margin-bottom: ${hp('1.5%')};
  border-radius: 4;
`;

export const AreaInfos = styled.View`
  flex-direction: column;
`;

export const HourText = styled.Text`
  font-size: ${hp('2.46')};
  color: #7e8890;
  margin-bottom: ${hp('0.88%')};
`;

export const ProfileText = styled.Text`
  color: #43515c;
  font-size: ${hp('2.82')};
  margin-bottom: ${hp('0.88%')};
`;

export const InfoArea = styled.View`
  flex-direction: column;
  justify-content: flex-start;
`;

export const InfoText = styled.Text`
  color: #9aacba;
  font-size: ${hp('2.46')};
`;

export const InfoDoctor = styled.Text`
  color: #9aacba;
  font-size: ${hp('2.46')};
`;

export const ImageProfile = styled.Image`
  height: ${hp('9.15%')};
  width: ${wp('16.25%')};
  border-radius: 50;
`;

export const ContainerIcon = styled.View`
  height: ${hp('10.56%')};
  background-color: #ccc;
  flex-direction: row;
  align-items: center;
`;

export const IconArea = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const EmojiText = styled.Text`
  color: ${(props) => (props.color ? '#A51C60' : '#958FA3')};
  font-size: ${hp('1.76%')};
`;
