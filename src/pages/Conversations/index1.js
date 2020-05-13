import React, {Component} from 'react';
import {View, Platform, DeviceEventEmitter, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppTour, AppTourSequence } from 'react-native-app-tour';

// import { Container, ContainerIcon } from './styles';

import Icon1 from '~/components/Icon1';
import Icon2 from '~/components/Icon2';
import Icon3 from '~/components/Icon3';
import Icon4 from '~/components/Icon4';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

export default class Conversations extends Component {
  constructor(props) {
    super(props);

    this.appTourTargets = [];
  }

  componentWillMount() {
    this.registerSequenceStepEvent();
    this.registerFinishSequenceEvent();
  }

  componentDidMount() {
    setTimeout(() => {
      let appTourSequence = new AppTourSequence();
      this.appTourTargets.forEach(appTourTarget => {
        appTourSequence.add(appTourTarget);
      })

      AppTour.ShowSequence(appTourSequence);
    }, 1000);
  }

  registerSequenceStepEvent = () => {
    if (this.sequenceStepListener) {
      this.sequenceStepListener.remove();
    }
    this.sequenceStepListener = DeviceEventEmitter.addListener(
      'onShowSequenceStepEvent',
      (e: Event) => {
        console.log(e);
      },
    );
  };

  registerFinishSequenceEvent = () => {
    if (this.finishSequenceListener) {
      this.finishSequenceListener.remove();
    }
    this.finishSequenceListener = DeviceEventEmitter.addListener(
      'onFinishSequenceEvent',
      (e: Event) => {
        this.props.navigation.navigate('More')
        console.log("navegou para a Tela Mais");
      },
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex:1}}/>
        <View style={styles.contIcon}>
          <Icon1
            addAppTourTarget={appTourTarget => {
              this.appTourTargets.push(appTourTarget);
            }}
          />

          <Icon2
            addAppTourTarget={appTourTarget => {
              this.appTourTargets.push(appTourTarget);
            }}
          />

          <Icon3
            
            addAppTourTarget={appTourTarget => {
              this.appTourTargets.push(appTourTarget);
            }}
          />

          <Icon4
            addAppTourTarget={appTourTarget => {
              this.appTourTargets.push(appTourTarget);
            }}
          />
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex:1,
  },
  contIcon: {
    height: hp('10.56%'),
    backgroundColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  }
})