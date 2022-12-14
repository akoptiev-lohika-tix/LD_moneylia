import React, { memo, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import { colors, WELCOME_TEXT } from '../../variables';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { USER_ID } from '../../constants';
import { useShortName } from '../../hooks';
import DashboardUserSummary from '../../components/dashboard-user-summary/dashboard-user-summary';
import Spinner from '../../components/spinner/spinner';
import ErrorView from '../../components/error-view/error-view';
import DashboardContributions from '../../components/dashboard-contributions/dashboard-contributions';
import HeaderBar from '../../components/header-bar/header-bar';
import { fetchUserById } from '../../api';

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, loadingUser, errorUser } = useAppSelector((state) => state.user);
  const { shortName } = useShortName(user?.name);

  useEffect(() => {
    dispatch(fetchUserById(USER_ID));
  }, []);

  return (
    <>
      {loadingUser && <Spinner />}
      {errorUser && <ErrorView message={errorUser} />}
      {!loadingUser && !errorUser && (
        <>
          <StatusBar barStyle={'light-content'} />
          <View style={styles.container}>
            <View style={styles.topBar}>
              <View style={styles.headerContainer}>
                <HeaderBar />
              </View>
              <View>
                <Text style={styles.nameText}>Hello, {shortName}</Text>
                <Text style={styles.welcomeText}>{WELCOME_TEXT}</Text>
              </View>
            </View>
            <View style={styles.content}>
              <DashboardUserSummary />
              <DashboardContributions />
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default memo(Dashboard);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary.light,
  },
  topBar: {
    backgroundColor: colors.primary.dark,
    height: 294,
    paddingTop: 40,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  headerContainer: {
    marginBottom: 15,
  },
  nameText: {
    fontFamily: 'Work Sans Regular',
    fontSize: 32,
    lineHeight: 38,
    color: colors.common.white,
  },
  welcomeText: {
    fontFamily: 'Work Sans Regular',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.5,
    color: colors.common.white,
  },
  content: {
    paddingHorizontal: 16,
    top: -98,
  },
});
