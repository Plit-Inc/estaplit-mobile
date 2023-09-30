import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { fontsLoadedConfig } from '../../constants/index.js';
import { useFonts } from 'expo-font';
import { GlobalContext} from '../../Context/index.js';

export default class ReserveParking extends Component {
  render() {
    return (
      <View>
        <Text>ReserveParking</Text>
       <GlobalContext.Consumer>
          {({ scheduling }) => (
            <Text>{scheduling.warning}</Text>
          )}
        </GlobalContext.Consumer>
      </View>
    )
  }
}