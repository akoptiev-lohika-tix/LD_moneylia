import React, { memo } from 'react';
import { Pressable, View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import LogoIcon from '../../svg-icons/logo-icon';
import { colors } from '../../variables';

import ChatIcon from '../../svg-icons/chat-icon';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../interfaces';

const HeaderBar: React.FC = () => {
  const navigation: NativeStackNavigationProp<RootStackParamList, 'NotFound'> = useNavigation();

  return (
    <View style={styles.container}>
      <LogoIcon color={colors.common.white} width={28} height={22} />
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={() => navigation.navigate('NotFound')}
      >
        <ChatIcon color={colors.common.white} width={28} height={28} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default memo(HeaderBar);
