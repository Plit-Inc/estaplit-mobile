import React, { useCallback } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import {
  configureFonts,
  MD2LightTheme,
  PaperProvider,
} from 'react-native-paper';
import HomeScreen from "./src/views/home";
import { colors, fontsLoadedConfig, paperFontConfig } from "./src/constants";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";


const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded, setFontsLoaded] = useFonts(fontsLoadedConfig);

  // const paperTheme = {
  //   ...MD2LightTheme,
  //   fonts: configureFonts({config: paperFontConfig, isV3: false}),
  //   colors: {
  //     ...MD2LightTheme.colors,
  //     primary: colors.primary[600],
  //     secondary: colors.primary[400],
  //   },
  // };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);


  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
        <View onLayout={onLayoutRootView}/>
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
          }}
          >
            <Stack.Screen name="Home" component={HomeScreen} options={{
              headerShown: false,
            }} />
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;