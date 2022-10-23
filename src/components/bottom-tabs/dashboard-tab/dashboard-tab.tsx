import { Pressable, Text, StyleSheet, View } from 'react-native';

import DashboardTabIcon from '../../../svg-icons/dashboard-tab-icon';
import { colors } from '../../../variables';

const DashboardTab = (props: any) => {
  const styles = StyleSheet.create({
    container: {
      marginRight: 28,
    },
    iconContainer: {
      marginBottom: 2,
    },
    text: {
      fontFamily: 'Rubik Regular',
      fontSize: 11,
      lineHeight: 13,
      letterSpacing: 0.01,
      color: props.accessibilityState.selected ? colors.primary.dark : colors.grey.light,
    },
  });
  return (
    <View style={styles.container}>
      <Pressable
        {...props}
        style={
          props.accessibilityState.selected
            ? [props.style, { borderTopColor: colors.primary.dark, borderTopWidth: 2 }]
            : props.style
        }
      >
        <View style={styles.iconContainer}>
          <DashboardTabIcon
            width={28}
            height={28}
            color={props.accessibilityState.selected ? colors.primary.dark : colors.grey.light}
          />
        </View>
        <Text style={styles.text}>Dashboard</Text>
      </Pressable>
    </View>
  );
};

export default DashboardTab;
