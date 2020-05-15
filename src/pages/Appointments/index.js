import React, { useState, useMemo } from 'react';
import { View, Text } from 'react-native';
import { format } from 'date-fns-tz';
import { setHours, setMinutes, setSeconds } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector } from 'react-redux';

import DateInput from '~/components/DateInput';

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

export default function Appointments(props) {
  const navigateBack = () => {
    props.navigation.navigate('Conversations');
  };

  const profile = useSelector((state) => state.user.profile);

  const schedule = [
    { key: 1, hours: '08:00', value: '08:00 ás 08:59', available: true },
    { key: 2, hours: '09:00', valeu: '09:00 ás 09:59', available: true },
    { key: 3, hours: '10:00', valeu: '10:00 ás 10:59', available: false },
    { key: 4, hours: '11:00', valeu: '11:00 ás 11:59', available: true },
    { key: 5, hours: '12:00', valeu: '12:00 ás 12:59', available: true },
    { key: 6, hours: '13:00', valeu: '13:00 ás 13:59', available: false },
    { key: 7, hours: '14:00', valeu: '14:00 ás 14:59', available: false },
    { key: 8, hours: '15:00', valeu: '15:00 ás 15:59', available: true },
    { key: 9, hours: '16:00', valeu: '16:00 ás 16:59', available: true },
    { key: 10, hours: '17:00', valeu: '17:00 ás 17:59', available: true },
    { key: 11, hours: '18:00', valeu: '18:00 ás 18:59', available: true },
    { key: 12, hours: '19:00', valeu: '19:00 ás 19:59', available: false },
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

  const hourFormatted = useMemo(
    () =>
      format(new Date(), 'HH:mm', {
        timeZone: 'America/Sao_Paulo',
        locale: pt,
      }),
    []
  );

  const [risk, setRisk] = useState('Escolha o atendimento');
  const [colorRisk, setColorRisk] = useState(<RiskColorGray />);
  const [modalRiskVisible, setModalRiskVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(`${hourFormatted} horas`);
  const [modalHourVisible, setModalHourVisible] = useState(false);

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
                <RiskButtonItem onPress={() => handlePinkRisk('Rotina')}>
                  <RiskAreaItens>
                    <RiskColorPink />
                    <RiskText>Rotina</RiskText>
                  </RiskAreaItens>
                </RiskButtonItem>
                <RiskButtonItem onPress={() => handleRedRisk('Urgência')}>
                  <RiskAreaItens>
                    <RiskColorRed />
                    <RiskText>Urgência</RiskText>
                  </RiskAreaItens>
                </RiskButtonItem>
                <RiskButtonItem
                  onPress={() => handlePurRiskColorPurpleRisk('Cirurgia')}
                >
                  <RiskAreaItens>
                    <RiskColorPurple />
                    <RiskText>Cirurgia</RiskText>
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
              <HourTextSelected>{hour}</HourTextSelected>
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
                  data={schedule}
                  keyExtractor={(item) => item.key}
                  renderItem={({ item }) => (
                    <HourButton onPress={() => {}} enabled={item.available}>
                      <HourText>{item.hours}</HourText>
                    </HourButton>
                  )}
                />
              </HourItens>
            </HourContainerItens>
          </HourArea>
        </SelectHourArea>
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
