import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
// ShadowButton,

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
  const goMaternityProgram = () => {
    props.navigation.navigate('ProgramDetailMaternity');
  };

  const goPregnancyProgram = () => {
    props.navigation.navigate('ProgramDetailPregnancy');
  };

  const goToPrograms = () => {
    props.navigation.navigate('Programs');
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
        data={[1]}
        keyExtractor={(item) => String(item)}
        renderItem={() => (
          <>
            <NavButton activeOpacity={0.8} onPress={goMaternityProgram}>
              <TextNavButton>Maternidade</TextNavButton>
            </NavButton>
            <NavButton activeOpacity={0.8} onPress={goPregnancyProgram}>
              <TextNavButton>Gestação</TextNavButton>
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
