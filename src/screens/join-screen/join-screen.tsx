import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import TextStyled from '../../components/text-styled/text-styled';
import {
  colors,
  JOIN_SCREEN_BUTTON_TEXT,
  JOIN_SCREEN_DESCRIPTION,
  JOIN_SCREEN_LINK_TEXT,
  JOIN_SCREEN_TITLE,
} from '../../variables';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../interfaces';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'JoinScreen'>;
};

const JoinScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require('../../assets/images/join-screen-image.png')} />
      </View>
      <View style={styles.content}>
        <View style={styles.title}>
          <TextStyled
            text={JOIN_SCREEN_TITLE}
            fontFamily={'Work Sans SemiBold'}
            fontSize={32}
            lineHeight={38}
            color={colors.primary.main}
          />
        </View>
        <View style={styles.description}>
          <TextStyled
            text={JOIN_SCREEN_DESCRIPTION}
            fontFamily={'Work Sans Regular'}
            fontSize={14}
            lineHeight={21}
            color={colors.grey.main}
            letterSpacing={-0.5}
            textAlign={'center'}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Summary')}
            testID={'join-button'}
          >
            <TextStyled
              text={JOIN_SCREEN_BUTTON_TEXT}
              fontFamily={'Work Sans SemiBold'}
              fontSize={18}
              lineHeight={18}
              color={colors.common.white}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.link}>
          <TextStyled
            text={JOIN_SCREEN_LINK_TEXT}
            fontFamily={'Rubik Regular'}
            fontSize={14}
            lineHeight={21}
            color={colors.primary.main}
            textDecorationLine={'underline'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 84,
    paddingHorizontal: 20,
    backgroundColor: colors.common.white,
    height: '100%',
  },
  image: {
    marginBottom: 24,
  },
  content: {
    paddingHorizontal: 36,
  },
  title: {
    marginBottom: 8,
  },
  description: {
    marginBottom: 60,
  },
  button: {
    backgroundColor: colors.primary.dark,
    paddingHorizontal: 75,
    paddingVertical: 16,
    borderRadius: 4,
    marginBottom: 24,
  },
  link: {
    alignItems: 'center',
  },
});

export default JoinScreen;
