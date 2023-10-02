import { ScrollView } from 'react-native'
import { MainView, StyledParkingContainer} from './style.js'
import React from 'react'
import ParkingCard from '../../components/utils/ParkingCard/index.js';
import SchedulingInfo from '../../components/SchedulingInfo/index.js';
import Separator from '../../components/utils/Separator/index.js';
import AddressInfo from '../../components/AddressInfo/index.js';
import PolicyMessage from '../../components/utils/PolicyMessage/index.js';
import MainButton from '../../components/utils/MainButton/index.js';
import PaymentInfo from '../../components/PaymentInfo/index.js';

export default function ConfirmReservation() {
  return (
    <ScrollView>
    <MainView>
        <StyledParkingContainer>
          <ParkingCard
            isOpen
            price="R$1,25"
            title="Estacionamento mais barato"
            distance="200m"
            review="4,5 (233)"
            hours="07:00 - 22:00"
            imagePath="https://jconlineimagem.ne10.uol.com.br/imagem/noticia/2016/04/19/normal/e7e14c4d697e5b686f8dca60cd97973f.jpg"
          />
          </StyledParkingContainer>
          <Separator style={{marginTop: 16}}/>
          
          <SchedulingInfo title={'Agendamento'} date={'24 Jan.2023'} hour={'13:00'} parkingCode={'14052023-001'} status={"Confirmada"}/>

          <Separator style={{marginTop: 24}}/>
            <AddressInfo title={"Endereço"} address={"Av. Jorn. Aníbal Fernandes, s/n - Cidade Universitária, Recife - PE, 50740-560"}/>
            <Separator style={{marginTop: 24}}/>
           <PolicyMessage title={"Política de cancelamento"} message={"Caso o cancelamento seja confirmado em pelo menos 24 horas antes do horário agendado receba de volta o valor integral que você pagou. Sem reembolso caso falte menos de 24 horas para a sua reserva."}/>
           <MainButton style={{marginTop: 16}} text={"Confirmar reservar"} styleName="default" iconName="arrow-forward"/>
           <Separator style={{marginTop: 24}}/>
            <PaymentInfo title={'Pagamento'} method={'Crédito'} status={'12:24 10/05/2023'} fee={'4,00'} time={'4'} value={'11,00'} totalValue={'16,00'}/>
    </MainView>
    </ScrollView>
  )
}