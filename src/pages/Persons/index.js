import React from 'react';
import { Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import StackNav from '~/StackNav';

import Button from '~/components/Button';
import {
  Container,
  BackgroundTitle,
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

export default function Pessoas() {
  return (
    <Container>
      <BackgroundTitle style={{ height: hp('9.86%') }}>
        <Title>Pessoas</Title>
        <Image source={require('~/assets/logo.svg')} />
      </BackgroundTitle>
      <PersonArea>
        <PersonImage source={require('~/assets/vini.jpg')} />
        <AreaInfo>
          <PersonName>Vinicius Fernandes</PersonName>
          <PersonAge>30 anos</PersonAge>
        </AreaInfo>
      </PersonArea>
      <ButtonsArea>
        <Button onPress={() => {}}>Programas</Button>
        <Button onPress={() => {}}>Prontuário</Button>
        <Button onPress={() => {}}>Linha do tempo</Button>
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
          />
        </IconArea>
      </PeopleBar>
    </Container>
  );
}
