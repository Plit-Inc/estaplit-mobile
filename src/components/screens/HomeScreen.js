import React from 'react';
import { Button, View, Text, TouchableWithoutFeedback } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Components List"
        onPress={() => navigation.navigate('Components')}
      />
    </View>
  );
}

export default HomeScreen;