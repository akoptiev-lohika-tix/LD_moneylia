import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

import JoinScreen from './screens/join-screen/join-screen';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { RootStackParamList } from './interfaces';
import MainApp from './components/main-app/main-app';
import NotFoundScreen from './screens/not-found-screen/not-found-screen';
import { PAYMENT_DETAILS_NAV_TITLE } from './variables';
import PaymentDetailsScreen from './screens/payment-details-screen/payment-details-screen';
import HeaderNavigation from './components/header-navigation/header-navigation';

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

const App: React.FC = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();

        const imageAssets = cacheImages([require('./assets/images/join-screen-image.png')]);

        const fontAssets = cacheFonts([
          { 'Work Sans Regular': require('./assets/fonts/WorkSans-Regular.ttf') },
          { 'Work Sans SemiBold': require('./assets/fonts/WorkSans-SemiBold.ttf') },
          { 'Rubik Regular': require('./assets/fonts/Rubik-Regular.ttf') },
          { 'Rubik Medium': require('./assets/fonts/Rubik-Medium.ttf') },
        ]);

        await Promise.all([...imageAssets, ...fontAssets]);
      } catch (e: any) {
        // You might want to provide this error information to an error reporting service
        console.log(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
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
        <Stack.Navigator
          initialRouteName="JoinScreen"
          screenOptions={{ header: (props) => <HeaderNavigation {...props} /> }}
        >
          <Stack.Screen name="JoinScreen" component={JoinScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainApp} options={{ headerShown: false }} />
          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{
              title: '',
            }}
          />
          <Stack.Screen
            name="PaymentDetails"
            component={PaymentDetailsScreen}
            options={{
              title: PAYMENT_DETAILS_NAV_TITLE,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
