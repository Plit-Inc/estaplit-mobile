import { View, Text } from 'react-native'
import React from 'react'
import { SectionTitle, SectionSubtitle } from '../../constants/index.js';
import MapsButton from '../utils/MapsButton/index.js';

export default function AddressInfo({title,address}) {
  return (
    <View>
        <SectionTitle>{title}</SectionTitle>
        <SectionSubtitle style={{marginBottom: 16}}>{address}</SectionSubtitle>
        <MapsButton text={"Ver no mapa"} style={{height:55}}  onPress={() => {showLocation({latitude: 38.8976763, longitude: -77.0387185})}}/>
    </View>
  )
}