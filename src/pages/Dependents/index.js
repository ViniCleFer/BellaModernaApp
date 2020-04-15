import React, { useState, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import { formatDistanceToNowStrict } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

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
  ProfileArea,
  DependentArea,
  CircleArea,
  IconArea,
  BorderCircle,
  PeopleCircle,
  ButtonsArea,
} from './styles';

export default function Dependents(props) {
  const profile = useSelector((state) => state.user.profile);
  const dependent = props.navigation.getParam('item');

  const { id } = dependent;

  const [dependents, setDependents] = useState([]);

  useEffect(() => {
    async function loadDependents() {
      const response = await api.get(`/dependent/${profile.id}`);

      setDependents(response.data);
    }

    loadDependents();
  }, [setDependents]);

  const goProgramsProfile = () => {
    props.navigation.navigate('ProfilePrograms', { id });
  };

  const goMedicalRecord = () => {
    props.navigation.navigate('MedicalRecord', { id });
  };

  const goTimeLime = () => {
    props.navigation.navigate('TimeLine', { id });
  };

  const dateFormatted = useMemo(
    () =>
      formatDistanceToNowStrict(new Date(dependent.birth), {
        locale: pt,
        addSuffix: false,
      }),
    [dependent.birth]
  );

  return (
    <Container>
      <BackgroundTitle style={{ height: hp('9.86%') }}>
        <Logo source={logo} />
        <Title>Pessoas</Title>
      </BackgroundTitle>
      <PersonArea>
        <PersonImage
          style={{ heigh: 50, width: 50 }}
          source={{
            uri: `http://localhost:3333/files/${dependent.image_url}`,
          }}
        />
        <AreaInfo>
          <PersonName>{dependent.name}</PersonName>
          <PersonAge>{dateFormatted}</PersonAge>
        </AreaInfo>
      </PersonArea>
      <ButtonsArea>
        <Button onPress={goProgramsProfile}>Programas</Button>
        <Button onPress={goMedicalRecord}>Prontuário</Button>
        <Button onPress={goTimeLime}>Linha do tempo</Button>
      </ButtonsArea>
      <PeopleBar>
        <ProfileArea activeOpacity={0.6}>
          <BorderCircle>
            <PeopleCircle
              onPress={() => props.navigation.navigate('StackPersons')}
              source={{
                uri: `http://localhost:3333/files/${profile.image_url}`,
              }}
            />
          </BorderCircle>
        </ProfileArea>
        <CircleArea
          data={dependents}
          horizontal
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <>
              <DependentArea activeOpacity={0.6}>
                <BorderCircle active={item.id === dependent.id}>
                  <PeopleCircle
                    onPress={() =>
                      props.navigation.navigate('Dependents', { item })
                    }
                    source={{
                      uri: `http://localhost:3333/files/${item.image_url}`,
                    }}
                  />
                </BorderCircle>
              </DependentArea>
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
