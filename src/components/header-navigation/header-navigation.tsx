import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NativeStackHeaderProps, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { colors } from '../../variables';
import HeaderArrowIcon from '../../svg-icons/header-arrow-icon';
import { RootParamList } from '../../interfaces';
import { useNavigation } from '@react-navigation/native';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';

type Props = NativeStackHeaderProps | BottomTabHeaderProps;

const HeaderNavigation: React.FC<Props> = ({ options }) => {
  const navigation: NativeStackNavigationProp<RootParamList> = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Pressable
          style={({ pressed }) => (pressed ? styles.pressed : null)}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <HeaderArrowIcon color={colors.common.white} />
        </Pressable>
        <Text style={styles.headerText}>{options.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    height: 100,
    backgroundColor: colors.rose.main,
    paddingHorizontal: 16,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Work Sans Regular',
    fontSize: 16,
    lineHeight: 19,
    color: colors.common.white,
    marginLeft: 80,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default HeaderNavigation;
