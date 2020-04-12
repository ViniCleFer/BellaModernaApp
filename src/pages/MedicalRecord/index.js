import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import Input from '~/components/Input';
import {
  Container,
  TitleArea,
  Title,
  DateArea,
  DateText,
  AreaProblem,
  AreaInfo,
  Card,
  TopCard,
  DoctorImage,
  AreaDoctorInfo,
  DoctorName,
  DoctorSpecialty,
  IconArea,
  Separator,
  BodyCard,
  BodyTitle,
  InfoProblem,
  BodyText,
  InfoRisk,
  ColorRisk,
  BottomCard,
  CallType,
  Duration,
} from './styles';

export default function MedicalRecord(props) {
  const profile = useSelector((state) => state.user.profile);

  const [medRecords, setMedRecord] = useState([]);
  const [risk, setRisk] = useState([]);

  const navigateBack = () => {
    props.navigation.goBack();
  };

  useEffect(() => {
    async function loadMedRecords() {
      const response = await api.get(`/medical_record/${profile.id}`);

      setMedRecord(response.data);
    }

    loadMedRecords();
  }, []);

  return (
    <Container>
      <TitleArea>
        <Icon
          name="arrow-back"
          size={(hp('2.82%'), wp('5%'))}
          color="#625C70"
          style={{ marginLeft: wp('7.5%') }}
          onPress={navigateBack}
        />
        <Title>Prontuários</Title>
      </TitleArea>
      <Input icon="search" placeholder="Pesquisar histórico" />

      <AreaInfo
        showsVerticalScrollIndicator={false}
        data={medRecords}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <>
            <DateArea>
              <DateText>31 de Março de 2020, Terça-feira</DateText>
            </DateArea>
            <Card>
              <TopCard>
                <DoctorImage source={{ uri: item.image }} />
                <AreaDoctorInfo>
                  <DoctorName>{item.medical}</DoctorName>
                  <DoctorSpecialty>{item.especiality}</DoctorSpecialty>
                </AreaDoctorInfo>
                <IconArea>
                  <Icon
                    name="expand-more"
                    size={(wp('3.75%'), hp('2.32%'))}
                    color="#625C70"
                    style={{
                      marginRight: wp('6.88%'),
                      alignItems: 'center',
                    }}
                  />
                </IconArea>
              </TopCard>
              <Separator />
              <BodyCard>
                <BodyTitle>Problemas</BodyTitle>
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
                <BodyTitle>Você faz amamentação exclusiva?</BodyTitle>
                <BodyText>{item.questions[0]}</BodyText>

                <BodyTitle>A vacinação do bebê está em dia? </BodyTitle>
                <BodyText>{item.questions[1]}</BodyText>

                <BodyTitle>Por que?</BodyTitle>
                <BodyText>{item.questions[2]}</BodyText>

                <BodyTitle>Descrição resumida da interação</BodyTitle>
                <BodyText>{item.questions[3]}</BodyText>

                <BodyTitle>Fechamento</BodyTitle>
                <BodyText>{item.conclusion}</BodyText>

                <BodyTitle>Classificação de risco</BodyTitle>
                <InfoRisk>
                  <ColorRisk level={item.level} />
                  <BodyText>{item.risk}</BodyText>
                </InfoRisk>
              </BodyCard>
              <Separator />
              <BottomCard>
                <CallType>{item.attendance}</CallType>
                <Duration>Das {item.duration}</Duration>
              </BottomCard>
            </Card>
          </>
        )}
      />
    </Container>
  );
}

// //** {if ({medRecord.level} === 1 ) {
//  <ColorRiskGreen />
// } else {
// <ColorRiskBlue />

// }} */

// ///
