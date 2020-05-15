import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AddButton } from './styles';

class Conversations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {},
    };
  }

  render() {
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
      <>
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={new Date()}
          minDate={new Date()}
          // pastScrollRange={24}
          // futureScrollRange={24}
          // renderItem é Card do Agendamento
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
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
          onPress={() => this.props.navigation.navigate('Appointments')}
        >
          <Icon name="calendar-plus" size={20} color="#fff" />
        </AddButton>
      </>
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);

        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: `Item for ${strTime} #${j}`,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }

      const newItems = {};
      Object.keys(this.state.items).forEach((key) => {
        newItems[key] = this.state.items[key];
      });

      this.setState({
        items: newItems,
      });
    }, 1000);
    // console.tron.log(this.state.items);
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.item, { height: item.height }]}
        onPress={() => Alert.alert(item.name)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
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

export default Conversations;
