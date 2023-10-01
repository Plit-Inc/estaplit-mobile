import { View, Text } from 'react-native'
import React from 'react'
import Title from '../utils/Title/index.js'
import { InfoContainer, InfoHeader, InfoCode, InfoDate, DateTimeContainer, InfoStatus, DateTimeCard, InfoCodeContainer, WarningText, InfoStatusContainer,WarningContainer } from './style.js'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AutoCompleteConfig, colors } from '../../constants/index.js'

export default function SchedulingInfo({ title, status, parkingCode, date, hour, }) {
  return (
    <InfoContainer>
      <InfoHeader>
        <Title text={title}/>
        {status && 
          <InfoStatusContainer>
            <InfoStatus>{status}</InfoStatus>
          </InfoStatusContainer>}
      </InfoHeader>
      {parkingCode &&
        <InfoCodeContainer>
          <Text>Código da Reserva</Text>
          <InfoCode>{parkingCode}</InfoCode>
        </InfoCodeContainer>
         }
      <DateTimeContainer>
          <DateTimeCard>
            <Text>Data</Text>
            <InfoDate>{date}</InfoDate>
          </DateTimeCard>
          <DateTimeCard>
            <Text>Horário</Text>
            <InfoDate>{hour}</InfoDate>
          </DateTimeCard>
        </DateTimeContainer>
      <WarningContainer>
      <Ionicons
              name="warning-outline"
              size={AutoCompleteConfig.RowIcon.size}
              color={AutoCompleteConfig.Icon.color}
              style={{ color: colors.alert[600] }}
            />
      <WarningText>Se liga! Tolerância máxima de 1 hora após o horário agendado.</WarningText>
      </WarningContainer>
      
    </InfoContainer>
  )
}