import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../../variables';

type Props = {
  title: string;
  data: any;
  marginRight?: number;
  width?: number;
};

const UserSummaryDataView: React.FC<Props> = ({ title, data, marginRight = 0, width = 140 }) => {
  const styles = StyleSheet.create({
    container: {
      width: width,
      marginRight: marginRight,
    },
    title: {
      marginBottom: 4,
      fontFamily: 'Work Sans Regular',
      fontSize: 12,
      lineHeight: 14,
      color: colors.grey.main,
    },
    data: {
      fontFamily: 'Work Sans Regular',
      fontSize: 16,
      lineHeight: 19,
      color: colors.grey.dark,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.data}>{data}</Text>
    </View>
  );
};

export default memo(UserSummaryDataView);
