import React, { useState, useMemo, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import uuid from 'uuid/v4';
import AsyncStorage from '@react-native-community/async-storage';
import { format } from 'date-fns-tz';

import pt from 'date-fns/locale/pt-BR';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DateInput from '~/components/DateInput';

import {
  Container,
  TitleArea,
  Title,
  AreaInfo,
  SubTitle,
  Subject,
  SubjectArea,
  SubjectButton,
  AnswerText,
  SubjectAreaItens,
  SubjectItens,
  SubjectTextArea,
  SubjectText,
  IconArea,
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
  RiskColorPink,
  RiskColorPurple,
  RiskColorGray,
  RiskText,
  DateArea,
  SelectHourArea,
  SelectHourButton,
  HourSelected,
  HourTextSelected,
  HourArea,
  HourContainerItens,
  HourItens,
  HourList,
  HourButton,
  HourText,
  AreaSubmitButton,
  SubmitButton,
  TextSubmitButton,
} from './styles';

export default function Appointments({ navigation }) {
  const navigateBack = () => {
    navigation.navigate('Conversations');
  };

  const dataS = navigation.getParam('list');

  const schedule = [
    { id: 1, time: '08:00', hours: '08:00 - 08:59', available: true },
    { id: 2, time: '09:00', hours: '09:00 - 09:59', available: true },
    { id: 3, time: '10:00', hours: '10:00 - 10:59', available: false },
    { id: 4, time: '11:00', hours: '11:00 - 11:59', available: true },
    { id: 5, time: '12:00', hours: '12:00 - 12:59', available: true },
    { id: 6, time: '13:00', hours: '13:00 - 13:59', available: false },
    { id: 7, time: '14:00', hours: '14:00 - 14:59', available: true },
    { id: 8, time: '15:00', hours: '15:00 - 15:59', available: true },
    { id: 9, time: '16:00', hours: '16:00 - 16:59', available: true },
    { id: 10, time: '17:00', hours: '17:00 - 17:59', available: true },
    { id: 11, time: '18:00', hours: '18:00 - 18:59', available: true },
    { id: 12, time: '19:00', hours: '19:00 - 19:59', available: true },
  ];

  const hourFormatted = useMemo(
    () =>
      format(new Date(), 'HH:mm', {
        timeZone: 'America/Sao_Paulo',
        locale: pt,
      }),
    []
  );

  const [subject, setSubject] = useState('Escolha o médico');
  const [modalSubjectVisible, setModalSubjectVisible] = useState(false);
  const [risk, setRisk] = useState('Escolha o atendimento');
  const [colorRisk, setColorRisk] = useState(<RiskColorGray />);
  const [modalRiskVisible, setModalRiskVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [itens, setItens] = useState(schedule);
  const [hour, setHour] = useState(`${hourFormatted} horas`);
  const [hours, setHours] = useState(`${hourFormatted} horas`);
  const [modalHourVisible, setModalHourVisible] = useState(false);
  const [items, setItems] = useState(dataS);

  // const jsonValue = JSON.stringify({ date });

  function handleSubject(value) {
    setSubject(value);
    setModalSubjectVisible(false);
  }

  function handleRedRisk(value) {
    setRisk(value);
    setColorRisk(<RiskColorRed />);
    setModalRiskVisible(false);
  }

  function handlePinkRisk(value) {
    setRisk(value);
    setColorRisk(<RiskColorPink />);
    setModalRiskVisible(false);
  }

  function handlePurRiskColorPurpleRisk(value) {
    setRisk(value);
    setColorRisk(<RiskColorPurple />);
    setModalRiskVisible(false);
  }

  function handleHour(time, hours) {
    setHour(time);
    setHours(hours);
    setModalHourVisible(false);
  }

  const handleSubmit = async () => {
    // eslint-disable-next-line prefer-const
    let itemsList = [...items];
    itemsList.push({
      id: uuid(),
      subject,
      risk,
      date,
      hours,
    });
    setItems(itemsList);

    const data = JSON.stringify(itemsList);
    await AsyncStorage.setItem('@appointments', data);

    navigation.navigate('Conversations');
  };

  useEffect(() => {}, []);

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
        <Title>Preencher Agendamento</Title>
      </TitleArea>
      <AreaInfo>
        <SubTitle>Médico</SubTitle>
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
                <SubjectTextArea onPress={() => handleSubject('Dra. Maria')}>
                  <SubjectText value="Dra. Maria" editable={false} />
                </SubjectTextArea>
                <SubjectTextArea onPress={() => handleSubject('Dr. Edvaldo')}>
                  <SubjectText value="Dr. Edvaldo" editable={false} />
                </SubjectTextArea>
                <SubjectTextArea onPress={() => handleSubject('Dr. Junior')}>
                  <SubjectText value="Dr. Junior" editable={false} />
                </SubjectTextArea>
                <SubjectTextArea onPress={() => handleSubject('Dr. Ademilson')}>
                  <SubjectText value="Dr. Ademilson" editable={false} />
                </SubjectTextArea>
              </SubjectItens>
            </SubjectAreaItens>
          </Subject>
        </SubjectArea>

        <SubTitle>Tipo do Atendimento</SubTitle>
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
                <RiskButtonItem onPress={() => handlePinkRisk('Monitoramento')}>
                  <RiskAreaItens>
                    <RiskColorPink />
                    <RiskText>Monitoramento</RiskText>
                  </RiskAreaItens>
                </RiskButtonItem>
                <RiskButtonItem
                  onPress={() => handleRedRisk('Agendamento de consulta')}
                >
                  <RiskAreaItens>
                    <RiskColorRed />
                    <RiskText>Agendamento de consulta</RiskText>
                  </RiskAreaItens>
                </RiskButtonItem>
                <RiskButtonItem
                  onPress={() =>
                    handlePurRiskColorPurpleRisk('Semana á semana')
                  }
                >
                  <RiskAreaItens>
                    <RiskColorPurple />
                    <RiskText>Semana á semana</RiskText>
                  </RiskAreaItens>
                </RiskButtonItem>
              </RiskItens>
            </RiskContainerItens>
          </Risk>
        </RiskArea>

        <SubTitle>Data do Agendamento</SubTitle>
        <DateArea>
          <DateInput date={date} onChange={setDate} />
        </DateArea>

        <SubTitle>Horário do Agendamento</SubTitle>
        <SelectHourArea>
          <SelectHourButton
            activeOpacity={0.6}
            onPress={() => setModalHourVisible(true)}
          >
            <HourSelected>
              <Icon
                name="access-alarms"
                size={22}
                color="#625C70"
                style={{
                  marginRight: wp('3%'),
                  marginLeft: wp('3.75%'),
                  alignItems: 'center',
                }}
              />
              <HourTextSelected>{hour} horas</HourTextSelected>
            </HourSelected>

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
          </SelectHourButton>
          <HourArea
            visible={modalHourVisible}
            animationType="fade"
            transparent
            onRequestClose={() => setModalHourVisible(false)}
          >
            <HourContainerItens>
              <HourItens>
                <HourList
                  data={itens}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      activeOpacity={0.9}
                      style={{
                        backgroundColor: '#a51c60',
                        borderRadius: 4,
                        paddingBottom: -40,
                        flex: 1,
                        opacity: ({ enabled }) => (enabled ? 1 : 0.6),
                        alignItems: 'center',
                        marginTop: 0,
                        marginHorizontal: 10,
                        marginBottom: 20,
                        color: '#fff',
                      }}
                      enabled={item.available}
                      onPress={() => handleHour(item.time, item.hours)}
                    >
                      <>
                        <HourButton>
                          <HourText>{item.time}</HourText>
                        </HourButton>
                      </>
                    </TouchableOpacity>
                  )}
                />
              </HourItens>
            </HourContainerItens>
          </HourArea>
        </SelectHourArea>
      </AreaInfo>
      <AreaSubmitButton>
        <SubmitButton
          onPress={() => handleSubmit()}
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
