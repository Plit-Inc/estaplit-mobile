/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from 'react';
import { View, Text, Button, Image, TouchableWithoutFeedback } from 'react-native';
import EstaplitBlueIcon from '../../../assets/estaplit-icon-blue.png'

function HomeScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <TouchableWithoutFeedback>
          <Image style={{ height: 24 }} source={EstaplitBlueIcon} />
        </TouchableWithoutFeedback>
      ),
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      headerTransparent: true,
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Components')}
      />
    </View>
  );
}

export default HomeScreen;
