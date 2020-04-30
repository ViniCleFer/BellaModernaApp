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

export default function Pessoas(props) {
  const profile = useSelector((state) => state.user.profile);

  const [dependentsProfile, setDependentsProfile] = useState([]);

  useEffect(() => {
    async function loadDependents() {
      const response = await api.get(`/dependent/${profile.id}`);

      setDependentsProfile(response.data);
    }

    loadDependents();
  }, []);

  const { id } = profile;

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
      formatDistanceToNowStrict(new Date(profile.birth), {
        locale: pt,
        addSuffix: false,
      }),
    [profile.birth]
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
            uri: `http://192.168.0.13:3333/files/${profile.image_url}`,
          }}
        />
        <AreaInfo>
          <PersonName>{profile.name}</PersonName>
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
          <BorderCircle active>
            <PeopleCircle
              onPress={() =>
                props.navigation.navigate('StackPersons', { profile })
              }
              source={{
                uri: `http://192.168.0.13:3333/files/${profile.image_url}`,
              }}
            />
          </BorderCircle>
        </ProfileArea>
        <CircleArea
          data={dependentsProfile}
          horizontal
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <>
              <DependentArea
                activeOpacity={0.6}
                onPress={() =>
                  props.navigation.navigate('Dependents', { item })
                }
              >
                <BorderCircle>
                  <PeopleCircle
                    source={{
                      uri: `http://192.168.0.13:3333/files/${item.image_url}`,
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
