import React, { useState, useEffect } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Input from '~/components/Input';
import {
  Container,
  TitleArea,
  Title,
  DateArea,
  DateText,
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
  const [medRecords, setMedRecord] = useState([]);
  const [userId, setUserId] = useState([]);

  const navigateBack = () => {
    props.navigation.goBack();
  };

  async function loadMedRecords() {
    const response = api.get(`medical_record:${userId}`);

    setMedRecord(response.data);
    setUserId(response.headers);
  }

  useEffect(() => {
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
        // eslint-disable-next-line prettier/prettier
        keyExtractor={medRecord => String(medRecord._id)}
        renderItem={({ item: medRecord }) => (
          <>
            <DateArea>
              <DateText>31 de Março de 2020, Terça-feira</DateText>
            </DateArea>
            <Card>
              <TopCard>
                <DoctorImage source={medRecord.image} />
                <AreaDoctorInfo>
                  <DoctorName>{medRecord.medical}</DoctorName>
                  <DoctorSpecialty>{medRecord.especiality}</DoctorSpecialty>
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
                <InfoProblem>
                  <Icon
                    name="check"
                    color="#A51C60"
                    size={18}
                    style={{ marginRight: wp('1.88%') }}
                  />
                  <BodyText>{medRecord.problems[0]}</BodyText>
                </InfoProblem>
                <InfoProblem>
                  <Icon
                    name="check"
                    color="#A51C60"
                    size={18}
                    style={{ marginRight: wp('1.88%') }}
                  />
                  <BodyText>{medRecord.problems[1]}</BodyText>
                </InfoProblem>

                <BodyTitle>Você faz amamentação exclusiva?</BodyTitle>
                <BodyText>{medRecord.questions[0]}</BodyText>

                <BodyTitle>A vacinação do bebê está em dia? </BodyTitle>
                <BodyText>{medRecord.questions[1]}</BodyText>

                <BodyTitle>Por que?</BodyTitle>
                <BodyText>{medRecord.questions[2]}</BodyText>

                <BodyTitle>Descrição resumida da interação</BodyTitle>
                <BodyText>{medRecord.questions[3]}</BodyText>

                <BodyTitle>Fechamento</BodyTitle>
                <BodyText>{medRecord.conclusion}</BodyText>

                <BodyTitle>Classificação de risco</BodyTitle>
                <InfoRisk>
                  <ColorRisk>{medRecord.level}</ColorRisk>
                  <BodyText>{medRecord.risk}</BodyText>
                </InfoRisk>
              </BodyCard>
              <Separator />
              <BottomCard>
                <CallType>{medRecord.attendance}</CallType>
                <Duration>Das {medRecord.duration}</Duration>
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
