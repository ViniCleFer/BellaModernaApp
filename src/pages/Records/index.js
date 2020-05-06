import React, { useState } from 'react';
import { Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import {
  Container,
  TitleArea,
  Title,
  AreaInfo,
  SubTitle,
  ButtonArea,
  DoctorImage,
  DoctorName,
  IconArea,
  AnswerArea,
  Subject,
  ProblemsArea,
  ProblemButton,
  ItensSelected,
  Problems,
  ProblemsAreaItens,
  ProblemsItens,
  InputSearch,
  Itens,
  ProblemsItensText,
  AreaProblem,
  InfoProblem,
  BodyText,
  RadioText,
  BecauseArea,
  BecauseInput,
  ConclusionsArea,
  ConclusionButton,
  ConclusionSelected,
  Conclusions,
  ConclusionItens,
  ConclusionsAreaItens,
  ConclusionTextArea,
  ConclusionText,
  RiskArea,
  RiskButton,
  RiskSelected,
  RiskColorSelected,
  RiskTextSelected,
  Risk,
  RiskContainerItens,
  RiskItens,
  RiskButtonItem,
  RiskAreaItens,
  RiskColorRed,
  RiskColorOrange,
  RiskColorYellow,
  RiskColorGreen,
  RiskColorBlue,
  RiskText,
  AreaSubmitButton,
  SubmitButton,
  TextSubmitButton,
} from './styles';

export default function Records(props) {
  const navigateBack = () => {
    props.navigation.navigate('PersonalData');
  };

  const profile = useSelector((state) => state.user.profile);

  const [selectedValue, setSelectedValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalRiskVisible, setModalRiskVisible] = useState(false);
  const [modalConclusionVisible, setModalConclusionVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [count, setCount] = useState(0);

  function handleProblems() {
    setModalVisible(true);
  }

  function countProblems() {
    setModalVisible(false);
    const checked = isSelected;

    setCount(checked);
  }

  function handleRisk() {
    setModalRiskVisible(true);
  }

  return (
    <Container showsVerticalScrollIndicator={false}>
      <TitleArea>
        <Icon
          name="arrow-back"
          size={(hp('2.82%'), wp('5%'))}
          color="#625C70"
          style={{ marginLeft: wp('7.5%') }}
          onPress={navigateBack}
        />
        <Title>Preencher prontuário</Title>
      </TitleArea>

      <AreaInfo>
        <ButtonArea activeOpacity={0.6} onPress={() => {}}>
          <DoctorImage
            source={{
              uri: `http://192.168.0.13:3333/files/${profile.image_url}`,
            }}
          />
          <DoctorName>{profile.name}</DoctorName>

          <IconArea>
            <Icon
              name="arrow-drop-down"
              size={22}
              color="#625C70"
              style={{
                marginRight: wp('3%'),
                alignItems: 'center',
              }}
            />
          </IconArea>
        </ButtonArea>

        <SubTitle>Assunto do Atendimento</SubTitle>

        <AnswerArea>
          <Subject
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            selectedValue={selectedValue}
            mode="dropdown"
          >
            <Subject.Item label="Obstetrícia" value="Obstetrícia" />
            <Subject.Item label="Saúde da Mulher" value="Saúde da Mulher" />
            <Subject.Item label="Pediatria" value="Pediatria" />
            <Subject.Item label="Alimentação" value="Alimentação" />
          </Subject>
        </AnswerArea>

        <SubTitle>Problemas</SubTitle>
        <ProblemsArea>
          <ProblemButton activeOpacity={0.6} onPress={handleProblems}>
            <ItensSelected>{count} selecionados</ItensSelected>
            <IconArea>
              <Icon
                name="arrow-drop-down"
                size={22}
                color="#625C70"
                style={{
                  marginRight: wp('3%'),
                  alignItems: 'center',
                }}
              />
            </IconArea>
          </ProblemButton>
          <Problems
            visible={modalVisible}
            animationType="fade"
            transparent
            onRequestClose={() => setModalVisible(false)}
          >
            <ProblemsAreaItens>
              <ProblemsItens>
                <InputSearch
                  onPress={() =>
                    Alert.alert(
                      'Atenção',
                      'Por favor, crie a função para pesquisar problemas'
                    )
                  }
                >
                  <IconArea>
                    <Icon
                      name="search"
                      size={22}
                      color="#625C70"
                      style={{
                        marginRight: wp('3%'),
                        alignItems: 'center',
                      }}
                    />
                  </IconArea>
                </InputSearch>
                <Itens>
                  <CheckBox value={isSelected} onValueChange={setSelection} />
                  <ProblemsItensText>Cólicas Menstruais</ProblemsItensText>
                </Itens>
                <Itens>
                  <CheckBox value={isSelected} onValueChange={setSelection} />
                  <ProblemsItensText>Corrimentos</ProblemsItensText>
                </Itens>
                <Itens>
                  <CheckBox value={isSelected} onValueChange={setSelection} />
                  <ProblemsItensText>Pediatria</ProblemsItensText>
                </Itens>
                <Itens>
                  <CheckBox value={isSelected} onValueChange={setSelection} />
                  <ProblemsItensText>Coceira Vaginal</ProblemsItensText>
                </Itens>
                <Itens>
                  <CheckBox value={isSelected} onValueChange={setSelection} />
                  <ProblemsItensText>
                    Menstruação em Excesso (hemorragias)
                  </ProblemsItensText>
                </Itens>
                <Itens>
                  <CheckBox value={isSelected} onValueChange={setSelection} />
                  <ProblemsItensText>
                    Falta / Atraso de menstruação
                  </ProblemsItensText>
                </Itens>
                <Itens>
                  <CheckBox value={isSelected} onValueChange={setSelection} />
                  <ProblemsItensText>Dor pelvica</ProblemsItensText>
                </Itens>
                <Itens>
                  <CheckBox value={isSelected} onValueChange={setSelection} />
                  <ProblemsItensText>Dor lombar</ProblemsItensText>
                </Itens>

                <SubmitButton
                  onPress={countProblems}
                  activeOpacity={0.7}
                  style={{
                    borderRadius: 50,
                    borderColor: 'transparent',
                    marginTop: hp('2.46%'),
                  }}
                >
                  <TextSubmitButton>Ok</TextSubmitButton>
                </SubmitButton>
              </ProblemsItens>
            </ProblemsAreaItens>
          </Problems>
        </ProblemsArea>

        <AreaProblem>
          <InfoProblem>
            <Icon
              name="check"
              color="#A51C60"
              size={18}
              style={{ marginRight: wp('1.88%') }}
            />
            <BodyText>Dor de cabeça</BodyText>
          </InfoProblem>
          <InfoProblem>
            <Icon
              name="check"
              color="#A51C60"
              size={18}
              style={{ marginRight: wp('1.88%') }}
            />
            <BodyText>Febre</BodyText>
          </InfoProblem>
        </AreaProblem>

        <SubTitle>Seu pré-natal está em dia?</SubTitle>
        <AreaProblem
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <InfoProblem
            style={{
              marginRight: wp('1.88%'),
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon
              name="radio-button-checked"
              color="#A51C60"
              size={18}
              style={{
                marginRight: wp('1.88%'),
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <RadioText>Sim</RadioText>
          </InfoProblem>
          <InfoProblem
            style={{
              marginRight: wp('1.88%'),
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon
              name="radio-button-unchecked"
              color="#958FA3"
              size={18}
              style={{
                marginRight: wp('1.88%'),
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <RadioText>Não</RadioText>
          </InfoProblem>
        </AreaProblem>

        <SubTitle>Por quê?</SubTitle>
        <BecauseArea>
          <BecauseInput
            placeholder="Não perguntei"
            placeholderTextColor="#625c70"
          />
        </BecauseArea>

        <SubTitle>Fechamento</SubTitle>
        <ConclusionsArea>
          <ConclusionButton
            activeOpacity={0.6}
            onPress={() => setModalConclusionVisible(true)}
          >
            <ConclusionSelected>
              Orientada a retornar para...
            </ConclusionSelected>
            <IconArea>
              <Icon
                name="arrow-drop-down"
                size={22}
                color="#625C70"
                style={{
                  marginRight: wp('3%'),
                  alignItems: 'center',
                }}
              />
            </IconArea>
          </ConclusionButton>
          <Conclusions
            visible={modalConclusionVisible}
            animationType="fade"
            transparent
            onRequestClose={() => setModalConclusionVisible(false)}
          >
            <ConclusionsAreaItens>
              <ConclusionItens style={{ paddingTop: hp('-2.46%') }}>
                <ConclusionTextArea
                  onPress={() => setModalConclusionVisible(false)}
                >
                  <ConclusionText>Interação concluída</ConclusionText>
                </ConclusionTextArea>
                <ConclusionTextArea
                  onPress={() => setModalConclusionVisible(false)}
                >
                  <ConclusionText>
                    Orientada a retornar para reavaliação
                  </ConclusionText>
                </ConclusionTextArea>
                <ConclusionTextArea
                  onPress={() => setModalConclusionVisible(false)}
                >
                  <ConclusionText>
                    Orientada a realizar uma interação com outro profissional
                  </ConclusionText>
                </ConclusionTextArea>
                <ConclusionTextArea
                  onPress={() => setModalConclusionVisible(false)}
                >
                  <ConclusionText>
                    Orientada a procurar uma avaliação médica nas próximas 24h
                  </ConclusionText>
                </ConclusionTextArea>
                <ConclusionTextArea
                  onPress={() => setModalConclusionVisible(false)}
                >
                  <ConclusionText>
                    Orientada a procurar um pronto atendimento
                  </ConclusionText>
                </ConclusionTextArea>
              </ConclusionItens>
            </ConclusionsAreaItens>
          </Conclusions>
        </ConclusionsArea>

        <SubTitle>Deverá retornar em quantas horas?</SubTitle>
        <BecauseArea>
          <BecauseInput placeholder="2 horas" placeholderTextColor="#625c70" />
        </BecauseArea>

        <SubTitle>Classificação de risco</SubTitle>
        <RiskArea>
          <RiskButton activeOpacity={0.6} onPress={handleRisk}>
            <RiskSelected>
              <RiskColorSelected />
              <RiskTextSelected>Vermelho</RiskTextSelected>
            </RiskSelected>

            <IconArea>
              <Icon
                name="arrow-drop-down"
                size={22}
                color="#625C70"
                style={{
                  marginRight: wp('3%'),
                  alignItems: 'center',
                }}
              />
            </IconArea>
          </RiskButton>
          <Risk
            visible={modalRiskVisible}
            animationType="fade"
            transparent
            onRequestClose={() => setModalRiskVisible(false)}
          >
            <RiskContainerItens>
              <RiskItens>
                <RiskButtonItem onPress={() => setModalRiskVisible(false)}>
                  <RiskAreaItens>
                    <RiskColorRed />
                    <RiskText>Vermelho</RiskText>
                  </RiskAreaItens>
                </RiskButtonItem>
                <RiskButtonItem onPress={() => setModalRiskVisible(false)}>
                  <RiskAreaItens>
                    <RiskColorOrange />
                    <RiskText>Laranja</RiskText>
                  </RiskAreaItens>
                </RiskButtonItem>
                <RiskButtonItem onPress={() => setModalRiskVisible(false)}>
                  <RiskAreaItens>
                    <RiskColorYellow />
                    <RiskText>Amarelo</RiskText>
                  </RiskAreaItens>
                </RiskButtonItem>
                <RiskButtonItem onPress={() => setModalRiskVisible(false)}>
                  <RiskAreaItens>
                    <RiskColorGreen />
                    <RiskText>Verde</RiskText>
                  </RiskAreaItens>
                </RiskButtonItem>
                <RiskButtonItem onPress={() => setModalRiskVisible(false)}>
                  <RiskAreaItens>
                    <RiskColorBlue />
                    <RiskText>Azul</RiskText>
                  </RiskAreaItens>
                </RiskButtonItem>
              </RiskItens>
            </RiskContainerItens>
          </Risk>
        </RiskArea>
      </AreaInfo>

      <AreaSubmitButton>
        <SubmitButton
          onPress={() => {}}
          activeOpacity={0.7}
          style={{
            borderRadius: 50,
            borderColor: 'transparent',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: hp('0.35%') },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          }}
        >
          <TextSubmitButton>Cadastrar Prontuário</TextSubmitButton>
        </SubmitButton>
      </AreaSubmitButton>
    </Container>
  );
}

/*
const styles = StyleSheet.create({
  dataPiker: {
    backgroundColor: 'blue',
    fontSize: hp('2.82%'),
    color: '#625c70',
    fontWeight: 'normal',
    marginLeft: wp('3.75%'),
  },
});



<AreaProblem>
  {item.problems.map((problems) => (
    <InfoProblem>
      <Icon
        name="check"
        color="#A51C60"
        size={18}
        style={{ marginRight: wp('1.88%') }}
      />
      <BodyText>{problems}</BodyText>
    </InfoProblem>
  ))}
</AreaProblem>

*/
