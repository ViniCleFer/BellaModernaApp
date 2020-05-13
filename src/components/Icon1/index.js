import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppTourView } from 'react-native-app-tour';

import { Container, ContainerIcon, IconArea, EmojiText, ContainerTouch, TransparentText } from './styles';

class Icon1 extends Component{
  render() {
    return (
      <Container>
        <ContainerIcon>
          <IconArea>
            <Icon name="comments" color="#A51C60" size={18} />
            <EmojiText>Conversas</EmojiText>
          </IconArea>
        </ContainerIcon>
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
      </Container>
    );
  }
}

export default Icon1;
