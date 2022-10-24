import React, { memo } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

import { Payment } from '../../interfaces';
import PagoPaLogoIcon from '../../svg-icons/pago-pa-logo-icon';
import { colors } from '../../variables';
import PaymentArrowIcon from '../../svg-icons/payment-arrow-icon';
import { financeTransformer } from '../../helpers';

type Props = {
  payment: Payment;
};

const PaymentsListItem: React.FC<Props> = ({ payment }) => {
  return (
    <Pressable style={({ pressed }) => [styles.container, pressed ? styles.pressed : null]}>
      <View style={styles.imageContainer}>
        <PagoPaLogoIcon width={48} height={48} color={colors.rose.main} testID={'logo-icon'} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.topLine}>
          <Text numberOfLines={2}>{payment.description.toUpperCase()}</Text>
        </View>
        <View style={styles.bottomLine}>
          <Text style={[styles.bottomText, styles.date]}>{payment.expiryDate}</Text>
          <Text style={[styles.bottomText, styles.sum]}>{financeTransformer(payment.sum)}</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <PaymentArrowIcon color={colors.grey.icon} testID={'arrow-icon'} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: colors.common.white,
    borderRadius: 8,
    marginBottom: 12,
  },
  imageContainer: {
    backgroundColor: 'rgba(0, 102, 204, 0.1)',
    borderRadius: 4,
    marginRight: 12,
    padding: 4,
  },
  textContainer: {
    width: 227,
    marginRight: 8,
  },
  topLine: {
    justifyContent: 'center',
    height: 35,
  },
  bottomLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    fontFamily: 'Rubik Regular',
    fontSize: 12.5,
    lineHeight: 15,
    color: colors.grey.dark,
  },
  bottomText: {
    fontFamily: 'Work Sans Regular',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.5,
  },
  date: {
    color: colors.grey.date,
  },
  sum: {
    color: colors.error.main,
  },
  iconContainer: {
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
});

export default memo(PaymentsListItem);
