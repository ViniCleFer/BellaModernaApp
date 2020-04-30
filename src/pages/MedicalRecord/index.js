import React, { useState, useEffect, useMemo } from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

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
  const id = props.navigation.getParam('id');

  const [medRecords, setMedRecord] = useState([]);
  const [activeIcon, setActiveIcon] = useState(false);

  const navigateBack = () => {
    props.navigation.goBack();
  };

  useEffect(() => {
    async function loadMedRecords() {
      const response = await api.get(`/medical_record/${id}`);

      setMedRecord(response.data);
    }

    loadMedRecords();
  }, [id]);

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
              <DateText>{dateFormatted}</DateText>
            </DateArea>
            <Card>
              <Collapse
                onToggle={(activeIcon) => setActiveIcon(activeIcon === true)}
              >
                <CollapseHeader>
                  <TopCard>
                    <DoctorImage
                      source={{
                        uri: `http://192.168.0.13:3333/files/${item.image_url}`,
                      }}
                    />
                    <AreaDoctorInfo>
                      <DoctorName>{item.medical}</DoctorName>
                      <DoctorSpecialty>{item.especiality}</DoctorSpecialty>
                    </AreaDoctorInfo>

                    {activeIcon ? (
                      <IconArea>
                        <Icon
                          name="expand-less"
                          size={(wp('3.75%'), hp('2.32%'))}
                          color="#625C70"
                          style={{
                            marginRight: wp('6.88%'),
                            alignItems: 'center',
                          }}
                        />
                      </IconArea>
                    ) : (
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
                    )}
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
                  </BodyCard>
                </CollapseHeader>
                <CollapseBody>
                  <BodyCard>
                    <BodyTitle>Você faz amamentação exclusiva?</BodyTitle>
                    <BodyText>{item.questions[0]}</BodyText>

                    <BodyTitle>A vacinação do bebê está em dia? </BodyTitle>
                    <BodyText>{item.questions[1]}</BodyText>

                    <BodyTitle>Por que?</BodyTitle>
                    <BodyText>{item.questions[2]}</BodyText>

                    <BodyTitle>Descrição resumida da interação</BodyTitle>
                    <BodyText>{item.questions[3]}</BodyText>
                  </BodyCard>
                </CollapseBody>
              </Collapse>

              <BodyCard>
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
