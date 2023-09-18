import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainButton from './src/components/utils/MainButton';
import * as SplashScreen from 'expo-splash-screen';
import { fontsLoadedConfig } from './src/constants/index.js';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

export default function App() {
  const [fontsLoaded] = useFonts(fontsLoadedConfig);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text>Open up App.js to star working on your app!</Text>
      <MainButton text={"teste"} buttonName={"arrow-forward"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
