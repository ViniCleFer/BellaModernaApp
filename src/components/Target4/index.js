import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppTourView } from 'react-native-app-tour';

import { Container, ContainerIcon, IconArea, ContainerTouch, TransparentText } from './styles';

class Target4 extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContainerTouch>
        <TouchableWithoutFeedback
          key={'4'}
          title={'4'}
          ref={ref => {
            if (!ref) return

            let props = {
              order: 4,
                title: 'Mais',
                description: 'Clique aqui para ir para a aba Mais Opções!',
                outerCircleColor: '#A51C60',
                titleTextSize: 25,
                descriptionTextSize: 25,
                targetRadius: 40
            }

            this.props.addAppTourTarget &&
              this.props.addAppTourTarget(AppTourView.for(ref, { ...props }))
          }}
          onPress={() => {}}
        >
          <TransparentText></TransparentText>
        </TouchableWithoutFeedback>
      </ContainerTouch>
    );
  }
}

export default Target4;
