import { View, Text } from 'react-native'
import React from 'react'
import Title from '../utils/Title/index.js'
import {
  InfoContainer,
  InfoHeader,
  InfoCode,
  InfoDate,
  DateTimeContainer,
  InfoStatus,
  DateTimeCard,
  InfoCodeContainer,
  WarningText,
  InfoStatusContainer,
  WarningContainer,
  InfoDateTitle
} from './style.js'
import Ionicons from '@expo/vector-icons/Ionicons';
import {AutoCompleteConfig, colors, SectionTitle} from '../../constants/index.js'
import WarningCard from "../utils/WarningCard";

export default function SchedulingInfo({ title, status, parkingCode, date, hour, }) {
  return (
    <InfoContainer>
      <InfoHeader>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <SectionTitle>{title}</SectionTitle>
          {status &&
            <InfoStatusContainer>
              <InfoStatus>{status}</InfoStatus>
            </InfoStatusContainer>}
        </View>
      {parkingCode &&
        <InfoCodeContainer>
          <Text>Código da Reserva</Text>
          <InfoCode>{parkingCode}</InfoCode>
        </InfoCodeContainer>
         }
      <DateTimeContainer>
          <DateTimeCard>
            <InfoDateTitle>Data</InfoDateTitle>
            <InfoDate>{date}</InfoDate>
          </DateTimeCard>
          <DateTimeCard>
            <InfoDateTitle>Horário</InfoDateTitle>
            <InfoDate>{hour}</InfoDate>
          </DateTimeCard>
        </DateTimeContainer>
      </InfoHeader>
      <WarningCard style={{marginTop: 16}} type={'message'} text={"Se liga! Tolerância máxima de 1 hora após o horário agendado."}/>
      
    </InfoContainer>
  )
}