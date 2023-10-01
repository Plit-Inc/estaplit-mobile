import { View, Text } from 'react-native'
import React from 'react';
import Title from '../utils/Title';
import { Section,Container,SectionTitle,SectionSubtitle } from './style';
import WarningCard from '../utils/WarningCard';
import * as Constants from "../../constants";


export default function PaymentInfo({title, method, status,time,value, fee, totalValue}) {
  return (
    <Container>
      {title && <Title text={title}/>}
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
            <SectionTitle>Estacionamento (até {time} horas)</SectionTitle>
            <SectionSubtitle>{value}</SectionSubtitle>
        </Section>
        }
        {fee &&
        <Section style={{justifyContent: 'space-between', flexDirection:'row', padding:0}}> 
            <SectionTitle>Taxa de Agendamento</SectionTitle>
            <SectionSubtitle> R$ {fee}</SectionSubtitle>
        </Section>
        }
        {totalValue &&
        <Section style={{justifyContent: 'space-between', flexDirection:'row', padding:0}}> 
            <SectionSubtitle style={{fontSize:"22px"}}>Total pago via app</SectionSubtitle>
            <SectionSubtitle style={{fontSize:"22px"}}>{totalValue}</SectionSubtitle>
        </Section>
        }
        <WarningCard type={'message'} text={"Valores referentes à horas adicionais deverão ser pagos no local (se existirem, é claro ;p)"}/>
       
    </Container>
  )
}