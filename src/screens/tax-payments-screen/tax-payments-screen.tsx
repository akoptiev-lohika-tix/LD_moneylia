import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {
  colors,
  TAX_PAYMENTS_CONTENT_DESCRIPTION,
  TAX_PAYMENTS_CONTENT_TITLE,
  TAX_PAYMENTS_TOP_BAR_TITLE,
} from '../../variables';
import HeaderBar from '../../components/header-bar/header-bar';
import PagoPaLogoIcon from '../../svg-icons/pago-pa-logo-icon';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchPayments } from '../../api';
import { USER_ID } from '../../constants';

const TaxPaymentsScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { payments, loadingPayments, errorPayments } = useAppSelector((state) => state.payments);

  useEffect(() => {
    dispatch(fetchPayments(USER_ID));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.headerContainer}>
          <HeaderBar />
        </View>
        <View style={styles.topBarTitleContainer}>
          <View>
            <Text style={styles.topBarTitle}>{TAX_PAYMENTS_TOP_BAR_TITLE}</Text>
          </View>
          <PagoPaLogoIcon color={colors.common.white} />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>{TAX_PAYMENTS_CONTENT_TITLE}</Text>
        <Text style={styles.contentDescription}>{TAX_PAYMENTS_CONTENT_DESCRIPTION}</Text>
      </View>
      <View>
        <Text>
          {payments && payments[0].id}
          {payments && payments[1].id}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary.light,
    flex: 1,
  },
  topBar: {
    backgroundColor: colors.rose.main,
    paddingTop: 40,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginBottom: 24,
  },
  headerContainer: {
    marginBottom: 18,
  },
  topBarTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 34,
  },
  topBarTitle: {
    fontFamily: 'Work Sans SemiBold',
    fontSize: 24,
    lineHeight: 29,
    color: colors.common.white,
  },
  content: {
    paddingHorizontal: 16,
  },
  contentTitle: {
    fontFamily: 'Work Sans SemiBold',
    fontSize: 24,
    lineHeight: 29,
    color: colors.primary.main,
    marginBottom: 8,
  },
  contentDescription: {
    fontFamily: 'Rubik Regular',
    fontSize: 14,
    lineHeight: 21,
    color: colors.grey.main,
    marginBottom: 24,
  },
});

export default TaxPaymentsScreen;
