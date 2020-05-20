import React, { Component, useState } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Conversations() {
  const [items, setItems] = useState({
    '2012-05-22': [{ name: 'item 1 - any js object' }],
    '2012-05-23': [{ name: 'item 2 - any js object', height: 80 }],
    '2012-05-24': [],
    '2012-05-25': [
      { name: 'item 3 - any js object' },
      { name: 'any js object' },
    ],
  });

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);

        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = 5;
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

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={[styles.item, { height: item.height }]}
        onPress={() => Alert.alert(item.name)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  const rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };

  return (
    <Agenda
      style={{ flex: 1, height: 800 }}
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
      }}
      // monthFormat={'yyyy'}
      theme={{
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
