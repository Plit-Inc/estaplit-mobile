import { TouchableWithoutFeedback, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import React, { useCallback, useEffect, useState } from 'react';
import {
  configureFonts,
  MD2LightTheme,
  PaperProvider,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  colors,
  fontsLoadedConfig,
  paperFontConfig,
} from './src/constants/index';
import * as Constants from './src/constants/index';
import HomeScreen from './src/views/Home';
import ParkingListScreen from './src/views/ParkingList';
import ReserveParking from './src/views/ReserveParking';

import Routes from './src/routes/routes';

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts(fontsLoadedConfig);
  const paperTheme = {
    ...MD2LightTheme,

    fonts: configureFonts({ config: Constants.paperFontConfig, isV3: false }),
    colors: {
      ...MD2LightTheme.colors,
      primary: Constants.colors.primary[600],
      secondary: Constants.colors.primary[400],
    },
  };

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <PaperProvider theme={paperTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View onLayout={onLayoutRootView} />
        <Routes />
      </GestureHandlerRootView>
    </PaperProvider>
  );
}

export default App;
