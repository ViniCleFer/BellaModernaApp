import React, { useState, useMemo, useEffect } from 'react';
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
  TextPassword,
  NavButtonAddress,
  AreaAddress,
  TextProfileAddress,
} from './styles';

export default function PersonalData(props) {
  const profile = useSelector((state) => state.user.profile);

  const dateFormatted = useMemo(
    () =>
      format(new Date(profile.birth), 'dd/MM/yyy', {
        locale: pt,
      }),
    []
  );

  const EditName = props.navigation.getParam('value');
  const EditPhone = props.navigation.getParam('phone');
  const EditCpf = props.navigation.getParam('cpf');
  const EditBirth = props.navigation.getParam('birth');
  const EditZipcode = props.navigation.getParam('zipcode');
  const EditStreet = props.navigation.getParam('street');
  const EditAddressNumber = props.navigation.getParam('addressNumber');
  const EditAddressComplement = props.navigation.getParam('addressComplement');
  const EditNeighborhood = props.navigation.getParam('neighborhood');
  const EditUf = props.navigation.getParam('uf');
  const EditCity = props.navigation.getParam('city');
  const EditEmail = props.navigation.getParam('email');
  const EditPassword = props.navigation.getParam('confirmPassword');

  const navigateBack = () => {
    props.navigation.navigate('Account');
  };

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [birth, setBirth] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [street, setStreet] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [addressComplement, setAddressComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (name === '') {
      setName(profile.name);
    } else {
      setName(EditName);
    }
  }, []);

  useEffect(() => {
    if (phone === '') {
      setPhone('(11) 97745-6642');
    } else {
      setPhone(EditPhone);
    }
  }, []);

  useEffect(() => {
    if (cpf === '') {
      setCpf('396.483.948-30');
    } else {
      setCpf(EditCpf);
    }
  }, []);

  useEffect(() => {
    if (birth === '') {
      setBirth(dateFormatted);
    } else {
      setBirth(EditBirth);
    }
  }, []);

  useEffect(() => {
    if (zipcode === '') {
      setZipcode('13324-220');
    } else {
      setZipcode(EditZipcode);
    }
  }, []);

  useEffect(() => {
    if (street === '') {
      setStreet('Rua Estados Unidos');
    } else {
      setStreet(EditStreet);
    }
  }, []);

  useEffect(() => {
    if (addressNumber === '') {
      setAddressNumber('195');
    } else {
      setAddressNumber(EditAddressNumber);
    }
  }, []);

  useEffect(() => {
    if (addressComplement === '') {
      setAddressComplement('Bloco 4, Apto 14');
    } else {
      setAddressComplement(EditAddressComplement);
    }
  }, []);

  useEffect(() => {
    if (neighborhood === '') {
      setNeighborhood('Guaraú');
    } else {
      setNeighborhood(EditNeighborhood);
    }
  }, []);

  useEffect(() => {
    if (uf === '') {
      setUf('São Paulo');
    } else {
      setUf(EditUf);
    }
  }, []);

  useEffect(() => {
    if (city === '') {
      setCity('Salto');
    } else {
      setCity(EditCity);
    }
  }, []);

  useEffect(() => {
    if (email === '') {
      setEmail(profile.email);
    } else {
      setEmail(EditEmail);
    }
  }, []);

  useEffect(() => {
    if (password === '') {
      setPassword('123456');
    } else {
      setPassword(EditPassword);
    }
  }, []);

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
              <TextProfile>{name}</TextProfile>
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
              <TextProfile>{phone}</TextProfile>
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
              <TextProfile>{cpf}</TextProfile>
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
              <TextProfile>{birth}</TextProfile>
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
                  {street}, {addressNumber}, {addressComplement}, {neighborhood}
                  , {city} - {uf}, {zipcode}
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
              <TextProfile>{email}</TextProfile>
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
              <TextPassword secureTextEntry value={password} />
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
