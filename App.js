import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback, useState } from 'react';
import {
  configureFonts,
  MD2LightTheme,
  PaperProvider,
} from 'react-native-paper';
import Input from './src/components/utils/Input';
import { fontsLoadedConfig } from './src/constants/index.js';
import MainButton from './src/components/utils/MainButton';
import * as Constants from './src/constants/index';
import DateToggle from './src/components/utils/DateToggle';
import HomeScreen from './src/views/Home';

export default function App() {
  const paperTheme = {
    ...MD2LightTheme,
    fonts: configureFonts({ config: Constants.paperFontConfig, isV3: false }),
    colors: {
      ...MD2LightTheme.colors,
      primary: Constants.colors.primary[600],
      secondary: Constants.colors.primary[400],
    },
  };
  const [fontsLoaded] = useFonts(fontsLoadedConfig);
  const [inputText, setInputText] = useState('');
  const [isSelected, setIsSelected] = useState(true);

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
      <ScrollView onLayout={onLayoutRootView}>
        <HomeScreen />
      </ScrollView>
    </PaperProvider>
  );
}
