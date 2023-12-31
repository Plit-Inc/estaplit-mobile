import { ScrollView, View } from 'react-native'
import { MainView, StyledParkingContainer} from './style.js'
import React from 'react'
import ParkingCard from '../../components/utils/ParkingCard/index.js';
import SchedulingInfo from '../../components/SchedulingInfo/index.js';
import Separator from '../../components/utils/Separator/index.js';
import AddressInfo from '../../components/AddressInfo/index.js';
import PolicyMessage from '../../components/utils/PolicyMessage/index.js';
import MainButton from '../../components/utils/MainButton/index.js';
import PaymentInfo from '../../components/PaymentInfo/index.js';
import {useDriverContext} from "../../Context";

export default function ConfirmReservation({navigation}) {
  const { selectedParkingSpace, scheduling, setScheduling } = useDriverContext();

  return (
    <ScrollView>
      <MainView>
        <ParkingCard
          isOpen
          price={selectedParkingSpace.price}
          title={selectedParkingSpace.name}
          distance={`${selectedParkingSpace.distance}m`}
          review={selectedParkingSpace.rate}
          hours={selectedParkingSpace.day_time}
          imagePath={selectedParkingSpace.images[0]}
          activeOpacity={1}
          style={{borderBottomWidth: 0, marginLeft: -16, marginRight: -16}}
        />
        <Separator style={{marginBottom: 16}}/>

        <SchedulingInfo title={'Agendamento'} date={scheduling.date} hour={scheduling.hour} />
        <Separator style={{marginTop: 24, marginBottom: 16}}/>
        <AddressInfo title={"Endereço"} address={selectedParkingSpace.address}/>
        <Separator style={{marginTop: 24, marginBottom: 16}}/>
        <PolicyMessage title={"Política de cancelamento"} message={"Caso o cancelamento seja confirmado em pelo menos 24 horas antes do horário agendado receba de volta o valor integral que você pagou. Sem reembolso caso falte menos de 24 horas para a sua reserva."}/>

        <Separator style={{marginTop: 24}}/>
        <PaymentInfo title={'Valores'} fee={Number(selectedParkingSpace.price_table["Taxa de reserva"])} time={'4'} value={11}/>
        <MainButton style={{marginTop: 16}} text={"Confirmar reserva"} styleName="default" iconName="arrow-forward" callback={() => navigation.navigate('Success')}/>
      </MainView>
    </ScrollView>
  )
}