import { View, Text } from 'react-native'
import React from 'react';
import Title from '../utils/Title';
import { Section,Container } from './style';
import WarningCard from '../utils/WarningCard';
import * as Constants from "../../constants";
import {SectionSubtitle, SectionTitle} from "../../constants";


export default function PaymentInfo({title, method, status,time,value, fee}) {
  const totalValue = fee + value;
  return (
    <Container>
      {title && <SectionTitle style={{ marginTop: 16 }}>{title}</SectionTitle>}
      {method &&
        <Section>
          <SectionTitle>Método de pagamento</SectionTitle>
          <SectionSubtitle>{method}</SectionSubtitle>
        </Section>
      }
      {status &&
        <Section>
          <SectionTitle>Status</SectionTitle>
          <SectionSubtitle>Pago em {status}</SectionSubtitle>
        </Section>}
      {value &&
        <Section style={{justifyContent: 'space-between', flexDirection:'row'}}>
          <SectionTitle style={{color: Constants.colors.gray["600"]}}>Estacionamento (até {time} horas)</SectionTitle>
          <SectionSubtitle>R$ {value},00</SectionSubtitle>
        </Section>
      }
      {fee &&
        <Section style={{justifyContent: 'space-between', flexDirection:'row', padding:0}}>
          <SectionTitle style={{color: Constants.colors.gray["600"]}}>Taxa de Agendamento</SectionTitle>
          <SectionSubtitle>+ R$ {fee},00</SectionSubtitle>
        </Section>
      }
      <View style={{ borderWidth:'0.5px', borderBlockStartColor: Constants.colors.gray[100]}}></View>
      {totalValue &&
        <Section style={{justifyContent: 'space-between', flexDirection:'row', padding:0}}>
          <SectionSubtitle style={{fontSize:"16px", color: Constants.colors.gray["800"]}}>Total pago via app</SectionSubtitle>
          <SectionSubtitle style={{fontSize:"16px", color: Constants.colors.gray["800"]}}>R$ {totalValue},00</SectionSubtitle>
        </Section>
      }
      <WarningCard isBlue={true} type={'message'} text={"Valores referentes à horas adicionais deverão ser pagos no local (se existirem, é claro ;p)"}/>

    </Container>
  )
}