import { TouchableWithoutFeedback, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import React, { useCallback, useState } from 'react';
import {
  configureFonts,
  MD2LightTheme,
  PaperProvider,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  colors,
  fontsLoadedConfig,
  paperFontConfig,
} from './src/constants/index';
import HomeScreen from './src/views/Home';
import ParkingListScreen from './src/views/ParkingList';

const Stack = createNativeStackNavigator();

function App() {
  const paperTheme = {
    ...MD2LightTheme,
    fonts: configureFonts({
      config: paperFontConfig,
      isV3: false,
    }),
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
      <View onLayout={onLayoutRootView} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#FEFEFE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ParkingList"
            component={ParkingListScreen}
            options={({ navigation }) => ({
              headerLeft: () => (
                <TouchableWithoutFeedback onPress={navigation.goBack}>
                  <Ionicons
                    name="arrow-back"
                    size={24}
                    color={colors.primary[500]}
                  />
                </TouchableWithoutFeedback>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
