import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {
  colors,
  DASHBOARD_CONTRIBUTIONS_ADVANCED_PAYMENT_TITLE,
  DASHBOARD_CONTRIBUTIONS_DUE_TITLE,
  DASHBOARD_CONTRIBUTIONS_MODULARITY_TITLE,
  DASHBOARD_CONTRIBUTIONS_PAID_TITLE,
} from '../../variables';
import { useAppSelector } from '../../redux/hooks';
import { useCurrentContribution } from '../../hooks';
import UserSummaryContributionDataView from '../user-summary-contribution-data-view/user-summary-contribution-data-view';
import PaidIcon from '../../svg-icons/paid-icon';
import DueIcon from '../../svg-icons/due-icon';
import AdvancePaymentIcon from '../../svg-icons/advance-payment-icon';
import ModularityIcon from '../../svg-icons/modularity-icon';

const UserSummaryContributions: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);
  let current = null;

  if (user?.contributions) {
    current = useCurrentContribution(user.contributions, 2022);
  }

  return (
    <View>
      {current && (
        <>
          <Text style={styles.title}> {`Contributions of ${current.year}`}</Text>
          <View style={[styles.content, styles.topContent]}>
            <UserSummaryContributionDataView
              icon={PaidIcon}
              title={DASHBOARD_CONTRIBUTIONS_PAID_TITLE}
              value={current.data.paid}
              iconHeight={32}
              iconWidth={32}
              iconColor={colors.primary.dark}
            />
            <View style={styles.gap} />
            <UserSummaryContributionDataView
              icon={DueIcon}
              title={DASHBOARD_CONTRIBUTIONS_DUE_TITLE}
              value={current.data.due}
              iconHeight={32}
              iconWidth={32}
              iconColor={colors.primary.dark}
            />
          </View>
          <View style={styles.content}>
            <UserSummaryContributionDataView
              icon={AdvancePaymentIcon}
              title={DASHBOARD_CONTRIBUTIONS_ADVANCED_PAYMENT_TITLE}
              value={current.data.advancePayment}
              iconHeight={32}
              iconWidth={32}
              iconColor={colors.primary.dark}
            />
            <View style={styles.gap} />
            <UserSummaryContributionDataView
              icon={ModularityIcon}
              title={DASHBOARD_CONTRIBUTIONS_MODULARITY_TITLE}
              value={current.data.modularity}
              iconHeight={32}
              iconWidth={32}
              iconColor={colors.primary.dark}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topContent: {
    marginBottom: 16,
  },
  gap: {
    flex: 0.1,
  },
  title: {
    fontFamily: 'Rubik Medium',
    fontSize: 22,
    lineHeight: 26,
    color: colors.primary.main,
    marginBottom: 16,
  },
});

export default UserSummaryContributions;
