import { View, Text } from 'react-native'
import React from 'react'
import { AddressContainer } from './styled.js'
import Title from '../utils/Title/index.js'
import { colors } from '../../constants/index.js'
import MainButton from '../utils/MainButton/index.js'


export default function AddressCard({ address }) {
  return (
    <AddressContainer>
        <Title text={'Endereço'}/>
        <Text style={{color: colors.gray[600]}}>{address}</Text>
        <MainButton style={{margin: 15, backgroundColor:colors.gray[300]}} text={"Ver no mapa"} styleName="transparent" iconName=""/>
    </AddressContainer>
  )
}