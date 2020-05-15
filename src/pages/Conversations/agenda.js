import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

export default function Conversations(props) {
  const profile = useSelector((state) => state.user.profile);

  const [items, setItems] = useState({});

  function loadItems(day) {
    setTimeout(() => {
      // const time = day.timestamp + 80 * 24 * 60 * 60 * 1000;
      // const strTime = timeToString(time);
      // const stampTime = timeToString(day.timestamp);
      // console.tron.log('este é o day', day);
      // day = retorna day: {
      //  year:2020
      //  month:5
      //  day:14
      //  timestamp:1589414400000
      //  dateString:2020-05-14
      // }
      // console.tron.log('este é o dayTimestamp', day.timestamp);
      // day.timestamp = hoje - retorna 14/05/2020
      // console.tron.log('este é o time', time);
      // time é 02/08/2020 retornado em timestamp
      // console.tron.log('este é o strtime', strTime);
      // strTime = retorna 02/08/2020
      // console.tron.log(
      //   'este é o day.timestamp convertido para string',
      //  stampTime
      // );
      // stampTime = hoje - retorna 14/05/2020
      // eslint-disable-next-line prefer-const
      // let newItems = {};
      //  Object.keys(items).forEach((key) => {
      //    newItems[key] = setItems([key]);
      //  });
      // setItems({
      //  items: newItems,
      // });
    }, 1000);
    console.tron.log('este é o setItems', setItems());
  }

  function renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.item, { height: item.height }]}
        onPress={() => Alert.alert(item.name)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
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

  function timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

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

  return (
    <Agenda
      items={items}
      loadItemsForMonth={loadItems}
      selected={new Date()}
      minDate={new Date()}
      // pastScrollRange={24}
      // futureScrollRange={24}
      scrollEnabled
      // Enable or disable vertical scroll indicator. Default = false
      showScrollIndicator
      // renderItem é Card do Agendamento
      renderItem={() => renderItem}
      renderEmptyDate={renderEmptyDate}
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
