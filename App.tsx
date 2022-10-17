import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

import JoinScreen from './src/screens/join-screen/join-screen';


function cacheImages(images: any[]): Promise<any>[] {
    return images.map((image) => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

function cacheFonts(fonts: any[]): Promise<void>[] {
    return fonts.map((font) => Font.loadAsync(font));
}

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);
    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                const imageAssets = cacheImages([
                    require('./src/assets/join-screen-image.png'),
                ]);

                const fontAssets = cacheFonts([
                    { FontSource: '@expo-google-fonts/work-sans' },
                    { FontSource: '@expo-google-fonts/rubik' },
                ]);

                await Promise.all([...imageAssets, ...fontAssets]);
            } catch (e: any) {
                // You might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setAppIsReady(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    if (!appIsReady) {
        return null;
    }

    return (
        <React.StrictMode>
            <View>
                <JoinScreen />
            </View>
        </React.StrictMode>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
