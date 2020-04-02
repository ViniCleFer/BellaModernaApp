import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container, Text } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#625C70" />
      ) : (
        <>
          <Text>{children}</Text>
          <Icon
            name="navigate-next"
            size={20}
            color="#958FA3"
            style={{ marginRight: hp('3.35%') }}
          />
        </>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: null,
};
