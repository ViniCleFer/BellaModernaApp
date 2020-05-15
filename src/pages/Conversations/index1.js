import React, { useEffect } from 'react';
import {View, DeviceEventEmitter } from 'react-native';
import { AppTour, AppTourSequence } from 'react-native-app-tour';

import Target1 from '~/components/Target1';
import Target2 from '~/components/Target2';
import Target3 from '~/components/Target3';
import Target4 from '~/components/Target4';

export default function Conversations(props) {
  appTourTargets = [];

  useEffect(() => {
    this.registerSequenceStepEvent();
    this.registerFinishSequenceEvent();

    setTimeout(() => {
      let appTourSequence = new AppTourSequence();
      this.appTourTargets.forEach(appTourTarget => {
        appTourSequence.add(appTourTarget);
      })

      AppTour.ShowSequence(appTourSequence);
    }, 1000);
  },[]);

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
        props.navigation.navigate('More')
        console.log('acabou');
      },
    );
  };

  return (
    <View style={{flex:1, backgroundColor: '#fff'}}>
      <Target1
        addAppTourTarget={appTourTarget => {
          this.appTourTargets.push(appTourTarget);
        }}
      />

      <Target2
        addAppTourTarget={appTourTarget => {
          this.appTourTargets.push(appTourTarget);
        }}
      />

      <Target3
        addAppTourTarget={appTourTarget => {
          this.appTourTargets.push(appTourTarget);
        }}
      />

      <Target4
        addAppTourTarget={appTourTarget => {
          this.appTourTargets.push(appTourTarget);
        }}
      />
    </View>
  );
}
