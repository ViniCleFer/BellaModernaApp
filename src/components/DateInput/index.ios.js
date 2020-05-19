import React, { useState, useMemo } from 'react';
import { DatePickerIOS } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText, IconArea, Picker } from './styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>

        <IconArea>
          <Icon
            name="arrow-drop-down"
            size={22}
            color="#625C70"
            style={{
              marginRight: wp('3%'),
              alignItems: 'center',
            }}
          />
        </IconArea>
      </DateButton>

      {opened && (
        <Picker>
          <DatePickerIOS
            date={date}
            onDateChange={onChange}
            minimumDate={new Date()}
            minuteInterval={60}
            mode="date"
            locale="pt"
          />
        </Picker>
      )}
    </Container>
  );
}
