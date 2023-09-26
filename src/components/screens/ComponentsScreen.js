import React, { useCallback, useState } from 'react';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {
  configureFonts,
  MD2LightTheme,
  PaperProvider,
} from 'react-native-paper';
import MainButton from '../utils/MainButton';
import {
  fontsLoadedConfig,
  paperFontConfig,
  colors,
} from '../../constants/index';
import ParkingCard from '../utils/ParkingCard';
import TicketCard from '../utils/TicketCard';
import Input from '../utils/Input';
import DateToggle from '../utils/DateToggle';

function ComponentsScreen({ navigation }) {
  const paperTheme = {
    ...MD2LightTheme,
    fonts: configureFonts({ config: paperFontConfig, isV3: false }),
    colors: {
      ...MD2LightTheme.colors,
      primary: colors.primary[600],
      secondary: colors.primary[400],
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

export default ComponentsScreen;
