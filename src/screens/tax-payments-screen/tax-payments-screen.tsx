import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ListRenderItem, RefreshControl } from 'react-native';

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
import PaymentsListItem from '../../components/payments-list-item/payments-list-item';
import { Payment } from '../../interfaces';
import Spinner from '../../components/spinner/spinner';
import ErrorView from '../../components/error-view/error-view';

const TaxPaymentsScreen: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();
  const { payments, loadingPayments, errorPayments } = useAppSelector((state) => state.payments);

  useEffect(() => {
    dispatch(fetchPayments(USER_ID));
  }, []);

  const wait = (timeout: number): Promise<any> => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const renderItem: ListRenderItem<Payment> = ({ item }) => <PaymentsListItem payment={item} />;

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000)
      .then(() => dispatch(fetchPayments(USER_ID)))
      .then(() => setRefreshing(false));
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
          <PagoPaLogoIcon width={50} height={50} color={colors.common.white} />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>{TAX_PAYMENTS_CONTENT_TITLE}</Text>
        <Text style={styles.contentDescription}>{TAX_PAYMENTS_CONTENT_DESCRIPTION}</Text>
      </View>
      {loadingPayments && !refreshing && <Spinner />}
      {errorPayments && <ErrorView message={errorPayments} />}
      {!loadingPayments && !errorPayments && (
        <View style={styles.listContainer}>
          <FlatList
            style={styles.paymentsList}
            data={payments}
            renderItem={renderItem}
            keyExtractor={(item: Payment) => item.id}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          />
        </View>
      )}
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
  listContainer: {
    flex: 1,
  },
  paymentsList: {
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
