import {BoldSubtitle, CancelScheduleStyle, Subtitle, Title} from "./style";
import {View} from "react-native";
import MainButton from "../../components/utils/MainButton";
import * as Constants from '../../../src/constants/index';
import {useDriverContext} from "../../Context";

export default function CancelSchedule({ isRefund, navigation }) {
    const { selectedParkingSpace, scheduling, reservations } = useDriverContext();
    return (
        <CancelScheduleStyle>
            <View style={{gap: 16}}>
                <View>
                    <Title>Código da reserva</Title>
                    <Subtitle>{reservations[0].code}</Subtitle>
                </View>
                <View>
                    <Title>Data</Title>
                    <Subtitle>{scheduling.date}</Subtitle>
                </View>
                <View>
                    <Title>Horário</Title>
                    <Subtitle>{scheduling.hour}</Subtitle>
                </View>
                <View>
                    <Title>Local</Title>
                    <Subtitle><BoldSubtitle>{reservations[0].parking_name}</BoldSubtitle>. {reservations[0].address}</Subtitle>
                </View>
                <View>
                    <Title>Reembolso</Title>
                    {isRefund
                        ? <Subtitle>Reembolso integral: R$16,00</Subtitle>
                        : <Subtitle>Você <BoldSubtitle> NÃO </BoldSubtitle> receberá reembolso pois faltam menos de 24 horas para sua reserva</Subtitle>}

                </View>
            </View>
            <MainButton style={{backgroundColor: Constants.colors.error["500"]}} text={"Cancelar reserva"} styleName={"default"} callback={() => {navigation.navigate('Home')}}/>
        </CancelScheduleStyle>
    )
}