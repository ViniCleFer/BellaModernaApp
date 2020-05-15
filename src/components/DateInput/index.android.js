import React, { useMemo } from 'react';
import { DatePickerAndroid } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, IconArea, DateText } from './styles';

export default function DateInput({ date, onChange }) {
  const dateFormatted = useMemo(
    () => format(date, "dd MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  async function handleOpenPicker() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
    });

    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);

      onChange(selectedDate);
    }
  }

  return (
    <Container>
      <DateButton onPress={handleOpenPicker}>
        <Icon name="event" color="#625C70" size={20} />
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
    </Container>
  );
}
