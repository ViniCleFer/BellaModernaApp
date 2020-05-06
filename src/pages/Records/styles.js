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

export const AreaInfo = styled.View`
  background-color: #fff;
  padding-top: ${hp('4.23%')};
  padding-left: ${wp('8.13%')};
  padding-right: ${wp('8.13%')};
`;

export const ButtonArea = styled.TouchableOpacity`
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

export const DoctorImage = styled.Image`
  height: ${hp('4.23%')};
  width: ${wp('7.50%')};
  margin-left: ${wp('3.75%')};
  border-radius: 50;
  justify-content: center;
`;

export const DoctorName = styled.Text`
  font-size: ${hp('2.82%')};
  line-height: ${hp('4.23%')};
  color: #625c70;
  font-weight: normal;
  margin-left: ${wp('2.5%')};
`;

export const IconArea = styled.View`
  align-items: flex-end;
  flex: 1;
`;

export const SubTitle = styled.Text`
  font-size: ${hp('2.11%')};
  color: #958fa3;
  font-weight: normal;
  align-items: center;
  margin-top: ${hp('2.46%')};
`;

export const AnswerArea = styled.View`
  font-size: ${hp('2.82%')};
  height: ${hp('6.34%')};
  align-self: stretch;
  color: #625c70;
  font-weight: normal;
  margin-top: ${hp('0.53%')};
  border: 1px solid #958fa3;
  border-radius: 4px;
  justify-content: center;
`;

export const AnswerText = styled.Text`
  font-size: ${hp('2.82%')};
  color: #625c70;
  font-weight: normal;
  margin-left: ${wp('3.75%')};
`;

export const SubjectArea = styled.View`
  padding-top: ${hp('2%')};
  padding-bottom: ${hp('0.70%')};
  margin-top: ${hp('-0.36%')};
  border: 1px solid #958fa3;
  border-bottom-left-radius: ${wp('1.25%')};
  border-bottom-right-radius: ${wp('1.25%')};
  background-color: #fff;
`;

export const Subject = styled.Picker`
  font-size: ${hp('2.82%')};
  color: #625c70;
  font-weight: normal;
  margin-left: ${wp('1.5%')};
`;

export const ProblemsArea = styled.View``;

export const ProblemButton = styled.TouchableOpacity`
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

export const ItensSelected = styled.Text`
  font-size: ${hp('2.82%')};
  line-height: ${hp('4.23%')};
  color: #625c70;
  font-weight: normal;
  margin-left: ${wp('3.75%')};
`;

export const Problems = styled.Modal``;

export const ProblemsAreaItens = styled.View`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
`;

export const ProblemsItens = styled.View`
  background-color: #fff;
  width: 300px;
  padding-top: ${hp('3.52%')};
  padding-bottom: ${hp('3.52%')};
  padding-left: ${wp('6.25%')};
  padding-right: ${wp('6.25%')};
  border-radius: 4;
`;

export const InputSearch = styled.TouchableOpacity`
  flex-direction: row;
  font-size: ${hp('2.82%')};
  height: ${hp('6.34%')};
  align-self: stretch;
  color: #312e38;
  font-weight: normal;
  align-items: center;
  border: 1px solid #958fa3;
  border-radius: 4px;
`;

export const Itens = styled.View`
  flex-direction: row;
  padding-right: ${wp('6.25%')};
  margin-top: ${hp('2.46%')};
`;

export const ProblemsItensText = styled.Text`
  font-size: ${hp('2.82%')};
  line-height: ${hp('4.23%')};
  color: #625c70;
  font-weight: normal;
`;

export const AreaProblem = styled.View`
  margin-top: ${hp('0.7%')};
`;

export const InfoProblem = styled.View`
  flex-direction: row;
`;

export const BodyText = styled.Text`
  line-height: ${hp('2.82%')};
  font-size: ${hp('2.11%')};
  font-weight: normal;
  color: #625c70;
  padding-bottom: ${hp('0.18%')};
`;

export const RadioText = styled.Text`
  font-size: ${hp('2.82%')};
  font-weight: normal;
  color: #625c70;
  margin-right: ${wp('9.06%')};
`;

export const BecauseArea = styled.View`
  flex-direction: row;
  font-size: ${hp('2.82%')};
  height: ${hp('6.34%')};
  align-self: stretch;
  color: #312e38;
  font-weight: normal;
  align-items: flex-start;
  border: 1px solid #958fa3;
  border-radius: 4px;
  margin-top: ${hp('0.53%')};
`;

export const BecauseInput = styled.TextInput`
  font-size: ${hp('2.8%')};
  line-height: ${hp('4.23%')};
  color: #625c70;
  font-weight: normal;
  padding: 5px;
  margin-left: ${wp('2%')};
`;

export const ConclusionsArea = styled.View``;

export const ConclusionButton = styled.TouchableOpacity`
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

export const ConclusionSelected = styled.Text`
  font-size: ${hp('2.82%')};
  line-height: ${hp('4.23%')};
  color: #625c70;
  font-weight: normal;
  margin-left: ${wp('3.75%')};
`;

export const Conclusions = styled.Modal``;

export const ConclusionsAreaItens = styled.View`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
`;

export const ConclusionItens = styled.View`
  background-color: #fff;
  width: 300px;
  padding-top: ${hp('3.52%')};
  padding-bottom: ${hp('3.52%')};
  padding-left: ${wp('6.25%')};
  padding-right: ${wp('6.25%')};
  border-radius: 4;
`;

export const ConclusionTextArea = styled.TouchableOpacity`
  flex-direction: row;
  padding-right: ${wp('6.25%')};
  margin-top: ${hp('2.46%')};
`;

export const ConclusionText = styled.Text`
  font-size: ${hp('2.82%')};
  line-height: ${hp('4.23%')};
  color: #625c70;
  font-weight: normal;
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
  background-color: #fa375a;
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

export const RiskColorRed = styled.View`
  height: ${hp('2.82%')};
  width: ${wp('7.5%')};
  margin-right: ${wp('2.5%')};
  border-radius: 4;
  background-color: #fa375a;
`;

export const RiskColorOrange = styled.View`
  height: ${hp('2.82%')};
  width: ${wp('7.5%')};
  margin-right: ${wp('2.5%')};
  border-radius: 4;
  background-color: #ff891c;
`;

export const RiskColorYellow = styled.View`
  height: ${hp('2.82%')};
  width: ${wp('7.5%')};
  margin-right: ${wp('2.5%')};
  border-radius: 4;
  background-color: #fff500;
`;
export const RiskColorGreen = styled.View`
  height: ${hp('2.82%')};
  width: ${wp('7.5%')};
  margin-right: ${wp('2.5%')};
  border-radius: 4;
  background-color: #25d366;
`;
export const RiskColorBlue = styled.View`
  height: ${hp('2.82%')};
  width: ${wp('7.5%')};
  margin-right: ${wp('2.5%')};
  border-radius: 4;
  background-color: #2f80ed;
`;

export const RiskText = styled.Text`
  font-size: ${hp('2.82%')};
  line-height: ${hp('4.23%')};
  color: #625c70;
  font-weight: normal;
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
