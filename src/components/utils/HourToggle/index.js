import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { HourToggleStyle,MainToggleTextStyle,HourToggleTextStyle } from './style.js'

export default function HourToggle({ hour,parkingAmount,isSelected }){
    const status = parkingAmount > 1 ? "Vagas disponíveis" : "Vaga disponível";
    return (
      <HourToggleStyle isSelected={isSelected}>
        <HourToggleTextStyle isSelected={isSelected}>{hour}</HourToggleTextStyle>
        <MainToggleTextStyle isSelected={isSelected}>{parkingAmount} {status}</MainToggleTextStyle>
      </HourToggleStyle>
    )
  
}