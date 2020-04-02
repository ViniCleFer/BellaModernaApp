import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  TitleArea,
  Title,
  AreaInfo,
  NavButton,
  TextNavButton,
} from './styles';

export default function Programs() {
  return (
    <Container>
      <TitleArea>
        <Icon
          name="arrow-back"
          size={(hp('2.82%'), wp('5%'))}
          color="#625C70"
          style={{ marginLeft: wp('7.5%') }}
        />
        <Title>Todos os programas</Title>
      </TitleArea>

      <AreaInfo>
        <NavButton underlayColor="#f2f1f3" onPress={() => {}}>
          <TextNavButton>Adolescencia</TextNavButton>
        </NavButton>
        <NavButton underlayColor="#f2f1f3" onPress={() => {}}>
          <TextNavButton>Gestação</TextNavButton>
        </NavButton>
        <NavButton underlayColor="#f2f1f3" onPress={() => {}}>
          <TextNavButton>Maternidade</TextNavButton>
        </NavButton>
        <NavButton underlayColor="#f2f1f3" onPress={() => {}}>
          <TextNavButton>Menopausa</TextNavButton>
        </NavButton>
        <NavButton underlayColor="#f2f1f3" onPress={() => {}}>
          <TextNavButton>Pediatria</TextNavButton>
        </NavButton>
      </AreaInfo>
    </Container>
  );
}

/*

CASO QUEIRA ADICIONAR MAIS ITENS TORNANDO FLATLIST

<AreaInfo
  showsVerticalScrollIndicator={false}
  data={[1, 2, 3, 4, 5]}
  keyExtractor={(item) => String(item)}
  renderItem={() => (
    <>
      <NavButton activeOpacity={0.8} onPress={() => {}}>
        <TextNavButton>Gestação</TextNavButton>
      </NavButton>
    </>
  )}
/>

*/
