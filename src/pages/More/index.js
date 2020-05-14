import React, { useEffect } from 'react';
import { DeviceEventEmitter } from 'react-native';
import { AppTour, AppTourSequence } from 'react-native-app-tour';

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

import Target5 from '~/components/Target5';
import Target6 from '~/components/Target6';
import Target7 from '~/components/Target7';

export default function More(props) {
  const profile = useSelector((state) => state.user.profile);

  const navigateBack = () => {
    props.navigation.goBack();
  };

  appTour = [];

  useEffect(() => {
    setTimeout(() => {
      this.registerSequenceStepEvent();
      this.registerFinishSequenceEvent();

      let appTourSequence = new AppTourSequence();
      this.appTour.forEach(appTourTarget => {
        appTourSequence.add(appTourTarget);
      })

      AppTour.ShowSequence(appTourSequence);
    }, 1000);
  },[]);

  registerSequenceStepEvent = () => {
    if (sequenceStepListener) {
      this.sequenceStepListener.remove();
    }
    this.sequenceStepListener = DeviceEventEmitter.addListener(
      'onShowSequenceStepEvent',
      (e: Event) => {
        console.log(e);
      },
    );
  };

  registerFinishSequenceEvent = () => {
    if (finishSequenceListener) {
      this.finishSequenceListener.remove();
    }
    this.finishSequenceListener = DeviceEventEmitter.addListener(
      'onFinishSequenceEvent',
      (e: Event) => {
        console.log("Fim");
      },
    );
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
          style={{ heigh: 50, width: 50, backgroundColor: '#00f' }}
          source={{
            uri: `http://192.168.0.13:3333/files/${profile.image_url}`,
          }}
        />
        <PersonAreaInfo>
          <PersonName>{profile.name}</PersonName>
          <PersonEmail>{profile.email}</PersonEmail>
          <PerfilArea
            underlayColor="#f2f1f3"
            onPress={() => props.navigation.navigate('StackPersonalData')}
          >
            <>
              <Target5
                addAppTourTarget={appTourTarget => {
                  this.appTour.push(appTourTarget);
                }}
              />
              <PersonPerfil>Editar perfil</PersonPerfil>
            </>
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
              onPress={() => {}}
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
              onPress={() => {}}
            />
            <TextNavButton>Programas</TextNavButton>
          </AreaButton>
        </NavButton>
        <NavButton
          underlayColor="#f2f1f3"
          onPress={() => props.navigation.navigate('StackAccount')}
        >
          <AreaButton>
            <Icon
              name="account-circle"
              size={(hp('3.87%'), wp('6.88%'))}
              color="#625C70"
              style={{ marginLeft: wp('5.94%') }}
              onPress={() => {}}
            />
            <Target6
              addAppTourTarget={appTourTarget => {
                this.appTour.push(appTourTarget);
              }}
            />
            <TextNavButton>Conta</TextNavButton>
          </AreaButton>
        </NavButton>
        <NavButton
          underlayColor="#f2f1f3"
          onPress={() => props.navigation.navigate('LegalInfo')}
        >
          <AreaButton>
            <Icon
              name="information-outline"
              size={(hp('3.87%'), wp('6.88%'))}
              color="#625C70"
              style={{ marginLeft: wp('5.94%') }}
              onPress={() => {}}
            />
            <Target7
              addAppTourTarget={appTourTarget => {
                this.appTour.push(appTourTarget);
              }}
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
              onPress={() => {}}
            />
            <TextNavButton>Sair</TextNavButton>
          </AreaButton>
        </NavButton>
      </AreaInfo>
    </Container>
  );
}
