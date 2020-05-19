import styled from 'styled-components/native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const AddButton = styled.TouchableOpacity`
  background-color: #a51c60;
  position: absolute;
  height: 60;
  width: 60;
  border-radius: 50;
  bottom: 30;
  right: 30;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
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
