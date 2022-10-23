import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {
  colors,
  shadows,
  SUMMARY_TITLE,
  USER_SUMMARY_BIRTHDAY_TITLE,
  USER_SUMMARY_CITY_TITLE,
  USER_SUMMARY_COUNTRY_TITLE,
  USER_SUMMARY_NUMBER_TITLE,
  USER_SUMMARY_STATUS_TITLE,
} from '../../variables';
import UserIcon from '../../svg-icons/user-icon';
import { useAppSelector } from '../../redux/hooks';
import UserSummaryDataView from '../dashboard-user-summary-data-view/dashboard-user-summary-data-view';

const DashboardUserSummary: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <UserIcon color={colors.primary.dark} width={20} height={20} />
        <Text style={styles.titleText}>{SUMMARY_TITLE}</Text>
      </View>
      <View style={styles.dataTopBar}>
        <UserSummaryDataView
          title={USER_SUMMARY_STATUS_TITLE}
          data={user?.status}
          marginRight={12}
        />
        <UserSummaryDataView title={USER_SUMMARY_BIRTHDAY_TITLE} data={user?.birthday} />
      </View>
      <View style={styles.dataTopBar}>
        <UserSummaryDataView title={USER_SUMMARY_CITY_TITLE} data={user?.city} marginRight={12} />
        <UserSummaryDataView
          title={USER_SUMMARY_COUNTRY_TITLE}
          data={user?.country}
          marginRight={12}
          width={64}
        />
        <UserSummaryDataView title={USER_SUMMARY_NUMBER_TITLE} data={user?.id} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.common.white,
    borderRadius: 12,
    shadowColor: shadows.shadow1.shadowColor,
    shadowOffset: shadows.shadow1.shadowOffset,
    shadowRadius: 6,
    paddingTop: 26,
    paddingBottom: 24,
    paddingHorizontal: 26,
    marginBottom: 24,
  },
  title: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  titleText: {
    fontFamily: 'Work Sans SemiBold',
    fontSize: 16,
    lineHeight: 19,
    color: colors.primary.main,
    marginLeft: 10,
  },
  dataTopBar: {
    flexDirection: 'row',
    marginBottom: 16,
  },
});

export default DashboardUserSummary;
