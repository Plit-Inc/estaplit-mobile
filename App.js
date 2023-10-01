import { TouchableWithoutFeedback, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import React, { useCallback, useEffect, useState } from 'react';
import {
  configureFonts,
  MD2LightTheme,
  PaperProvider,
} from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  colors,
  fontsLoadedConfig,
  paperFontConfig,
} from './src/constants/index';
import * as Constants from './src/constants/index';


import Routes from './src/routes/routes';

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts(fontsLoadedConfig);
  const paperTheme = {
    ...MD2LightTheme,
    fonts: configureFonts({config: Constants.paperFontConfig, isV3: false}),
    colors: {
      ...MD2LightTheme.colors,
      primary: Constants.colors.primary[500],
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
      <View onLayout={onLayoutRootView} />
      <Routes/>

    </PaperProvider>
  );
}

export default App;
