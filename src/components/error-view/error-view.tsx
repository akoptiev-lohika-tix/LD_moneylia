import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../../variables';

type Props = {
  message: string;
};

const ErrorView: React.FC<Props> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.error.main,
    marginTop: 60,
    marginLeft: 16,
    marginRight: 16,
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 12,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: 0, height: 0 },
  },
  errorText: {
    fontFamily: 'Work Sans Regular',
    fontSize: 16,
    lineHeight: 19,
    color: colors.common.white,
  },
});

export default ErrorView;
