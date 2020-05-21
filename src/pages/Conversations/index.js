import React, { useState } from 'react';
import { Agenda } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

import {
  AddButton,
  ContainerCard,
  AreaInfos,
  HourText,
  ProfileText,
  InfoArea,
  InfoText,
  InfoDoctor,
  ImageProfile,
} from './styles';

export default function Conversations({ navigation }) {
  const profile = useSelector((state) => state.user.profile);

  const [items, setItems] = useState({
    '2020-05-21': [
      {
        doctor: 'Edvaldo',
        hours: '10:00 AM - 11:00 AM',
        profile: 'Vinicius Fernandes',
        type: 'Monitoramento',
      },
    ],
    '2020-05-22': [
      {
        doctor: 'Edvaldo',
        hours: '10:00 AM - 11:00 AM',
        profile: 'Vinicius Fernandes',
        type: 'Agendamento de consulta',
      },
    ],
    '2020-05-23': [
      {
        doctor: 'Edvaldo',
        hours: '10:00 AM - 11:00 AM',
        profile: 'Vinicius Fernandes',
        type: 'Semana á semana',
      },
    ],
    '2020-05-24': [
      {
        doctor: 'Edvaldo',
        hours: '10:00 AM - 11:00 AM',
        profile: 'Vinicius Fernandes',
        type: 'Agendamento de consulta',
      },
    ],
    '2020-05-25': [
      {
        doctor: 'Edvaldo',
        hours: '10:00 AM - 11:00 AM',
        profile: 'Vinicius Fernandes',
        type: 'Monitoramento',
      },
    ],
  });

  const medExams = {
    key: 'medExams',
    color: '#E48ABF',
    selectedDotColor: '#E48ABF',
  };

  const medAppointment = {
    key: 'medAppointment',
    color: '#FA375A',
    selectedDotColor: '#FA375A',
  };
  const surgery = {
    key: 'surgery',
    color: '#A51C60',
    selectedDotColor: '#A51C60',
  };

  function HandleModal() {}

  function renderItem(item) {
    switch (item.type) {
      case 'Monitoramento':
        return (
          <ContainerCard
            style={{
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: '#E48ABF',
            }}
            onPress={() => {}}
          >
            <AreaInfos>
              <HourText>{item.hours}</HourText>
              <ProfileText>{item.profile}</ProfileText>

              <InfoArea>
                <InfoText>{item.type}</InfoText>
                <InfoDoctor>com {item.doctor}</InfoDoctor>
              </InfoArea>
            </AreaInfos>
            <ImageProfile
              source={{
                uri: `http://192.168.0.13:3333/files/${profile.image_url}`,
              }}
              alt="Profile Image"
              style={{ backgroundColor: '#ccc' }}
            />
          </ContainerCard>
        );
      case 'Agendamento de consulta':
        return (
          <ContainerCard
            style={{
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: '#FA375A',
            }}
            onPress={() => {}}
          >
            <AreaInfos>
              <HourText>{item.hours}</HourText>
              <ProfileText>{item.profile}</ProfileText>

              <InfoArea>
                <InfoText>{item.type}</InfoText>
                <InfoDoctor>com {item.doctor}</InfoDoctor>
              </InfoArea>
            </AreaInfos>
            <ImageProfile
              source={{
                uri: `http://192.168.0.13:3333/files/${profile.image_url}`,
              }}
              alt="Profile Image"
              style={{ backgroundColor: '#ccc' }}
            />
          </ContainerCard>
        );
      default:
        return (
          <ContainerCard
            style={{
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: '#A51C60',
            }}
            onPress={() => HandleModal()}
          >
            <AreaInfos>
              <HourText>{item.hours}</HourText>
              <ProfileText>{item.profile}</ProfileText>

              <InfoArea>
                <InfoText>{item.type}</InfoText>
                <InfoDoctor>com {item.doctor}</InfoDoctor>
              </InfoArea>
            </AreaInfos>
            <ImageProfile
              source={{
                uri: `http://192.168.0.13:3333/files/${profile.image_url}`,
              }}
              alt="Profile Image"
              style={{ backgroundColor: '#ccc' }}
            />
          </ContainerCard>
        );
    }
  }

  function rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  return (
    <>
      <Agenda
        style={{ flex: 1 }}
        items={items}
        // loadItemsForMonth={(month) => {}}
        selected={new Date()}
        minDate={new Date()}
        pastScrollRange={24}
        futureScrollRange={24}
        // renderItem é Card do Agendamento
        renderItem={renderItem}
        // renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={rowHasChanged}
        renderKnob={() => {
          return <Icon name="chevron-down" size={20} color="#a51c60" />;
        }}
        markingType="multi-dot"
        markedDates={{
          '2020-05-22': {
            dots: [medExams, medAppointment, surgery],
          },
          '2020-05-21': { dots: [medAppointment, surgery] },
        }}
        // monthFormat={'yyyy'}
        theme={{
          agendaTodayColor: '#A51C60',
          selectedDayBackgroundColor: '#A51C60',
          todayTextColor: '#A51C60',
          dayTextColor: '#E48ABF',
          textDayFontSize: 15.5,
        }}
        // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        // hideExtraDays={false}
      />

      <AddButton
        activeOpacity={0.6}
        style={{
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: {
            width: 4,
            height: 4,
          },
          elevation: 4,
        }}
        onPress={() => navigation.navigate('Appointments')}
      >
        <Icon name="calendar-plus" size={20} color="#fff" />
      </AddButton>
    </>
  );
}
