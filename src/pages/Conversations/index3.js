import React, {Component} from 'react';
import {View, Platform, DeviceEventEmitter, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppTour, AppTourSequence } from 'react-native-app-tour';

import { Container, ContainerIcon } from './styles';

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
        console.log(e);
      },
    );
  };

  render() {
    return (
      <Container style={styles.container}>
        <View style={{ flex:1}}/>
        <ContainerIcon style={styles.contIcon}>
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
        </ContainerIcon> 
      </Container>
      
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

/*
  
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  DeviceEventEmitter,
} from 'react-native';

import { AppTour, AppTourSequence, AppTourView } from 'react-native-app-tour';

import Top from './components/Top';
import Center from './components/Center';
import Bottom from './components/Bottom';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

export default class App extends Component {
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
        console.log(e);
      },
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Top
          style={styles.top}
          addAppTourTarget={appTourTarget => {
            this.appTourTargets.push(appTourTarget);
          }}
        />
        <Center
          style={styles.center}
          addAppTourTarget={appTourTarget => {
            this.appTourTargets.push(appTourTarget);
          }}
        />
        <Bottom
          style={styles.bottom}
          addAppTourTarget={appTourTarget => {
            this.appTourTargets.push(appTourTarget);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  top: {
    flex: 1,
  },
  center: {
    flex: 1,
  },
  bottom: {
    flex: 1,
  }
})
*/


/*

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SelectMultiple from 'react-native-select-multiple';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const problems = [
  { label: 'Cólicas Menstruais', value: 'Cólicas Menstruais' },
  { label: 'Corrimentos', value: 'Corrimentos' },
  { label: 'Pediatria', value: 'Pediatria' },
  {
    label: 'Menstruação em Excesso (hemorragias)',
    value: 'Menstruação em Excesso (hemorragias)',
  },
  {
    label: 'Falta / Atraso de menstruação',
    value: 'Falta / Atraso de menstruação',
  },
  { label: 'Dor pelvica', value: 'Dor pelvica' },
  { label: 'Dor lombar', value: 'Dor lombar' },
];

const renderLabel = (label, style) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View>
        <Text style={style}>{label}</Text>
      </View>
    </View>
  );
};

export default function Conversations() {
  const [selectedProblems, setProblems] = useState([]);

  function onSelectionsChange(selectedProblems) {
    // problems is array of { label, value }
    setProblems(selectedProblems);
  }

  return (
    <>
      <View>
        <SelectMultiple
          items={problems}
          renderLabel={renderLabel}
          selectedItems={selectedProblems}
          onSelectionsChange={onSelectionsChange}
        />
      </View>
      <View style={{ backgroundColor: 'red', height: 60 }}>
        <Text style={{ fontSize: 30 }}>{selectedProblems.length}</Text>
        {selectedProblems.map((selectedProblems) => (
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name="check"
              color="#A51C60"
              size={18}
              style={{ marginRight: wp('1.88%') }}
            />
            <Text>{selectedProblems.value}</Text>
          </View>
        ))}
      </View>
    </>
  );
}

*/
