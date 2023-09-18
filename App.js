import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainButton from './src/components/utils/MainButton';
import * as SplashScreen from 'expo-splash-screen';
import { fontsLoadedConfig } from './src/constants/index.js';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import ParkingCard from "./src/components/utils/ParkingCard";

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
      <ParkingCard
        title="EstacPark Estacionamento"
        distance="500m"
        price="R$4,00"
        review="4,3 (233)"
        hours="07:00-19:00"
        imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPj75K_sEqrv8AGse7wFoVaWszWv1WMerYnDkeI4y4pIqE7mYyCDSDsolJbvWzNNMyIg&usqp=CAU"
        isOpen
      />
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
