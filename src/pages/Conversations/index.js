import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
  const [items, setItems] = useState([]);

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

  function timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          // Aqui é o máximo de agendamentos renderizados no dia
          const numItems = 4;

          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              hours: "10:00 AM - 11:00 AM",
              profile: "Vinícius Fernandes",
              type: "cirurgia",
              doctor: "Edvaldo"
            });
          }
        }
      }

      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });

      setItems(newItems);
    }, 1000);
    // console.tron.log(this.state.items);
  }



  function renderItem(item) {
    return (
      <ContainerCard>
        <AreaInfos>
          <HourText>{item.hours}</HourText>
          <ProfileText>{item.profile}</ProfileText>

          <InfoArea>
            <InfoText>{item.type}</InfoText>
            <InfoDoctor>com {item.doctor}</InfoDoctor>
          </InfoArea>
        </AreaInfos>
        <ImageProfile alt="Profile Image" style={{ backgroundColor: '#ccc' }} />
      </ContainerCard>
    );
  }

  function renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  function rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  return (
    <>
      <Agenda
        style={{ flex: 1 }}
        items={items}
        loadItemsForMonth={loadItems}
        selected={new Date()}
        minDate={new Date()}
        pastScrollRange={50}
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
          '2020-05-12': { textColor: '#43515c' },
          '2020-05-13': { textColor: '#43515c' },
          '2020-05-14': { startingDay: true, endingDay: true, color: 'blue' },
          '2020-05-15': {
            dots: [medExams, medAppointment, surgery],
          },
          '2020-05-16': { dots: [medAppointment, surgery] },
          '2020-05-20': { startingDay: true, color: 'gray' },
          '2020-05-25': { color: 'gray' },
          '2020-05-26': { endingDay: true, color: 'gray' },
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

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
