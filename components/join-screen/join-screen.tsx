import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import {
    useFonts,
    WorkSans_400Regular,
    WorkSans_600SemiBold,
} from '@expo-google-fonts/work-sans';
import { Rubik_400Regular } from '@expo-google-fonts/rubik';

import TextStyled from '../text-styled/text-styled';
import {
    colors,
    JOIN_SCREEN_BUTTON_TEXT,
    JOIN_SCREEN_DESCRIPTION,
    JOIN_SCREEN_LINK_TEXT,
    JOIN_SCREEN_TITLE,
} from '../../variables';

const JoinScreen: React.FC = () => {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        WorkSans_600SemiBold,
        Rubik_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={require('../../assets/join-screen-image.png')} />
            </View>
            <View style={styles.content}>
                <View style={styles.title}>
                    <TextStyled
                        text={JOIN_SCREEN_TITLE}
                        fontFamily={'WorkSans_600SemiBold'}
                        fontSize={32}
                        lineHeight={38}
                        color={colors.primary.main}
                    />
                </View>
                <View style={styles.description}>
                    <TextStyled
                        text={JOIN_SCREEN_DESCRIPTION}
                        fontFamily={'WorkSans_400Regular'}
                        fontSize={14}
                        lineHeight={21}
                        color={colors.grey.main}
                        letterSpacing={-0.5}
                        textAlign={'center'}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <TextStyled
                            text={JOIN_SCREEN_BUTTON_TEXT}
                            fontFamily={'WorkSans_600SemiBold'}
                            fontSize={18}
                            lineHeight={18}
                            color={colors.common.white}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <TextStyled
                        text={JOIN_SCREEN_LINK_TEXT}
                        fontFamily={'Rubik_400Regular'}
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
        backgroundColor: colors.primary.light,
        paddingHorizontal: 75,
        paddingVertical: 16,
        borderRadius: 4,
        marginBottom: 24,
    },
});

export default JoinScreen;
