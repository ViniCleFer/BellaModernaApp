import React, { Component } from 'react';

// import Timeline from 'react-native-timeline-flatlist';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TimeLine from '~/lib/index';

export default class Conversas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: 'Atendimento com Nutricionista',
          time: '18:00',
          description: 'Remember tooth brushing and read notes on the tablet',

          renderIcon: () => (
            <Icon name="assignment-turned-in" size={20} color="#A51C60" />
          ),
          lineColor: '#c6bddb',
          titleStyle: { color: '#A51C60' },
        },
      ],
    };
  }

  render() {
    const { data } = this.state;
    return <TimeLine data={data} style={{ margin: 36 }} />;
  }
}
