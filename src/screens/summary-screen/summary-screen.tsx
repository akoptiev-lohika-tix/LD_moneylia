import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import { colors, WELCOME_TEXT } from '../../variables';
import LogoIcon from '../../svg-icons/logo-icon';
import ChatIcon from '../../svg-icons/chat-icon';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchUserById } from '../../redux/slices/user-slice';
import { USER_ID } from '../../constants';
import { useShortName } from '../../hooks';
import UserSummary from '../../components/user-summary/user-summary';
import Spinner from '../../components/spinner/spinner';
import ErrorView from '../../components/error-view/error-view';
import UserSummaryContributions from '../../components/user-summary-contributions/user-summary-contributions';

const SummaryScreen: React.FC = () => {
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
              <View style={styles.iconBar}>
                <LogoIcon color={colors.common.white} width={28} height={22} />
                <ChatIcon color={colors.common.white} width={28} height={28} />
              </View>
              <View>
                <Text style={styles.nameText}>Hello, {shortName}</Text>
                <Text style={styles.welcomeText}>{WELCOME_TEXT}</Text>
              </View>
            </View>
            <View style={styles.content}>
              <UserSummary />
              <UserSummaryContributions />
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary.light,
  },
  topBar: {
    backgroundColor: colors.primary.dark,
    height: 294,
    paddingTop: 60,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },

  iconBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 34,
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
    top: -90,
  },
});
