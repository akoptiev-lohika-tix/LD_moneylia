import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

import JoinScreen from './src/screens/join-screen/join-screen';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { RootStackParamList } from './src/interfaces';
import MainApp from './src/components/main-app/main-app';
import NotFoundScreen from './src/screens/not-found-screen/not-found-screen';
import { colors } from './src/variables';

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

        const imageAssets = cacheImages([require('./src/assets/images/join-screen-image.png')]);

        const fontAssets = cacheFonts([
          { 'Work Sans Regular': require('./src/assets/fonts/WorkSans-Regular.ttf') },
          { 'Work Sans SemiBold': require('./src/assets/fonts/WorkSans-SemiBold.ttf') },
          { 'Rubik Regular': require('./src/assets/fonts/Rubik-Regular.ttf') },
          { 'Rubik Medium': require('./src/assets/fonts/Rubik-Medium.ttf') },
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
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="JoinScreen">
          <Stack.Screen name="JoinScreen" component={JoinScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainApp} options={{ headerShown: false }} />
          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{
              title: '',
              headerStyle: { backgroundColor: colors.primary.light },
              headerTintColor: colors.common.black,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
