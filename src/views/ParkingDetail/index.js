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
import {FlatList, SafeAreaView, ScrollView, TouchableOpacity, View} from "react-native";
import ParkingDetailCard from "../../components/utils/ParkingDetailCard";
import MainButton from "../../components/utils/MainButton";
import Separator from "../../components/utils/Separator";
import {showLocation} from 'react-native-map-link';
import WarningCard from "../../components/utils/WarningCard";
import MapsButton from "../../components/utils/MapsButton";
import {parkingCardConfig} from "../../../src/constants/index";
import React from "react";
import {MapsButtonTextStyle} from "../../components/utils/MapsButton/style";
import {useDriverContext} from "../../Context";
import ParkingCloseByCard from "../../components/utils/ParkingCloseBy";


export default function ParkingDetail({ navigation }) {
    const { selectedParkingSpace } = useDriverContext();
    const weekdays = selectedParkingSpace.working_hours;
    const priceTable = selectedParkingSpace.price_table;
    return (
        <SafeAreaView>
            <MainScrollView>
                <MainView>
                    <ParkingTitle numberOfLines={2}>{selectedParkingSpace.name}</ParkingTitle>
                    <Row>
                        <Info 
                            text={`${selectedParkingSpace.distance}m do seu destino`}
                            IconComponent={ () => <MapPinLine
                            size={Constants.parkingDetailConfig.Utils.IconSize}
                            color={Constants.parkingDetailConfig.Utils.IconColor}
                            />}
                        />
                        <Info 
                            text={`${selectedParkingSpace.rate}`}
                            IconComponent={ () => <Star
                            size={Constants.parkingDetailConfig.Utils.IconSize}
                            color={Constants.parkingDetailConfig.Utils.IconColor}
                            />}
                        />
                        </Row>
                    <Row>
                    <Info
                        text={`A partir de R$${selectedParkingSpace.price}`}
                        IconComponent={ () => <Money
                        size={Constants.parkingDetailConfig.Utils.IconSize}
                        color={Constants.parkingDetailConfig.Utils.IconColor}
                        />}
                    />
                    <Info
                        text={`${selectedParkingSpace.day_time}`}
                        IconComponent={ () => <Clock
                        size={Constants.parkingDetailConfig.Utils.IconSize}
                        color={Constants.parkingDetailConfig.Utils.IconColor}
                        />}
                    />
                </Row>
                    <ParkingDetailCard open_parking_spot={selectedParkingSpace.open_parking_spot} open_schedule_parking_spot={selectedParkingSpace.open_schedule_parking_spot} total_parking_spot={selectedParkingSpace.open_schedule_parking_spot} total_schedule_parking_spot={selectedParkingSpace.total_schedule_parking_spot} style={{marginTop: 20}} />
                    <MainButton style={{marginTop: 16}} text={"Reservar vaga"} styleName="default" iconName="calendar" callback={() => navigation.navigate('ReserveParking')}/>
                    <MainButton callback={() => {showLocation({latitude: selectedParkingSpace.latitude, longitude: selectedParkingSpace.longitude})}} style={{marginTop: 16}} text={"Ir para o estacionamento"} styleName="transparent" iconName="arrow-forward"/>
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
                    <WarningCard text={`Apenas ${selectedParkingSpace.open_schedule_parking_spot} vagas disponíveis para reserva. Garanta a sua e fique tranquilo!`}/>
                    <Separator style={{marginTop: 24}}/>
                    <SectionTitle>Endereço</SectionTitle>
                    <SectionSubtitle style={{marginBottom: 16}}>{selectedParkingSpace.address}</SectionSubtitle>
                    <MapsButton text={"Ver no mapa"} onPress={() => {showLocation({latitude: selectedParkingSpace.latitude, longitude: selectedParkingSpace.longitude})}}/>
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
                            <ReviewScoreText>{selectedParkingSpace.rate}</ReviewScoreText>
                        </View>
                        <TouchableOpacity onPress={() => {showLocation({latitude: selectedParkingSpace.latitude, longitude: selectedParkingSpace.longitude})}} style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                            <MapsButtonTextStyle>Ver no google</MapsButtonTextStyle>
                            <ArrowUpRight size={16} color={Constants.colors.gray["600"]}/>
                        </TouchableOpacity>
                    </View>
                    <View horizontal={true} style={{marginTop: 16}} >
                        <FlatList
                          contentContainerStyle={{ gap: 12 }}
                          horizontal
                          data={selectedParkingSpace.images}
                          renderItem={({ item, index }) => <ParkingSpaceImage key={index} source={{ uri: item }}/>}
                          showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <Separator style={{marginTop: 24}}/>
                    <SectionTitle>Política de cancelamento</SectionTitle>
                    <SectionSubtitle>Caso o cancelamento da reserva seja confirmado em pelo menos 24 horas antes do horário agendado receba de volta o valor integral que você pagou.</SectionSubtitle>
                    <SectionSubtitle>Sem reembolso caso falte menos de 24 horas para a sua reserva.</SectionSubtitle>
                </MainView>
            </MainScrollView>
        </SafeAreaView>
    )
}