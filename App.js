import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import {
  configureFonts,
  MD2LightTheme,
  PaperProvider,
} from 'react-native-paper';
import MainButton from './src/components/utils/MainButton';
import { fontsLoadedConfig } from './src/constants/index.js';
import ParkingCard from './src/components/utils/ParkingCard';
import TicketCard from './src/components/utils/TicketCard';
import Input from './src/components/utils/Input';
import * as Constants from './src/constants/index';
import DateToggle from './src/components/utils/DateToggle';

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
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          padding: 20,
          gap: 10,
        }}
        onLayout={onLayoutRootView}
      >
        <Input
          label="label"
          placeholder="placeholder"
          state={inputText}
          setState={setInputText}
        />
        <MainButton
          text="action"
          iconName="arrow-forward"
          styleName="default"
        />
        <MainButton
          text="Ver detalhes"
          iconName="arrow-forward"
          styleName="transparent"
        />
        <DateToggle
          headerDateText="12/10"
          mainDateText="Hoje"
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
        <ParkingCard
          title="EstacPark Estacionamento"
          distance="500m"
          price="R$4,00"
          review="4,3 (233)"
          hours="07:00-19:00"
          imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPj75K_sEqrv8AGse7wFoVaWszWv1WMerYnDkeI4y4pIqE7mYyCDSDsolJbvWzNNMyIg&usqp=CAU"
          isOpen
        />
        <TicketCard title="Estapar Estacionamentos" />
      </ScrollView>
    </PaperProvider>
  );
}
