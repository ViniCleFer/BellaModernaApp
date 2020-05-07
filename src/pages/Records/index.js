import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SelectMultiple from 'react-native-select-multiple';

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
  SubjectArea,
  SubjectButton,
  AnswerText,
  Subject,
  SubjectAreaItens,
  SubjectItens,
  SubjectTextArea,
  SubjectText,
  ProblemsArea,
  ProblemButton,
  ItensSelected,
  Problems,
  ProblemsAreaItens,
  ProblemsItens,
  InputSearch,
  Itens,
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
  RiskColorGray,
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

  const problems = [
    { label: 'Cólicas Menstruais', value: 'Cólicas Menstruais' },
    { label: 'Corrimentos', value: 'Corrimentos' },
    { label: 'Pediatria', value: 'Pediatria' },
    {
      label: 'Menstruação em Excesso (hemorragias)',
      value: 'Menstruação em Excesso (hemorragias)',
    },
    {
      label: 'Falta / Atraso de menstruação',
      value: 'Falta / Atraso de menstruação',
    },
    { label: 'Dor pelvica', value: 'Dor pelvica' },
    { label: 'Dor lombar', value: 'Dor lombar' },
  ];

  const renderLabel = (label, style) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View>
          <Text style={style}>{label}</Text>
        </View>
      </View>
    );
  };

  const [subject, setSubject] = useState('Escolha o assunto');
  const [modalSubjectVisible, setModalSubjectVisible] = useState(false);

  const [selectedProblems, setProblems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [conclusion, setConclusion] = useState('Escolha o fechamento');
  const [modalConclusionVisible, setModalConclusionVisible] = useState(false);

  const [risk, setRisk] = useState('Escolha o risco');
  const [colorRisk, setColorRisk] = useState(<RiskColorGray />);
  const [modalRiskVisible, setModalRiskVisible] = useState(false);

  function handleSubject(value) {
    setSubject(value);
    setModalSubjectVisible(false);
  }

  function onSelectionsChange(selectedProblems) {
    setProblems(selectedProblems);
  }

  function handleProblems() {
    setModalVisible(false);
  }

  function handleConclusion(subject) {
    setConclusion(subject);
    setModalConclusionVisible(false);
  }

  function handleRedRisk(value) {
    setRisk(value);
    setColorRisk(<RiskColorRed />);
    setModalRiskVisible(false);
  }

  function handleOrangeRisk(value) {
    setRisk(value);
    setColorRisk(<RiskColorOrange />);
    setModalRiskVisible(false);
  }

  function handleYellowRisk(value) {
    setRisk(value);
    setColorRisk(<RiskColorYellow />);
    setModalRiskVisible(false);
  }

  function handleGreenRisk(value) {
    setRisk(value);
    setColorRisk(<RiskColorGreen />);
    setModalRiskVisible(false);
  }

  function handleBlueRisk(value) {
    setRisk(value);
    setColorRisk(<RiskColorBlue />);
    setModalRiskVisible(false);
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

        <SubjectArea>
          <SubjectButton
            activeOpacity={0.6}
            onPress={() => setModalSubjectVisible(true)}
          >
            <AnswerText>{subject}</AnswerText>
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
          </SubjectButton>
          <Subject
            visible={modalSubjectVisible}
            animationType="fade"
            transparent
            onRequestClose={() => setModalSubjectVisible(false)}
          >
            <SubjectAreaItens>
              <SubjectItens>
                <SubjectTextArea onPress={() => handleSubject('Obstetrícia')}>
                  <SubjectText value="Obstetrícia" editable={false} />
                </SubjectTextArea>
                <SubjectTextArea
                  onPress={() => handleSubject('Saúde da Mulher')}
                >
                  <SubjectText value="Saúde da Mulher" editable={false} />
                </SubjectTextArea>
                <SubjectTextArea onPress={() => handleSubject('Pediatria')}>
                  <SubjectText value="Pediatria" editable={false} />
                </SubjectTextArea>
                <SubjectTextArea onPress={() => handleSubject('Alimentação')}>
                  <SubjectText value="Alimentação" editable={false} />
                </SubjectTextArea>
              </SubjectItens>
            </SubjectAreaItens>
          </Subject>
        </SubjectArea>

        <SubTitle>Problemas</SubTitle>
        <ProblemsArea>
          <ProblemButton
            activeOpacity={0.6}
            onPress={() => setModalVisible(true)}
          >
            <ItensSelected>selecionados</ItensSelected>
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
                {/*
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
                  <SelectMultiple
                    items={problems}
                    renderLabel={renderLabel}
                    selectedItems={selectedProblems}
                    onSelectionsChange={onSelectionsChange}
                  />
                </Itens>

                */}
                <SubmitButton
                  onPress={() => handleProblems}
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

        {/*
          <AreaProblem>
          {selectedProblems.map((selectedProblems) => (
            <InfoProblem>
              <Icon
                name="check"
                color="#A51C60"
                size={18}
                style={{ marginRight: wp('1.88%') }}
              />
              <BodyText>{selectedProblems.value}</BodyText>
            </InfoProblem>
          ))}
        </AreaProblem>
        */}

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
            placeholderTextColor="#ccc"
          />
        </BecauseArea>

        <SubTitle>Fechamento</SubTitle>
        <ConclusionsArea>
          <ConclusionButton
            activeOpacity={0.6}
            onPress={() => setModalConclusionVisible(true)}
          >
            <ConclusionSelected numberOfLines={1}>
              {conclusion}
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
                  onPress={() => handleConclusion('Internação concluída')}
                >
                  <ConclusionText>Interação concluída</ConclusionText>
                </ConclusionTextArea>
                <ConclusionTextArea
                  onPress={() =>
                    handleConclusion('Orientada a retornar para reavaliação')
                  }
                >
                  <ConclusionText>
                    Orientada a retornar para reavaliação
                  </ConclusionText>
                </ConclusionTextArea>
                <ConclusionTextArea
                  onPress={() =>
                    handleConclusion(
                      'Orientada a realizar uma interação com outro profissional'
                    )
                  }
                >
                  <ConclusionText>
                    Orientada a realizar uma interação com outro profissional
                  </ConclusionText>
                </ConclusionTextArea>
                <ConclusionTextArea
                  onPress={() =>
                    handleConclusion(
                      'Orientada a procurar uma avaliação médica nas próximas 24h'
                    )
                  }
                >
                  <ConclusionText>
                    Orientada a procurar uma avaliação médica nas próximas 24h
                  </ConclusionText>
                </ConclusionTextArea>
                <ConclusionTextArea
                  onPress={() =>
                    handleConclusion(
                      'Orientada a procurar um pronto atendimento'
                    )
                  }
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
          <BecauseInput placeholder="2 horas" placeholderTextColor="#ccc" />
        </BecauseArea>

        <SubTitle>Classificação de risco</SubTitle>
        <RiskArea>
          <RiskButton
            activeOpacity={0.6}
            onPress={() => setModalRiskVisible(true)}
          >
            <RiskSelected>
              <RiskColorSelected>{colorRisk}</RiskColorSelected>
              <RiskTextSelected>{risk}</RiskTextSelected>
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
                <RiskButtonItem onPress={() => handleRedRisk('Alto')}>
                  <RiskAreaItens>
                    <RiskColorRed />
                    <RiskText>Alto</RiskText>
                  </RiskAreaItens>
                </RiskButtonItem>
                <RiskButtonItem onPress={() => handleOrangeRisk('Laranja')}>
                  <RiskAreaItens>
                    <RiskColorOrange />
                    <RiskText>Laranja</RiskText>
                  </RiskAreaItens>
                </RiskButtonItem>
                <RiskButtonItem onPress={() => handleYellowRisk('Médio')}>
                  <RiskAreaItens>
                    <RiskColorYellow />
                    <RiskText>Médio</RiskText>
                  </RiskAreaItens>
                </RiskButtonItem>
                <RiskButtonItem onPress={() => handleGreenRisk('Verde')}>
                  <RiskAreaItens>
                    <RiskColorGreen />
                    <RiskText>Verde</RiskText>
                  </RiskAreaItens>
                </RiskButtonItem>
                <RiskButtonItem onPress={() => handleBlueRisk('Habitual')}>
                  <RiskAreaItens>
                    <RiskColorBlue />
                    <RiskText>Habitual</RiskText>
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
