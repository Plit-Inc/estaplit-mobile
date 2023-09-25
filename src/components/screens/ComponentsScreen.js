import React, { useState, useEffect } from 'react';
import { ScrollView, Button, View, Text } from 'react-native';
import * as Font from 'expo-font';
import {
  configureFonts,
  MD2LightTheme,
  PaperProvider,
} from 'react-native-paper';

import MainButton from '../utils/MainButton';
import ParkingCard from '../utils/ParkingCard';
import TicketCard from '../utils/TicketCard';
import Input from '../utils/Input';
import DateToggle from '../utils/DateToggle';
import {
  fontsLoadedConfig,
  paperFontConfig,
  colors,
} from '../../constants/index';

function ComponentsScreen({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isSelected, setIsSelected] = useState(true);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync(fontsLoadedConfig);
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  const paperTheme = {
    ...MD2LightTheme,
    fonts: configureFonts({ config: paperFontConfig, isV3: false }),
    colors: {
      ...MD2LightTheme.colors,
      primary: colors.primary[600],
      secondary: colors.primary[400],
    },
  };

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
      >
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
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
