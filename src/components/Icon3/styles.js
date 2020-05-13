import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

export const ContainerIcon = styled.View`
  position: relative;
`;

export const IconArea = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex:1;
  background-color: #ccc;
`;

export const EmojiText = styled.Text`
  color: #958FA3;
  font-size: ${hp('1.76%')};
`;

export const ContainerTouch = styled.View`
  position: absolute;
  flex: 1;
  z-index: 5;
`;

export const Touch = styled.TouchableWithoutFeedback``;

export const TransparentText = styled.Text``;