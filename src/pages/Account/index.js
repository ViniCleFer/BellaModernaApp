import React, { useState, useEffect } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

import {
  Container,
  TitleArea,
  Title,
  PersonArea,
  PersonImage,
  AreaInfo,
  PersonName,
  PersonEmail,
  PerfilArea,
  PersonPerfil,
  PersonAreaInfo,
  NavButton,
  AreaButton,
  TextNavButton,
} from './styles';

export default function Account(props) {
  const profile = useSelector((state) => state.user.profile);
  const navigateBack = () => {
    props.navigation.goBack();
  };

  return (
    <Container>
      <TitleArea>
        <Icon
          name="arrow-left"
          size={(hp('2.82%'), wp('5%'))}
          color="#625C70"
          style={{ marginLeft: wp('7.5%') }}
          onPress={navigateBack}
        />
        <Title>Mais Opções</Title>
      </TitleArea>
      <PersonArea>
        <PersonImage
          style={{ heigh: 50, width: 50 }}
          source={{
            uri: `http://192.168.0.13:3333/files/${profile.image_url}`,
          }}
        />
        <PersonAreaInfo>
          <PersonName>{profile.name}</PersonName>
          <PersonEmail>vinicius@gmail.com</PersonEmail>
          <PerfilArea
            underlayColor="#f2f1f3"
            onPress={() => props.navigation.navigate('StackAccount')}
          >
            <PersonPerfil>Editar perfil</PersonPerfil>
          </PerfilArea>
        </PersonAreaInfo>
      </PersonArea>
      <AreaInfo>
        <NavButton underlayColor="#f2f1f3" onPress={() => {}}>
          <AreaButton>
            <Icon
              name="clipboard-outline"
              size={(hp('3.87%'), wp('6.88%'))}
              color="#625C70"
              style={{ marginLeft: wp('5.94%') }}
              onPress={navigateBack}
            />
            <TextNavButton>Questionários</TextNavButton>
          </AreaButton>
        </NavButton>
        <NavButton underlayColor="#f2f1f3" onPress={() => {}}>
          <AreaButton>
            <Icon
              name="clipboard-account"
              size={(hp('3.87%'), wp('6.88%'))}
              color="#625C70"
              style={{ marginLeft: wp('5.94%') }}
              onPress={navigateBack}
            />
            <TextNavButton>Programas</TextNavButton>
          </AreaButton>
        </NavButton>
        <NavButton underlayColor="#f2f1f3" onPress={() => {}}>
          <AreaButton>
            <Icon
              name="account-circle"
              size={(hp('3.87%'), wp('6.88%'))}
              color="#625C70"
              style={{ marginLeft: wp('5.94%') }}
              onPress={navigateBack}
            />
            <TextNavButton>Conta</TextNavButton>
          </AreaButton>
        </NavButton>
        <NavButton underlayColor="#f2f1f3" onPress={() => {}}>
          <AreaButton>
            <Icon
              name="information-outline"
              size={(hp('3.87%'), wp('6.88%'))}
              color="#625C70"
              style={{ marginLeft: wp('5.94%') }}
              onPress={navigateBack}
            />
            <TextNavButton>Informações Legais</TextNavButton>
          </AreaButton>
        </NavButton>
        <NavButton underlayColor="#f2f1f3" onPress={() => {}}>
          <AreaButton>
            <Icon
              name="logout-variant"
              size={(hp('3.87%'), wp('6.88%'))}
              color="#625C70"
              style={{ marginLeft: wp('5.94%') }}
              onPress={navigateBack}
            />
            <TextNavButton>Sair</TextNavButton>
          </AreaButton>
        </NavButton>
      </AreaInfo>
    </Container>
  );
}
