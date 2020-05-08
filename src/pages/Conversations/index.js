import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const Conversations = () => {
  return <View />;
};

export default Conversations;

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
