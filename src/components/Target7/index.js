import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { AppTourView } from 'react-native-app-tour';

import { Container, ContainerTouch, TransparentText } from './styles';

class Target7 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <ContainerTouch>
          <TouchableWithoutFeedback
            key="7"
            title="7"
            ref={(ref) => {
              if (!ref) return;

              const props = {
                order: 7,
                title: 'Acessar Informações Legais',
                description: 'Clique aqui para as informações do Aplicativo',
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

export default Target7;
