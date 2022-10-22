import { Pressable, Text, StyleSheet, View } from 'react-native';

import DashboardTabIcon from '../../../svg-icons/dashboard-tab-icon';
import { colors } from '../../../variables';

const DashboardTab = (props: any) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Rubik Regular',
      fontSize: 11,
      lineHeight: 13,
      letterSpacing: 0.01,
      color: props.accessibilityState.selected ? colors.primary.dark : colors.grey.light,
    },
    iconView: {
      marginTop: 8,
      marginBottom: 6,
    },
  });
  return (
    <Pressable
      {...props}
      style={
        props.accessibilityState.selected
          ? [props.style, { borderTopColor: colors.primary.dark, borderTopWidth: 2 }]
          : props.style
      }
    >
      <View style={styles.iconView}>
        <DashboardTabIcon
          width={22}
          height={22}
          color={props.accessibilityState.selected ? colors.primary.dark : colors.grey.light}
        />
      </View>
      <Text style={styles.text}>Dashboard</Text>
    </Pressable>
  );
};

export default DashboardTab;
