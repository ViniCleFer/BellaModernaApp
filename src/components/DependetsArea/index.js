import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

// import { Container } from './styles';

import api from '~/services/api';

export default function DependetsArea({ dependent }) {
  useEffect(() => {
    async function loadDependents() {
      const response = await api.get('/dependents', {
        params: { user_id },
      });

      console.log(response.data);
    }

    loadDependents();
  }, []);

  return <Text style={{ backgroundColor: 'red' }}>{dependent}</Text>;
}
