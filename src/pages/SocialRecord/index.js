import React, { useState } from 'react';
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
  AreaSubmitButton,
  SubmitButton,
  TextSubmitButton,
} from './styles';

export default function SocialRecord(props) {
  const navigateBack = () => {
    props.navigation.navigate('PersonalData');
  };

  const [cpf, setCpf] = useState('');

  function handleCPF(cpf) {
    props.navigation.navigate('PersonalData', { cpf });
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
        <Title>CPF</Title>
      </TitleArea>

      <AreaInfo>
        <SubTitle>CPF</SubTitle>

        <TextInputMask
          type="cpf"
          style={{
            fontSize: hp('2.82%'),
            height: hp('6.34%'),
            alignSelf: 'stretch',
            color: '#625c70',
            fontWeight: 'normal',
            paddingLeft: wp('3.75%'),
            paddingTop: wp('1.75%'),
            paddingBottom: wp('1.75%'),
            marginTop: hp('0.53%'),
            alignItems: 'center',
            justifyContent: 'center',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#958fa3',
            borderRadius: 4,
          }}
          placeholder="000.000.000-00"
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
        />
      </AreaInfo>
      <AreaSubmitButton>
        <SubmitButton
          onPress={() => handleCPF(cpf)}
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
    </Container>
  );
}
