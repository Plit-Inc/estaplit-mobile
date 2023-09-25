/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from '@expo/vector-icons/Ionicons';

import { navigationConfig } from './src/constants';
import HomeScreen from './src/components/screens/HomeScreen';
import ComponentsScreen from './src/components/screens/ComponentsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Components"
          component={ComponentsScreen}
          options={({ navigation }) => ({
            headerTitle: 'Entrar',
            title: 'Entrar',
            headerTitleAlign: 'center',
            headerTintColor: navigationConfig.Utils.Color,
            headerLeft: () => (
              <TouchableWithoutFeedback onPress={navigation.goBack}>
                <Ionicons
                  name="arrow-back"
                  size={navigationConfig.Utils.IconSize}
                  color={navigationConfig.Utils.Color}
                />
              </TouchableWithoutFeedback>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
