import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient).attrs({
  colors: ['#A51C60', '#DD6998', '#DD6998'],
  // locations: [0.74, 50.74, 97.72],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;
