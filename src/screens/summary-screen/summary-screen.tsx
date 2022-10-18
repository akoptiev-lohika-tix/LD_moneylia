import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { colors, WELCOME_TEXT } from '../../variables';

const SummaryScreen: React.FC = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View style={styles.iconBar}>
            <Image source={require('../../assets/logo-white.png')} />
            <Image source={require('../../assets/chat-icon.png')} />
          </View>
          <View>
            <Text style={styles.nameText}>Hello, John</Text>
            <Text>{WELCOME_TEXT}</Text>
          </View>
        </View>
        <Text>Summary</Text>
      </View>
    </>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary.light,
    height: '100%',
  },
  topBar: {
    backgroundColor: colors.primary.dark,
    height: 294,
    paddingTop: 80,
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
    fontFamily: 'Work-Sans'
  }
});
