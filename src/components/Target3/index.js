import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppTourView } from 'react-native-app-tour';

import {
  Container,
  ContainerIcon,
  IconArea,
  ContainerTouch,
  TransparentText,
} from './styles';

class Target3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContainerTouch>
        <TouchableWithoutFeedback
          key="3"
          title="3"
          ref={(ref) => {
            if (!ref) return;

            const props = {
              order: 3,
              title: 'Informações Legais',
              description:
                'Clique aqui para ir para a aba de Informações Legais',
              outerCircleColor: '#A51C60',
              titleTextSize: 25,
              descriptionTextSize: 14,
              targetRadius: 40,
            };

            this.props.addAppTourTarget &&
              this.props.addAppTourTarget(AppTourView.for(ref, { ...props }));
          }}
          onPress={() => {}}
        >
          <TransparentText />
        </TouchableWithoutFeedback>
      </ContainerTouch>
    );
  }
}

export default Target3;
