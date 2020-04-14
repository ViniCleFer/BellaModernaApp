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
} from './styles';

export default function Programs(props) {
  const id = props.navigation.getParam('id');

  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    async function loadPrograms() {
      const response = await api.get('/programs');

      setPrograms(response.data);
    }

    loadPrograms();
  }, []);

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
        <Title>Todos os programas</Title>
      </TitleArea>
      <AreaInfo
        showsVerticalScrollIndicator={false}
        data={programs}
        keyExtractor={(program) => String(program)}
        renderItem={({ item: program }) => (
          <>
            <NavButton
              underlayColor="#f2f1f3"
              onPress={() =>
                props.navigation.navigate('ProgramDetail', { program, id })
              }
            >
              <TextNavButton>{program.name}</TextNavButton>
            </NavButton>
          </>
        )}
      />
    </Container>
  );
}
