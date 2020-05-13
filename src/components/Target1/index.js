import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { AppTourView } from 'react-native-app-tour';

import { Container, ContainerIcon, IconArea, ContainerTouch, TransparentText } from './styles';

class Target1 extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContainerTouch>
        <TouchableWithoutFeedback
          key={'1'}
          title={'1'}
          ref={ref => {
            if (!ref) return

            let props = {
              order: 1,
              title: 'Conversas',
              description: 'Clique aqui para ir para a aba de Conversas',
              outerCircleColor: '#A51C60',
              titleTextSize: 25,
              descriptionTextSize: 14,
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

export default Target1;
