import React, { useState, useEffect, useMemo } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
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

export default function Conversas(props) {
  const id = props.navigation.getParam('id');

  const [timeline, setTimeLine] = useState([]);

  const navigateBack = () => {
    props.navigation.goBack();
  };

  useEffect(() => {
    async function loadTimeLine() {
      const response = await api.get(`/timeline/${id}`);

      setTimeLine(response.data);
    }

    loadTimeLine();
  }, []);

  const dateFormatted = useMemo(
    () =>
      format(new Date(), 'd/MM/yyyy', {
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
        data={timeline}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <>
            <DateView>
              <DateArea>
                <DateText>{dateFormatted}</DateText>
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
                  <TimeLineTitle>{item.action[0]}</TimeLineTitle>
                  <HourText>{item.hour[0]}</HourText>
                </DescArea>
              </TimeLineCard>

              <ResultCard>
                <LineArea>
                  <Line />
                </LineArea>
                <ReportArea>
                  <Report>{item.info[0]}</Report>
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
                  <TimeLineTitle>{item.action[1]}</TimeLineTitle>
                  <HourText>{item.hour[1]}</HourText>
                </DescArea>
              </TimeLineCard>

              <ResultCard>
                <LineArea>
                  <Line />
                </LineArea>
                <ReportArea>
                  <Report>{item.info[1]}</Report>
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
                  <TimeLineTitle>{item.action[2]}</TimeLineTitle>
                  <HourText>{item.hour[2]}</HourText>
                </DescArea>
              </TimeLineCard>

              <ResultCard>
                <ReportArea>
                  <LastReport>{item.info[2]}</LastReport>
                </ReportArea>
              </ResultCard>
            </Card>
          </>
        )}
      />
    </Container>
  );
}
