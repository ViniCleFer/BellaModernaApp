import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppTourView } from 'react-native-app-tour';

import { Container, ContainerIcon, IconArea, EmojiText, ContainerTouch, TransparentText } from './styles';

export default class Icon4 extends Component{
  render() {
    return (
      <Container>
        <ContainerIcon>
          <IconArea>
            <Icon name="ellipsis-h" color="#958FA3" size={18} />
            <EmojiText>Mais</EmojiText>
          </IconArea>
        </ContainerIcon>
        <ContainerTouch>
          <TouchableWithoutFeedback
            key={'4'}
            title={'4'}
            ref={ref => {
              if (!ref) return
  
              let props = {
                order: 4,
                title: 'Mais',
                description: 'Clique aqui para ir para a aba Mais Opções',
                outerCircleColor: '#A51C60',
                titleTextSize: 25,
                descriptionTextSize: 14,
                targetRadius: 40
              }
  
              this.props.addAppTourTarget &&
              this.props.addAppTourTarget(AppTourView.for(ref, { ...props }))
            }}
          >
            <TransparentText></TransparentText>
          </TouchableWithoutFeedback>
        </ContainerTouch>
      </Container>
    );
  }
}