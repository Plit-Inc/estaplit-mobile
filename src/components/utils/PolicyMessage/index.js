import { View, Text } from 'react-native'
import React from 'react'
import { SectionTitle, SectionSubtitle } from '../../../constants';
export default function PolicyMessage({title, message}) {
  return (
    <View>
      <SectionTitle>{title}</SectionTitle>
      <SectionSubtitle>{message}</SectionSubtitle>
    </View>
  )
}