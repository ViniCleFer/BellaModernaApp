/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import lista from '~/components/lista';

import { AddButton } from './styles';

const AppointmentsDoctor = (props) => {
  const [list, setList] = useState(lista);

  useEffect(() => {
    const handleSubmit = async () => {
      const jsonValue1 = await AsyncStorage.getItem('@appointments');
      const response = JSON.parse(jsonValue1);

      if (response === null) {
        setList(list);
      } else {
        setList(response);
      }
    };

    handleSubmit();
  }, [list]);

  return (
    <View>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 15 }}>
            <Text>{item.subject}</Text>
            <Text>{item.date}</Text>
            <Text>{item.hours}</Text>
            <Text>{item.risk}</Text>
          </View>
        )}
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
        onPress={() => props.navigation.navigate('Appointments', { list })}
      >
        <Icon name="calendar-plus" size={20} color="#fff" />
      </AddButton>
    </View>
  );
};

export default AppointmentsDoctor;
