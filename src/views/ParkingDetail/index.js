import { Text } from "react-native-paper";
import {
    ParkingTitle,
    SafeView,
    Row,
    MainView,
    MainScrollView,
    SectionTitle,
    Table,
    TableRow,
    TableText,
    SectionSubtitle,
    OpeningHoursTable,
    OpeningHoursTableRow,
    OpeningHoursTableText,
    ParkingSpaceImage,
    HorizontalImageScroll,
    ReviewScoreText
} from "./style";
import Info from "../../components/utils/Info";
import {Clock, MapPinLine, Star, Money, ArrowUpRight} from 'phosphor-react-native';
import * as Constants from '../../../src/constants/index';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from "react-native";
import ParkingDetailCard from "../../components/utils/ParkingDetailCard";
import MainButton from "../../components/utils/MainButton";
import Separator from "../../components/utils/Separator";
import {showLocation} from 'react-native-map-link';
import WarningCard from "../../components/utils/WarningCard";
import MapsButton from "../../components/utils/MapsButton";
import {parkingCardConfig} from "../../../src/constants/index";
import React from "react";
import {MapsButtonTextStyle} from "../../components/utils/MapsButton/style";


export default function ParkingDetail() {
    const weekdays = {"Segunda-feira": "07:00 às 19:00", "Terça-feira": "07:00 às 19:00", "Quarta-feira": "07:00 às 19:00", "Quinta-feira": "07:00 às 19:00", "Sexta-feira": "07:00 às 19:00", "Sábado": "07:00 às 19:00", "Domingo": "Fechado"}
    const priceTable = {"Até 20 minutos": "Grátis", "4 horas": "R$ 11,00", "Hora adicional": "+ R$ 4,00", "Taxa de reserva": "+ R$ 5,00"}
    return (
        <SafeAreaView>
            <MainScrollView>
                <MainView>
                    <ParkingTitle numberOfLines={2}>RECIFE ROTATIVO ESTACIONAMENTOS</ParkingTitle>
                    <Row>
                        <Info 
                            text={`500m do seu destino`} 
                            IconComponent={ () => <MapPinLine
                            size={Constants.parkingDetailConfig.Utils.IconSize}
                            color={Constants.parkingDetailConfig.Utils.IconColor}
                            />}
                        />
                        <Info 
                            text={`4.3(233)`} 
                            IconComponent={ () => <Star
                            size={Constants.parkingDetailConfig.Utils.IconSize}
                            color={Constants.parkingDetailConfig.Utils.IconColor}
                            />}
                        />
                        </Row>
                    <Row>
                    <Info
                        text={`A partir de R$4,00`}
                        IconComponent={ () => <Money
                        size={Constants.parkingDetailConfig.Utils.IconSize}
                        color={Constants.parkingDetailConfig.Utils.IconColor}
                        />}
                    />
                    <Info
                        text={`07:99-19:00`}
                        IconComponent={ () => <Clock
                        size={Constants.parkingDetailConfig.Utils.IconSize}
                        color={Constants.parkingDetailConfig.Utils.IconColor}
                        />}
                    />
                </Row>
                    <ParkingDetailCard style={{marginTop: 20}} />
                    <MainButton style={{marginTop: 16}} text={"Reservar vaga"} styleName="default" iconName="calendar"/>
                    <MainButton onPress={() => {showLocation({latitude: 38.8976763, longitude: -77.0387185})}} style={{marginTop: 16}} text={"Ir para o estacionamento"} styleName="transparent" iconName="arrow-forward"/>
                    <Separator style={{marginTop: 16}}/>
                    <SectionTitle style={{marginBottom: 16}}>Tabela de preços</SectionTitle>
                    <Table>
                        <TableRow>
                            <TableText isHeader={true} text={"Descrição"}/>
                            <TableText isHeader={true} rightElement={true} text={"Preço"}/>
                        </TableRow>
                        {Object.entries(priceTable).map(([time, price], index) => (
                            <TableRow isFooter={index + 1 == Object.keys(priceTable).length}>
                                <TableText text={time}/>
                                <TableText rightElement={true} isFree={price == "Grátis"} text={price}/>
                            </TableRow>
                        ))}
                    </Table>
                    <SectionSubtitle style={{marginBottom: 24}}>Pagamentos no local via Dinheiro, Pix, Cartões de Crédito e Débito</SectionSubtitle>
                    <WarningCard text={"Apenas 3 vagas disponíveis para reserva. Garanta a sua e fique tranquilo!"}/>
                    <Separator style={{marginTop: 24}}/>
                    <SectionTitle>Endereço</SectionTitle>
                    <SectionSubtitle style={{marginBottom: 16}}>Av. Jorn. Aníbal Fernandes, s/n - Cidade Universitária, Recife - PE, 50740-560</SectionSubtitle>
                    <MapsButton text={"Ver no mapa"} onPress={() => {showLocation({latitude: 38.8976763, longitude: -77.0387185})}}/>
                    <Separator style={{marginTop: 24}}/>
                    <SectionTitle>Horário de funcionamento</SectionTitle>
                    <OpeningHoursTable style={{marginTop: 16}}>
                        {Object.entries(weekdays).map(([day, availableHours]) => (
                            <OpeningHoursTableRow>
                                <OpeningHoursTableText>{day}</OpeningHoursTableText>
                                <OpeningHoursTableText isClosed={availableHours == "Fechado"}>{availableHours}</OpeningHoursTableText>
                            </OpeningHoursTableRow>
                        ))}
                    </OpeningHoursTable>
                    <Separator style={{marginTop: 24}}/>
                    <SectionTitle>Fotos e avaliações</SectionTitle>
                    <View style={{marginTop: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                            <Star
                                size={Constants.parkingDetailConfig.Utils.FontSize.Large}
                                color={Constants.colors.primary["500"]}
                            />
                            <ReviewScoreText>4.3 (233)</ReviewScoreText>
                        </View>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                            <MapsButtonTextStyle>Ver no google</MapsButtonTextStyle>
                            <ArrowUpRight size={16} color={Constants.colors.gray["600"]}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} style={{marginTop: 16}} contentContainerStyle={{ gap: 12 }}>
                        <ParkingSpaceImage source={{ uri: 'https://lh3.googleusercontent.com/p/AF1QipOM5FdNVbrmrPeWHubsuaTjyYFZzLLaL7ICGYwA=s1360-w1360-h1020' }}/>
                        <ParkingSpaceImage source={{ uri: 'https://lh3.googleusercontent.com/p/AF1QipOM5FdNVbrmrPeWHubsuaTjyYFZzLLaL7ICGYwA=s1360-w1360-h1020' }}/>
                        <ParkingSpaceImage source={{ uri: 'https://lh3.googleusercontent.com/p/AF1QipOM5FdNVbrmrPeWHubsuaTjyYFZzLLaL7ICGYwA=s1360-w1360-h1020' }}/>
                    </ScrollView>
                    <Separator style={{marginTop: 24}}/>
                    <SectionTitle>Política de cancelamento</SectionTitle>
                    <SectionSubtitle>Caso o cancelamento da reserva seja confirmado em pelo menos 24 horas antes do horário agendado receba de volta o valor integral que você pagou.</SectionSubtitle>
                    <SectionSubtitle>Sem reembolso caso falte menos de 24 horas para a sua reserva.</SectionSubtitle>
                </MainView>
            </MainScrollView>
        </SafeAreaView>
    )
}