import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';

import { Payment, RootStackParamList } from '../../interfaces';
import {
  colors,
  ERROR_GENERAL_MESSAGE,
  PAYMENT_DETAILS_BOTTOM_ACTION_BUTTON_TEXT,
  PAYMENT_DETAILS_BOTTOM_ACTION_TEXT,
  PAYMENT_DETAILS_CAUSAL_TITLE,
  PAYMENT_DETAILS_CREDITOR_TITLE,
  PAYMENT_DETAILS_DATE_TITLE,
  PAYMENT_DETAILS_NOTICE_CODE_TITLE,
  PAYMENT_DETAILS_TAX_CODE_TITLE,
  PAYMENT_DETAILS_TITLE,
} from '../../variables';
import PagoPaLogoDetailsIcon from '../../svg-icons/pago-pa-logo-details-icon';
import { fetchPaymentById } from '../../api';
import { USER_ID } from '../../constants';
import Spinner from '../../components/spinner/spinner';
import ErrorView from '../../components/error-view/error-view';
import PaymentsDetailsDataSection from '../../components/payments-details-data-section/payments-details-data-section';
import { financeTransformer } from '../../helpers';

type Props = NativeStackScreenProps<RootStackParamList, 'PaymentDetails'>;

const PaymentDetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { paymentId } = route.params;
  const [payment, setPayment] = useState<Payment | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadPayment = async (id: string): Promise<Payment> => {
    return await fetchPaymentById(USER_ID, id);
  };

  useEffect(() => {
    setIsLoading(true);
    loadPayment(paymentId)
      .then((data) => {
        setPayment(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError(ERROR_GENERAL_MESSAGE);
      });
  }, [paymentId]);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <ErrorView message={error} />}
      {payment && (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{PAYMENT_DETAILS_TITLE}</Text>
            <View style={styles.imageContainer}>
              <PagoPaLogoDetailsIcon color={colors.rose.main} />
            </View>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.dataContainer}>
              <PaymentsDetailsDataSection
                title={PAYMENT_DETAILS_CREDITOR_TITLE}
                value={payment.address}
              />
              <PaymentsDetailsDataSection
                title={PAYMENT_DETAILS_CAUSAL_TITLE}
                value={payment.description}
              />
              <PaymentsDetailsDataSection
                title={PAYMENT_DETAILS_DATE_TITLE}
                value={payment.expiryDate}
              />
              <PaymentsDetailsDataSection
                title={PAYMENT_DETAILS_TAX_CODE_TITLE}
                value={payment.taxCode}
              />
              <PaymentsDetailsDataSection
                title={PAYMENT_DETAILS_NOTICE_CODE_TITLE}
                value={payment.noticeCode}
              />
            </View>
            <View style={styles.bottomAction}>
              <View style={styles.actionTopBar}>
                <Text style={styles.text}>{PAYMENT_DETAILS_BOTTOM_ACTION_TEXT}</Text>
                <Text style={styles.sum}>{financeTransformer(payment.sum)}</Text>
              </View>
              <Pressable
                onPress={() => navigation.navigate('NotFound')}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
              >
                <Text style={styles.buttonText}>{PAYMENT_DETAILS_BOTTOM_ACTION_BUTTON_TEXT}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.common.white,
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: 'Work Sans SemiBold',
    fontSize: 20,
    lineHeight: 24,
    color: colors.primary.main,
  },
  imageContainer: {
    backgroundColor: 'rgba(0, 102, 204, 0.1)',
    borderRadius: 4,
    padding: 4,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  dataContainer: {
    paddingHorizontal: 16,
  },
  bottomAction: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 1,
    backgroundColor: colors.common.white,
  },
  actionTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  text: {
    fontFamily: 'Work Sans SemiBold',
    fontSize: 20,
    lineHeight: 24,
    color: colors.grey.dark,
  },
  sum: {
    fontFamily: 'Work Sans Regular',
    fontSize: 20,
    lineHeight: 24,
    color: colors.error.main,
  },
  button: {
    backgroundColor: colors.rose.main,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  buttonText: {
    fontFamily: 'Work Sans SemiBold',
    fontSize: 18,
    color: colors.common.white,
  },
});

export default PaymentDetailsScreen;
