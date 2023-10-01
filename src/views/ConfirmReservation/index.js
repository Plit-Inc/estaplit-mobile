import { View, Text } from 'react-native'
import * as Style from './style.js'
import React from 'react'
import ParkingCard from '../../components/utils/ParkingCard/index.js';
import SchedulingInfo from '../../components/SchedulingInfo/index.js';
import AddressCard from '../../components/AddressCard/index.js';

export default function ConfirmReservation() {
  return (
    <Style.MainView>
        <Style.StyledParkingContainer>
          <ParkingCard
            isOpen
            price="R$1,25"
            title="Estacionamento mais barato"
            distance="200m"
            review="4,5 (233)"
            hours="07:00 - 22:00"
            imagePath="https://jconlineimagem.ne10.uol.com.br/imagem/noticia/2016/04/19/normal/e7e14c4d697e5b686f8dca60cd97973f.jpg"
          />
          </Style.StyledParkingContainer>
          <SchedulingInfo title={'Agendamento'} date={'24 Jan.2023'} hour={'13:00'} parkingCode={'14052023-001'} status={"Confirmada"}/>
          <AddressCard address={'Av. Jorn. Aníbal Fernandes, s/n - Cidade Universitária, Recife - PE, 50740-560'}/>

    </Style.MainView>
  )
}