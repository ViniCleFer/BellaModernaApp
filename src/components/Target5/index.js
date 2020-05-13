import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { AppTourView } from 'react-native-app-tour';

import { Container, ContainerTouch, TransparentText } from './styles';

class Target5 extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <ContainerTouch>
          <TouchableWithoutFeedback
            key={'5'}
            title={'5'}
            ref={ref => {
              if (!ref) return

              let props = {
                order: 5,
                title: 'Editar Perfil',
                description: 'Clique aqui para Editar seu Perfil',
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
      </Container>
    );
  }
}

export default Target5;
