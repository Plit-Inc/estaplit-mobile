import { Text } from "react-native-paper";
import { ParkingTitle, SafeView, Row, MainView, MainScrollView } from "./style";
import Info from "../../components/utils/Info";
import { Clock, MapPinLine, Star, Money } from 'phosphor-react-native';
import * as Constants from '../../../src/constants/index';
import { SafeAreaView, ScrollView } from "react-native";
import ParkingDetailCard from "../../components/utils/ParkingDetailCard";
import MainButton from "../../components/utils/MainButton";
import Separator from "../../components/utils/Separator";
import Title from "../../components/utils/Title";
import {showLocation} from 'react-native-map-link';


export default function ParkingDetail() {
    return (
        <SafeAreaView>
            <MainScrollView>
                <MainView>
                    <ParkingTitle>Teste</ParkingTitle>
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
                    
                </MainView>
            </MainScrollView>
        </SafeAreaView>
    )
}