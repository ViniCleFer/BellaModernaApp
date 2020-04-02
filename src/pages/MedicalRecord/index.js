import React from 'react';
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
  ColorRiskGreen,
  BottomCard,
  CallType,
  Duration,
} from './styles';

export default function MedicalRecord() {
  return (
    <Container>
      <TitleArea>
        <Icon
          name="arrow-back"
          size={(hp('2.82%'), wp('5%'))}
          color="#625C70"
          style={{ marginLeft: wp('7.5%') }}
        />
        <Title>Prontuários</Title>
      </TitleArea>
      <Input icon="search" placeholder="Pesquisar histórico" />

      <AreaInfo
        showsVerticalScrollIndicator={false}
        data={[1]}
        keyExtractor={(item) => String(item)}
        renderItem={() => (
          <>
            <DateArea>
              <DateText>31 de Março de 2020, Terça-feira</DateText>
            </DateArea>
            <Card>
              <TopCard>
                <DoctorImage source={require('~/assets/vini.jpg')} />
                <AreaDoctorInfo>
                  <DoctorName>Vinicius Fernandes</DoctorName>
                  <DoctorSpecialty>Clínico da Parada</DoctorSpecialty>
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
                  <BodyText>
                    Excesso de sono e baixo interesse pela amamentação
                  </BodyText>
                </InfoProblem>
                <InfoProblem>
                  <Icon
                    name="check"
                    color="#A51C60"
                    size={18}
                    style={{ marginRight: wp('1.88%') }}
                  />
                  <BodyText>
                    Dúvidas sobre livre demanda / Horário das mamadas
                  </BodyText>
                </InfoProblem>

                <BodyTitle>Você faz amamentação exclusiva?</BodyTitle>
                <BodyText>Não</BodyText>

                <BodyTitle>A vacinação do bebê está em dia? </BodyTitle>
                <BodyText>Não</BodyText>

                <BodyTitle>Por que?</BodyTitle>
                <BodyText>
                  Porque não estou trabalhando muito e não estou conseguindo
                  separar tempo para ir ao hospital
                </BodyText>

                <BodyTitle>Descrição resumida da interação</BodyTitle>
                <BodyText>
                  A paciente esta com dor de cabeça durante as noites e não
                  consegue dormir, a falta de sono deixa mais cansada e baxia a
                  imunidade
                </BodyText>

                <BodyTitle>Fechamento</BodyTitle>
                <BodyText>Internação concluída</BodyText>

                <BodyTitle>Classificação de risco</BodyTitle>
                <InfoRisk>
                  <ColorRiskGreen />
                  <BodyText>Verde</BodyText>
                </InfoRisk>
              </BodyCard>
              <Separator />
              <BottomCard>
                <CallType>Chamada de vídeo</CallType>
                <Duration>Das 20:10 às 20:40</Duration>
              </BottomCard>
            </Card>
          </>
        )}
      />
    </Container>
  );
}
