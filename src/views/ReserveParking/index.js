import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { fontsLoadedConfig } from '../../constants/index.js';
import { useFonts } from 'expo-font';
import { DriverContext} from '../../Context/index.js';

export default class ReserveParking extends Component {
  render() {
    return (
      <View>
        <Text>ReserveParking</Text>
       <DriverContext.Consumer>
          {({ scheduling }) => (
            <Text>{scheduling.warning}</Text>
          )}
        </DriverContext.Consumer>
      </View>
    )
  }
}