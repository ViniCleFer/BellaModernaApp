import React, { useState, useEffect } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {
  Container,
  TitleArea,
  Title,
  AreaInfo,
  NavButton,
  TextNavButton,
  AreaSubmitButton,
  SubmitButton,
  TextSubmitButton,
} from './styles';

export default function ProfilePrograms(props) {
  const id = props.navigation.getParam('id');

  const [programSubs, setProgramSubs] = useState([]);

  useEffect(() => {
    async function loadProgramSubs() {
      const response = await api.get(`/program/${id}`);

      setProgramSubs(response.data);
    }

    loadProgramSubs();
  }, []);

  const goToPrograms = () => {
    props.navigation.navigate('Programs', { id });
  };

  const navigateBack = () => {
    props.navigation.goBack();
  };

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
        <Title>Programas cadastrados</Title>
      </TitleArea>

      <AreaInfo
        showsVerticalScrollIndicator={false}
        data={programSubs}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <>
            <NavButton activeOpacity={0.8} onPress={() => {}}>
              <TextNavButton>{item.name}</TextNavButton>
            </NavButton>
          </>
        )}
      />
      <AreaSubmitButton>
        <SubmitButton
          onPress={goToPrograms}
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
          <TextSubmitButton>Todos os Programas</TextSubmitButton>
        </SubmitButton>
      </AreaSubmitButton>
    </Container>
  );
}
