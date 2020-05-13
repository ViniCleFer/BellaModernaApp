import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppTourView } from 'react-native-app-tour';

import { Container, ContainerIcon, IconArea, EmojiText, ContainerTouch, TransparentText } from './styles';

export default class Icon2 extends Component{
  render() {
    return (
      <Container>
        <ContainerIcon>
          <IconArea>
            <Icon name="user-md" color="#958FA3" size={18} />
            <EmojiText>Prontuários</EmojiText>
          </IconArea>
        </ContainerIcon>
        <ContainerTouch>
          <TouchableWithoutFeedback
            key={'2'}
            title={'2'}
            ref={ref => {
              if (!ref) return
  
              let props = {
                order: 2,
                title: 'Prontuários',
                description: 'Clique aqui para ir para a aba de Prontuários',
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