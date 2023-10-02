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
import * as Constants from "../../constants";

export default function VisualizeSchedule({navigation}) {
  const { selectedParkingSpace, scheduling, reservations } = useDriverContext();

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
        <MainButton text={"Ver detalhes de estacionamento"} styleName="transparent" iconName="arrow-forward" callback={() => navigation.navigate('Success')}/>
        <Separator style={{marginTop: 16, marginBottom: 16}}/>

        <SchedulingInfo parkingCode={reservations[0].code} status={"Confirmado"} title={'Sua reserva'} date={scheduling.date} hour={scheduling.hour} />
        <Separator style={{marginTop: 24, marginBottom: 16}}/>
        <AddressInfo title={"Endereço"} address={selectedParkingSpace.address}/>

        <Separator style={{marginTop: 24}}/>
        <PaymentInfo method={"Crédito"} status={"8:30 02/10/2023"} title={'Pagamento'} fee={Number(selectedParkingSpace.price_table["Taxa de reserva"])} time={'4'} value={11}/>
      </MainView>
    </ScrollView>
  )
}