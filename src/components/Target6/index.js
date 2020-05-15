import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { AppTourView } from 'react-native-app-tour';

import { Container, ContainerTouch, TransparentText } from './styles';

class Target6 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <ContainerTouch>
          <TouchableWithoutFeedback
            key="6"
            title="6"
            ref={(ref) => {
              if (!ref) return;

              const props = {
                order: 6,
                title: 'Acessar Conta',
                description: 'Clique aqui para as suas informações de Conta',
                outerCircleColor: '#A51C60',
                titleTextSize: 25,
                descriptionTextSize: 14,
                targetRadius: 30,
              };

              this.props.addAppTourTarget &&
                this.props.addAppTourTarget(AppTourView.for(ref, { ...props }));
            }}
            onPress={() => {}}
          >
            <TransparentText />
          </TouchableWithoutFeedback>
        </ContainerTouch>
      </Container>
    );
  }
}

export default Target6;
