import { Pressable, Text, StyleSheet, View } from 'react-native';

import { colors } from '../../../variables';
import ProfileTabIcon from '../../../svg-icons/profile-tab-icon';

const ProfileTab = (props: any) => {
  const styles = StyleSheet.create({
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
    <View>
      <Pressable
        {...props}
        style={
          props.accessibilityState.selected
            ? [props.style, { borderTopColor: colors.primary.dark, borderTopWidth: 2 }]
            : props.style
        }
      >
        <View style={styles.iconContainer}>
          <ProfileTabIcon
            width={28}
            height={28}
            color={props.accessibilityState.selected ? colors.primary.dark : colors.grey.light}
          />
        </View>
        <Text style={styles.text}>Profile</Text>
      </Pressable>
    </View>
  );
};

export default ProfileTab;
