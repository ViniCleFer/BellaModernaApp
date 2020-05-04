import React, { useMemo } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import {
  Container,
  TitleArea,
  Title,
  ProfileArea,
  ProfilePhoto,
  ProfileIconArea,
  LinkPhoto,
  LinkTextPhoto,
  SubtitleArea,
  Subtitle,
  AreaInfo,
  NavButton,
  ButtonNavArea,
  ButtonArea,
  IconArea,
  TextNavButton,
  TextProfile,
  NavButtonAddress,
  AreaAddress,
  TextProfileAddress,
} from './styles';

export default function PersonalData(props) {
  const profile = useSelector((state) => state.user.profile);

  const navigateBack = () => {
    props.navigation.navigate('Account');
  };

  const dateFormatted = useMemo(
    () =>
      format(new Date(profile.birth), 'dd/MM/yyyy', {
        locale: pt,
      }),
    [profile.birth]
  );

  return (
    <Container showsVerticalScrollIndicator={false}>
      <TitleArea>
        <Icon
          name="arrow-back"
          size={(hp('2.82%'), wp('5%'))}
          color="#625C70"
          style={{ marginLeft: wp('7.5%') }}
          onPress={navigateBack}
        />
        <Title>Dados Pessoais</Title>
      </TitleArea>
      <ProfileArea>
        <ProfilePhoto
          source={{
            uri: `http://192.168.0.13:3333/files/${profile.image_url}`,
          }}
        />
        <ProfileIconArea>
          <Icon
            name="camera-alt"
            size={12}
            color="#625C70"
            style={{ position: 'absolute' }}
            onPress={navigateBack}
          />
        </ProfileIconArea>
        <LinkPhoto underlayColor="#fff" onPress={() => {}}>
          <LinkTextPhoto>Alterar foto</LinkTextPhoto>
        </LinkPhoto>
      </ProfileArea>
      <SubtitleArea>
        <Subtitle>Dados pessoais</Subtitle>
      </SubtitleArea>
      <AreaInfo>
        <NavButton
          underlayColor="#f2f1f3"
          onPress={() => props.navigation.navigate('Name')}
        >
          <ButtonNavArea>
            <ButtonArea>
              <TextNavButton>Nome</TextNavButton>
              <TextProfile>{profile.name}</TextProfile>
            </ButtonArea>
            <IconArea>
              <Icon
                name="keyboard-arrow-right"
                size={20}
                color="#958FA3"
                style={{ marginRight: hp('3.35%') }}
              />
            </IconArea>
          </ButtonNavArea>
        </NavButton>
        <NavButton
          underlayColor="#f2f1f3"
          onPress={() => props.navigation.navigate('Phone')}
        >
          <ButtonNavArea>
            <ButtonArea>
              <TextNavButton>Telefone</TextNavButton>
              <TextProfile>(11) 97745-6642</TextProfile>
            </ButtonArea>
            <IconArea>
              <Icon
                name="keyboard-arrow-right"
                size={20}
                color="#958FA3"
                style={{ marginRight: hp('3.35%') }}
              />
            </IconArea>
          </ButtonNavArea>
        </NavButton>
        <NavButton
          underlayColor="#f2f1f3"
          onPress={() => props.navigation.navigate('SocialRecord')}
        >
          <ButtonNavArea>
            <ButtonArea>
              <TextNavButton>CPF</TextNavButton>
              <TextProfile>386.483.948-30</TextProfile>
            </ButtonArea>
            <IconArea>
              <Icon
                name="keyboard-arrow-right"
                size={20}
                color="#958FA3"
                style={{ marginRight: hp('3.35%') }}
              />
            </IconArea>
          </ButtonNavArea>
        </NavButton>
        <NavButton
          underlayColor="#f2f1f3"
          onPress={() => props.navigation.navigate('BirthDate')}
        >
          <ButtonNavArea>
            <ButtonArea>
              <TextNavButton>Data de Nascimento</TextNavButton>
              <TextProfile>{dateFormatted}</TextProfile>
            </ButtonArea>
            <IconArea>
              <Icon
                name="keyboard-arrow-right"
                size={20}
                color="#958FA3"
                style={{ marginRight: hp('3.35%') }}
              />
            </IconArea>
          </ButtonNavArea>
        </NavButton>
        <NavButtonAddress
          underlayColor="#f2f1f3"
          onPress={() => props.navigation.navigate('Address')}
        >
          <ButtonNavArea>
            <ButtonArea>
              <TextNavButton>Endereço</TextNavButton>
              <AreaAddress>
                <TextProfileAddress>
                  Av. Comandandante Videlmo Munhoz, 75 Anhangabaú, Jundiaí - SP,
                  13208-050
                </TextProfileAddress>
              </AreaAddress>
            </ButtonArea>
            <IconArea>
              <Icon
                name="keyboard-arrow-right"
                size={20}
                color="#958FA3"
                style={{ marginRight: hp('3.35%') }}
              />
            </IconArea>
          </ButtonNavArea>
        </NavButtonAddress>
      </AreaInfo>
      <SubtitleArea>
        <Subtitle>Login</Subtitle>
      </SubtitleArea>
      <AreaInfo>
        <NavButton
          underlayColor="#f2f1f3"
          onPress={() => props.navigation.navigate('Email')}
        >
          <ButtonNavArea>
            <ButtonArea>
              <TextNavButton>E-mail</TextNavButton>
              <TextProfile>{profile.email}</TextProfile>
            </ButtonArea>
            <IconArea>
              <Icon
                name="keyboard-arrow-right"
                size={20}
                color="#958FA3"
                style={{ marginRight: hp('3.35%') }}
              />
            </IconArea>
          </ButtonNavArea>
        </NavButton>
        <NavButton
          underlayColor="#f2f1f3"
          onPress={() => props.navigation.navigate('Password')}
        >
          <ButtonNavArea>
            <ButtonArea>
              <TextNavButton>Alterar Senha</TextNavButton>
              <TextProfile>*************</TextProfile>
            </ButtonArea>
            <IconArea>
              <Icon
                name="keyboard-arrow-right"
                size={20}
                color="#958FA3"
                style={{ marginRight: hp('3.35%') }}
              />
            </IconArea>
          </ButtonNavArea>
        </NavButton>
      </AreaInfo>
    </Container>
  );
}
