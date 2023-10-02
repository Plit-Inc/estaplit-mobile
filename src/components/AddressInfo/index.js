import { View, Text } from 'react-native'
import React from 'react'
import { SectionTitle, SectionSubtitle } from '../../constants/index.js';
import MapsButton from '../utils/MapsButton/index.js';
import {showLocation} from "react-native-map-link";

export default function AddressInfo({title,address}) {
  return (
    <View style={{flex: 1, gap: 16}}>
      <SectionTitle>{title}</SectionTitle>
      <SectionSubtitle>{address}</SectionSubtitle>
      <MapsButton text={"Ver no mapa"} style={{height:55}} onPress={() => {showLocation({latitude: selectedParkingSpace.latitude, longitude: selectedParkingSpace.longitude})}}/>
    </View>
  )
}