import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
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

export const AreaInfo = styled.View`
  background-color: #fff;
  padding-top: ${hp('4.23%')};
  padding-left: ${wp('8.13%')};
  padding-right: ${wp('8.13%')};
`;

export const SubTitle = styled.Text`
  font-size: ${hp('2.11%')};
  color: #958fa3;
  font-weight: normal;
  align-items: center;
  margin-top: ${hp('2.46%')};
`;

export const SubjectArea = styled.View``;

export const SubjectButton = styled.TouchableOpacity`
  flex-direction: row;
  font-size: ${hp('2.82%')};
  height: ${hp('6.34%')};
  align-self: stretch;
  color: #312e38;
  font-weight: normal;
  margin-top: ${hp('0.53%')};
  align-items: center;
  border: 1px solid #958fa3;
  border-radius: 4px;
`;

export const AnswerText = styled.Text`
  font-size: ${hp('2.82%')};
  line-height: ${hp('4.23%')};
  color: #625c70;
  font-weight: normal;
  margin-left: ${wp('3.75%')};
`;

export const Subject = styled.Modal``;

export const SubjectAreaItens = styled.View`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
`;

export const SubjectItens = styled.View`
  background-color: #fff;
  width: ${wp('75.94%')};
  padding-top: ${hp('2.82%')};
  padding-bottom: ${hp('2.82%')};
  padding-left: ${wp('5.0%')};
  border-radius: 4;
`;

export const SubjectTextArea = styled.TouchableOpacity``;

export const SubjectText = styled.TextInput`
  font-size: ${hp('2.82%')};
  color: #625c70;
  font-weight: normal;
`;

export const IconArea = styled.View`
  align-items: flex-end;
  flex: 1;
`;

export const RiskArea = styled.View``;

export const RiskButton = styled.TouchableOpacity`
  flex-direction: row;
  font-size: ${hp('2.82%')};
  height: ${hp('6.34%')};
  align-self: stretch;
  color: #312e38;
  font-weight: normal;
  margin-top: ${hp('0.53%')};
  align-items: center;
  border: 1px solid #958fa3;
  border-radius: 4px;
`;

export const RiskSelected = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RiskColorSelected = styled.View`
  height: ${hp('2.82%')};
  width: ${wp('7.5%')};
  margin-left: ${wp('3.75%')};
  margin-right: ${wp('2.5%')};
  border-radius: 4;
`;

export const RiskTextSelected = styled.Text`
  font-size: ${hp('2.82%')};
  line-height: ${hp('4.23%')};
  color: #625c70;
  font-weight: normal;
`;

export const Risk = styled.Modal``;

export const RiskContainerItens = styled.View`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
`;

export const RiskItens = styled.View`
  background-color: #fff;
  width: 300px;
  padding-top: ${hp('1.08%')};
  padding-bottom: ${hp('3.52%')};
  padding-left: ${wp('6.25%')};
  padding-right: ${wp('6.25%')};
  border-radius: 4;
`;

export const RiskButtonItem = styled.TouchableOpacity`
  flex-direction: row;
  padding-right: ${wp('6.25%')};
  align-items: center;
`;

export const RiskAreaItens = styled.View`
  flex-direction: row;
  padding-right: ${wp('6.25%')};
  margin-top: ${hp('2.46%')};
  align-items: center;
`;

export const RiskColorGray = styled.View`
  height: ${hp('2.82%')};
  width: ${wp('7.5%')};
  margin-right: ${wp('2.5%')};
  border-radius: 4;
  background-color: #eee;
`;

export const RiskColorPink = styled.View`
  height: ${hp('2.82%')};
  width: ${wp('7.5%')};
  margin-right: ${wp('2.5%')};
  border-radius: 4;
  background-color: #e48abf;
`;

export const RiskColorRed = styled.View`
  height: ${hp('2.82%')};
  width: ${wp('7.5%')};
  margin-right: ${wp('2.5%')};
  border-radius: 4;
  background-color: #fa375a;
`;

export const RiskColorPurple = styled.View`
  height: ${hp('2.82%')};
  width: ${wp('7.5%')};
  margin-right: ${wp('2.5%')};
  border-radius: 4;
  background-color: #a51c60;
`;

export const RiskText = styled.Text`
  font-size: ${hp('2.82%')};
  line-height: ${hp('4.23%')};
  color: #625c70;
  font-weight: normal;
`;

export const DateArea = styled.View`
  flex-direction: row;
`;

export const SelectHourArea = styled.View``;

export const SelectHourButton = styled.TouchableOpacity`
  flex-direction: row;
  font-size: ${hp('2.82%')};
  height: ${hp('6.34%')};
  align-self: stretch;
  color: #312e38;
  font-weight: normal;
  margin-top: ${hp('0.53%')};
  align-items: center;
  border: 1px solid #958fa3;
  border-radius: 4px;
`;

export const HourSelected = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HourTextSelected = styled.Text`
  font-size: ${hp('2.82%')};
  line-height: ${hp('4.23%')};
  color: #625c70;
  font-weight: normal;
`;

export const HourArea = styled.Modal``;

export const HourContainerItens = styled.View`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const HourItens = styled.View`
  background-color: #fff;
  width: 300px;
  padding-top: ${hp('.54%')};
  padding-bottom: ${hp('1.76%')};
  padding-left: ${wp('3.13%')};
  padding-right: ${wp('3.13%')};
  border-radius: 4;
`;

export const HourList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`
  padding-top: 30px;
`;

export const HourButton = styled(BaseButton)`
  background: transparent;
  justify-content: center;
  border-radius: 4px;
  padding: 20px 20px 0;
  flex: 1;
  opacity: ${(props) => (props.enabled ? 1 : 0.6)};
  align-items: center;
  margin: 0 10px 20px;
  color: #fff;
`;

export const HourText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const AreaSubmitButton = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: ${hp('4.23%')};
  padding-bottom: ${hp('4.23%')};
  background-color: #fff;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #a51c60;
  height: ${hp('7.75%')};
  width: ${wp('71.25%')};
  align-items: center;
  justify-content: center;
`;

export const TextSubmitButton = styled.Text`
  font-size: ${hp('2.82%')};
  color: rgb(255, 255, 255);
  font-weight: normal;
  align-items: center;
`;
