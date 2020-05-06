import React, { useState, useRef } from 'react';
import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInputMask } from 'react-native-masked-text';

import {
  Container,
  TitleArea,
  Title,
  AreaInfo,
  SubTitle,
  InputArea,
  InputAreaContainer,
  AreaSubmitButton,
  SubmitButton,
  TextSubmitButton,
} from './styles';

export default function Address(props) {
  const navigateBack = () => {
    props.navigation.navigate('PersonalData');
  };

  const streetRef = useRef();
  const addressNumberRef = useRef();
  const addressComplementRef = useRef();
  const neighborhoodRef = useRef();
  const ufRef = useRef();
  const cityRef = useRef();

  const [zipcode, setZipcode] = useState('');
  const [street, setStreet] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [addressComplement, setAddressComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  function handleAddress(
    zipcode,
    street,
    addressNumber,
    addressComplement,
    neighborhood,
    uf,
    city
  ) {
    props.navigation.navigate('PersonalData', {
      zipcode,
      street,
      addressNumber,
      addressComplement,
      neighborhood,
      uf,
      city,
    });
  }

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
        <Title>Endereço</Title>
      </TitleArea>

      <AreaInfo>
        <SubTitle>CEP</SubTitle>

        <TextInputMask
          // eslint-disable-next-line react/jsx-curly-brace-presence
          type={'zip-code'}
          style={styles.containerInput}
          placeholder="00000-000"
          value={zipcode}
          onChangeText={setZipcode}
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={() => streetRef.current.focus()}
        />

        <InputArea
          placeholder="Digite seu endereço"
          ref={streetRef}
          value={street}
          onChangeText={setStreet}
          returnKeyType="next"
          onSubmitEditing={() => addressNumberRef.current.focus()}
        />

        <InputAreaContainer>
          <InputArea
            placeholder="Digite seu nº"
            ref={addressNumberRef}
            keyboardType="numeric"
            value={addressNumber}
            onChangeText={setAddressNumber}
            returnKeyType="next"
            onSubmitEditing={() => addressComplementRef.current.focus()}
          />

          <InputArea
            placeholder="Apto 14, Torre 4"
            ref={addressComplementRef}
            value={addressComplement}
            onChangeText={setAddressComplement}
            returnKeyType="next"
            onSubmitEditing={() => neighborhoodRef.current.focus()}
          />
        </InputAreaContainer>

        <InputArea
          placeholder="Digite seu bairro"
          ref={neighborhoodRef}
          value={neighborhood}
          onChangeText={setNeighborhood}
          returnKeyType="next"
          onSubmitEditing={() => ufRef.current.focus()}
        />

        <InputArea
          placeholder="Digite seu Estado"
          ref={ufRef}
          value={uf}
          onChangeText={setUf}
          returnKeyType="next"
          onSubmitEditing={() => cityRef.current.focus()}
        />
        <InputArea
          placeholder="Digite sua cidade"
          ref={cityRef}
          value={city}
          onChangeText={setCity}
          returnKeyType="send"
          onSubmitEditing={() =>
            handleAddress(
              zipcode,
              street,
              addressNumber,
              addressComplement,
              neighborhood,
              uf,
              city
            )
          }
        />

        <AreaSubmitButton>
          <SubmitButton
            onPress={() =>
              handleAddress(
                zipcode,
                street,
                addressNumber,
                addressComplement,
                neighborhood,
                uf,
                city
              )
            }
            activeOpacity={0.7}
            style={{
              borderRadius: 50,
              borderColor: 'transparent',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: hp('0.35%') },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 5,
            }}
          >
            <TextSubmitButton>Salvar</TextSubmitButton>
          </SubmitButton>
        </AreaSubmitButton>
      </AreaInfo>
    </Container>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    fontSize: hp('2.82%'),
    height: hp('6.34%'),
    lineHeight: hp('3.87%'),
    alignSelf: 'stretch',
    color: '#312e38',
    fontWeight: 'normal',
    paddingLeft: wp('3.75%'),
    paddingTop: wp('1.75%'),
    paddingBottom: wp('1.75%'),
    marginTop: hp('0.53%'),
    marginBottom: hp('2.82%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#958fa3',
    borderRadius: 4,
  },
});
