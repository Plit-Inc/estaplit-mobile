import { View, Text } from 'react-native'
import React from 'react'
import { SectionTitle, SectionSubtitle } from '../../../constants';
export default function PolicyMessage({title, message}) {
  return (
    <View style={{gap: 16}}>
      <SectionTitle>{title}</SectionTitle>
      <SectionSubtitle>{message}</SectionSubtitle>
    </View>
  )
}