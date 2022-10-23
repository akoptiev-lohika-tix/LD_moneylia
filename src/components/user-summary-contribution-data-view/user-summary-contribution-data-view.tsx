import React, { memo, NamedExoticComponent } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { colors, shadows } from '../../variables';
import { financeTransformer } from '../../helpers';
import { useAppSelector } from '../../redux/hooks';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../interfaces';

type Props = {
  icon: NamedExoticComponent<SvgProps>;
  title: string;
  value: number | null;
  iconWidth: number;
  iconHeight: number;
  iconColor: string;
  navigation: NativeStackNavigationProp<RootStackParamList, 'NotFound'>;
};

const UserSummaryContributionDataView: React.FC<Props> = ({
  icon,
  title,
  value,
  iconWidth,
  iconHeight,
  iconColor,
  navigation,
}) => {
  const { user } = useAppSelector((state) => state.user);
  const IconComponent = icon;
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed ? styles.pressed : null]}
      onPress={() => navigation.navigate('NotFound')}
    >
      <View style={styles.icon}>
        <IconComponent width={iconWidth} height={iconHeight} color={iconColor} />
      </View>

      <Text style={styles.title}>{title}</Text>
      {value ? (
        <Text style={styles.value}>{financeTransformer(value, user?.currency)}</Text>
      ) : (
        <Text style={[styles.value, styles.valueError]}>Unavailable</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.common.white,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: shadows.shadow1.shadowColor,
    shadowOffset: shadows.shadow1.shadowOffset,
    paddingVertical: 24,
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: colors.grey.pressed,
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Work Sans Regular',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: -0.5,
    color: colors.grey.light,
    marginBottom: 4,
  },
  value: {
    fontFamily: 'Work Sans Regular',
    fontSize: 16,
    lineHeight: 19,
    color: colors.primary.main,
  },
  valueError: {
    color: colors.error.main,
  },
});

export default memo(UserSummaryContributionDataView);
