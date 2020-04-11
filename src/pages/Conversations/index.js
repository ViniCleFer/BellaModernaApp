import React, { useState, useEffect } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

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

export default function Conversas(props) {
  const profile = useSelector((state) => state.user.profile);

  const [dependents, setDependents] = useState([]);

  useEffect(() => {
    async function loadDependents() {
      const response = await api.get(`/dependent/${profile.id}`);

      setDependents(response.data);
    }

    loadDependents();
  }, []);

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
          <PersonName>{profile.name}</PersonName>
          <PersonAge>{profile.birth}</PersonAge>
        </AreaInfo>
      </PersonArea>
      <ButtonsArea>
        <Button onPress={goProgramsProfile}>Programas</Button>
        <Button onPress={goMedicalRecord}>Prontuário</Button>
        <Button onPress={goTimeLime}>Linha do tempo</Button>
      </ButtonsArea>
      <PeopleBar>
        <CircleArea
          data={dependents}
          horizontal
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <>
              <BorderCircle>
                <PeopleCircle onPress={() => {}} source={{ uri: item.image }} />
              </BorderCircle>
            </>
          )}
        />
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
