import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Alert } from 'react-native';
import logo from '~/assets/logo.png';

import api from '~/services/api';

import Button from '~/components/Button';
import {
  Container,
  BackgroundTitle,
  Logo,
  Title,
  PersonArea,
  PersonImage,
  AreaInfo,
  PersonName,
  PersonAge,
  PeopleBar,
  CircleArea,
  IconArea,
  BorderCircle,
  PeopleCircle,
  ButtonsArea,
} from './styles';

export default function Pessoas(props) {
  const goProgramsProfile = () => {
    props.navigation.navigate('ProfilePrograms');
  };

  const goMedicalRecord = () => {
    props.navigation.navigate('MedicalRecord');
  };

  const goTimeLime = () => {
    props.navigation.navigate('TimeLine');
  };

  return (
    <Container>
      <BackgroundTitle style={{ height: hp('9.86%') }}>
        <Logo source={logo} />
        <Title>Pessoas</Title>
      </BackgroundTitle>
      <PersonArea>
        <PersonImage source={require('~/assets/vini.jpg')} />
        <AreaInfo>
          <PersonName>Vinicius Fernandes</PersonName>
          <PersonAge>30 anos</PersonAge>
        </AreaInfo>
      </PersonArea>
      <ButtonsArea>
        <Button onPress={goProgramsProfile}>Programas</Button>
        <Button onPress={goMedicalRecord}>Prontuário</Button>
        <Button onPress={goTimeLime}>Linha do tempo</Button>
      </ButtonsArea>
      <PeopleBar>
        <CircleArea>
          <BorderCircle>
            <PeopleCircle
              onPress={() => {}}
              style={{ backgroundColor: '#f00' }}
              source={require('~/assets/vini.jpg')}
            />
          </BorderCircle>

          <PeopleCircle
            onPress={() => {}}
            style={{ backgroundColor: '#f00' }}
            source={require('~/assets/ali.jpg')}
          />

          <PeopleCircle
            onPress={() => {}}
            style={{ backgroundColor: '#f00' }}
            source={require('~/assets/le.jpg')}
          />
        </CircleArea>
        <IconArea>
          <Icon
            name="add-circle"
            size={20}
            color="#625C70"
            style={{ marginRight: wp('5.63%'), alignItems: 'center' }}
            onPress={() =>
              Alert.alert(
                'Atenção',
                'Por favor, crie a página para adicionar dependentes'
              )
            }
          />
        </IconArea>
      </PeopleBar>
    </Container>
  );
}
