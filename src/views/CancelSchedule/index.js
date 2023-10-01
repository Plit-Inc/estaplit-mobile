import {BoldSubtitle, CancelScheduleStyle, Subtitle, Title} from "./style";
import {View} from "react-native";
import MainButton from "../../components/utils/MainButton";
import * as Constants from '../../../src/constants/index';

export default function CancelSchedule({ isRefund }) {
    return (
        <CancelScheduleStyle>
            <View style={{gap: 16}}>
                <View>
                    <Title>Código da reserva</Title>
                    <Subtitle>20032023-001</Subtitle>
                </View>
                <View>
                    <Title>Data</Title>
                    <Subtitle>24 Jan.2023</Subtitle>
                </View>
                <View>
                    <Title>Horário</Title>
                    <Subtitle>13:00</Subtitle>
                </View>
                <View>
                    <Title>Local</Title>
                    <Subtitle><BoldSubtitle>Estapar Estacionamento</BoldSubtitle>. Av. Jorn. Aníbal Fernandes, s/n - Cidade Universitária, Recife - PE, 50740-560</Subtitle>
                </View>
                <View>
                    <Title>Reembolso</Title>
                    {isRefund
                        ? <Subtitle>Reembolso integral: R$16,00</Subtitle>
                        : <Subtitle>Você <BoldSubtitle> NÃO </BoldSubtitle> receberá reembolso pois faltam menos de 24 horas para sua reserva</Subtitle>}

                </View>
            </View>
            <MainButton style={{backgroundColor: Constants.colors.error["500"]}} text={"Cancelar reserva"} styleName={"default"}/>
        </CancelScheduleStyle>
    )
}