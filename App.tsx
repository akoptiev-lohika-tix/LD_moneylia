import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

import JoinScreen from './src/screens/join-screen/join-screen';
import SummaryScreen from './src/screens/summary-screen/summary-screen';

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

        const imageAssets = cacheImages([require('./src/assets/join-screen-image.png')]);

        const fontAssets = cacheFonts([
          { 'Work-Sans': '@expo-google-fonts/work-sans' },
          { 'Rubik': '@expo-google-fonts/rubik' },
        ]);

        await Promise.all([...imageAssets, ...fontAssets]);
      } catch (e: any) {
        // You might want to provide this error information to an error reporting service
        console.log(e);
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
    <SummaryScreen />
    // <JoinScreen />
  );
}
