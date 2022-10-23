import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import NotFoundIcon from '../../svg-icons/not-found-icon';
import { colors, NOT_FOUND_SCREEN_TEXT, shadows } from '../../variables';

const NotFoundScreen: React.FC = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.container}>
        <View style={styles.contentBox}>
          <NotFoundIcon
            width={28}
            height={28}
            color={colors.error.main}
            testID={'not-found-icon'}
          />
          <Text style={styles.text}>{NOT_FOUND_SCREEN_TEXT}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 120,
    backgroundColor: colors.primary.light,
    flex: 1,
  },
  contentBox: {
    flexDirection: 'row',
    backgroundColor: colors.common.white,
    borderRadius: 12,
    shadowColor: shadows.shadow1.shadowColor,
    shadowOffset: shadows.shadow1.shadowOffset,
    paddingVertical: 48,
    paddingHorizontal: 12,
  },
  text: {
    fontFamily: 'Work Sans SemiBold',
    fontSize: 18,
    lineHeight: 20,
    color: colors.primary.main,
    marginLeft: 10,
  },
});

export default NotFoundScreen;
