import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../variables';
import { Payment } from '../../interfaces';

type Props = {
  title: string;
  value: string | Payment['address'] | number;
};

const PaymentsDetailsDataSection: React.FC<Props> = ({ title, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {typeof value === 'string' && (
        <Text style={styles.value} numberOfLines={3}>
          {value.toUpperCase()}
        </Text>
      )}
      {typeof value === 'number' && <Text style={styles.value}>{value}</Text>}
      {typeof value === 'object' && (
        <>
          <Text style={styles.value}>{value.code}</Text>
          <Text style={styles.value}>{value.street}</Text>
          <Text style={styles.value}>{value.postCode}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: colors.grey.border,
    paddingTop: 16,
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Work Sans SemiBold',
    fontSize: 16,
    lineHeight: 19,
    color: colors.grey.dark,
    marginBottom: 4,
  },
  value: {
    fontFamily: 'Work Sans Regular',
    fontSize: 16,
    lineHeight: 19,
    color: colors.grey.main,
  },
});

export default PaymentsDetailsDataSection;
