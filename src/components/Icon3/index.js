import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppTourView } from 'react-native-app-tour';

import { Container, ContainerIcon, IconArea, EmojiText, ContainerTouch, TransparentText } from './styles';

export default class Icon3 extends Component{
  render() {
    return (
      <Container>
        <ContainerIcon>
          <IconArea>
            <Icon name="users" color="#958FA3" size={18} />
            <EmojiText>Pessoas</EmojiText>
          </IconArea>
        </ContainerIcon>
        <ContainerTouch>
          <TouchableWithoutFeedback
            key={'3'}
            title={'3'}
            ref={ref => {
              if (!ref) return
  
              let props = {
                order: 3,
                title: 'Pessoas',
                description: 'Clique aqui para ir para a aba de Pessoas',
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