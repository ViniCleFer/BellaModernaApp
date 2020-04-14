import React, { useState, useEffect, useMemo } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
// import { View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Input from '~/components/Input';
import {
  Container,
  TitleArea,
  Title,
  DateView,
  DateArea,
  DateText,
  AreaInfo,
  Card,
  IconArea,
  DescArea,
  HourText,
  TimeLineCard,
  TimeLineTitle,
  ResultCard,
  LineArea,
  Line,
  ReportArea,
  Report,
  LastReport,
} from './styles';

export default function TimeLine(props) {
  const navigateBack = () => {
    props.navigation.goBack();
  };

  const dateFormatted = useMemo(
    () =>
      format(new Date(), "d 'de' MMMM 'de' yyyy, iiii", {
        locale: pt,
      }),
    []
  );

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
        <Title>Linha do Tempo</Title>
      </TitleArea>
      <Input icon="search" placeholder="Pesquisar histórico" />

      <AreaInfo
        showsVerticalScrollIndicator={false}
        data={[1, 2]}
        keyExtractor={(item) => String(item)}
        renderItem={() => (
          <>
            <DateView>
              <DateArea>
                <DateText>Hoje</DateText>
              </DateArea>
            </DateView>
            <Card>
              <TimeLineCard>
                <IconArea>
                  <Icon
                    name="assignment-turned-in"
                    size={(hp('2.82%'), wp('5%'))}
                    color="#A51C60"
                  />
                </IconArea>
                <DescArea>
                  <TimeLineTitle>Atendimento com nutricionista</TimeLineTitle>
                  <HourText>19:21</HourText>
                </DescArea>
              </TimeLineCard>

              <ResultCard>
                <LineArea>
                  <Line />
                </LineArea>
                <ReportArea>
                  <Report>Paciente com dúvida em relação a alimentação</Report>
                </ReportArea>
              </ResultCard>

              <TimeLineCard>
                <IconArea>
                  <Icon
                    name="edit"
                    size={(hp('2.82%'), wp('5%'))}
                    color="#A51C60"
                  />
                </IconArea>
                <DescArea>
                  <TimeLineTitle>Preenchimento de questionário</TimeLineTitle>
                  <HourText>20:30</HourText>
                </DescArea>
              </TimeLineCard>

              <ResultCard>
                <LineArea>
                  <Line />
                </LineArea>
                <ReportArea>
                  <Report>Questionário foi preenchido</Report>
                </ReportArea>
              </ResultCard>

              <TimeLineCard>
                <IconArea>
                  <Icon
                    name="assignment-turned-in"
                    size={(hp('2.82%'), wp('5%'))}
                    color="#A51C60"
                  />
                </IconArea>
                <DescArea>
                  <TimeLineTitle>Atendimento com pediatra</TimeLineTitle>
                  <HourText>20:30</HourText>
                </DescArea>
              </TimeLineCard>

              <ResultCard>
                <ReportArea>
                  <LastReport>Atendimento de rotina</LastReport>
                </ReportArea>
              </ResultCard>
            </Card>
          </>
        )}
      />
    </Container>
  );
}
