import {SafeAreaView, Text, View, StatusBar} from "react-native";
import Badge from "../../components/utils/Badge";
import {Title} from "../Home/style";
import Ionicons from "@expo/vector-icons/Ionicons";
import {colors} from "../../constants";
import {
    CounterButton,
    CounterButtonText,
    CounterSubtitle,
    CounterTitle,
    CounterView,
    Header,
    HomeParkingOwnerStyle,
    ParkingOccupationRow,
    ParkingOccupationTable,
    ParkingOccupationText,
    TotalOfSchedulesText,
    TotalOfSchedulesView,
    SafeArea
} from "./style";
import {useState} from "react";
import Separator from "../../components/utils/Separator";
import {SectionTitle} from "../ParkingDetail/style";
import WarningCard from "../../components/utils/WarningCard";
import TicketCard from "../../components/utils/TicketCard";

export default function HomeParkingOwner({ navigation }) {
    const [carsCounter, setCarsCounter] = useState(0);
    return (
        <SafeArea>
            <HomeParkingOwnerStyle>
                <Header>
                    <Badge label="Aberto" type="success" />
                    <Ionicons
                        name="settings-outline"
                        size={24}
                        color={colors.primary[500]}
                    />
                </Header>
                <Title>Estacionamento Marco Zero</Title>
                <CounterView>
                    <CounterButton onPress={() => carsCounter > 0 && setCarsCounter(carsCounter - 1)}>
                        <Ionicons
                            name="arrow-down-outline"
                            size={24}
                            color={colors.primary[500]}
                        />
                        <CounterButtonText>SAIU</CounterButtonText>
                    </CounterButton>
                    <View>
                        <CounterTitle>{carsCounter}</CounterTitle>
                        <CounterSubtitle>Carros entraram</CounterSubtitle>
                    </View>
                    <CounterButton onPress={() => setCarsCounter(carsCounter + 1)}>
                        <Ionicons
                            name="arrow-up-outline"
                            size={24}
                            color={colors.primary[500]}
                        />
                        <CounterButtonText>ENTROU</CounterButtonText>
                    </CounterButton>
                </CounterView>
                <Separator style={{marginTop: 24}}/>
                <SectionTitle style={{marginBottom: 16}}>Ocupação do Pátio</SectionTitle>
                <WarningCard style={{marginBottom: 16}} text={"Você não possui mais vagas livres."}/>
                <ParkingOccupationTable>
                    <ParkingOccupationRow>
                        <ParkingOccupationText>Vagas livres</ParkingOccupationText>
                        <ParkingOccupationText>1</ParkingOccupationText>
                    </ParkingOccupationRow>
                    <ParkingOccupationRow>
                        <ParkingOccupationText>Vagas reservadas</ParkingOccupationText>
                        <ParkingOccupationText>1</ParkingOccupationText>
                    </ParkingOccupationRow>
                    <ParkingOccupationRow>
                        <ParkingOccupationText>Vagas ocupadas</ParkingOccupationText>
                        <ParkingOccupationText>1</ParkingOccupationText>
                    </ParkingOccupationRow>
                    <Separator style={{borderBottomWidth: 2}}/>
                    <ParkingOccupationRow>
                        <ParkingOccupationText isTotal={true}>Tamanho total</ParkingOccupationText>
                        <ParkingOccupationText isTotal={true}>100</ParkingOccupationText>
                    </ParkingOccupationRow>
                </ParkingOccupationTable>
                <Separator style={{marginTop: 24}}/>
                <View style={{flexDirection: 'row', gap: 4, marginTop: 24, marginBottom: 16, alignItems: 'center'}}>
                    <SectionTitle style={{marginTop: 0, lineHeight: 15}}>Reservas</SectionTitle>
                    <TotalOfSchedulesView>
                        <TotalOfSchedulesText>3</TotalOfSchedulesText>
                    </TotalOfSchedulesView>
                </View>
                <View style={{marginBottom: 40, gap: 8}}>
                    <TicketCard title="Estapar Estacionamentos" subtitle={"RENAULT KWID • (81) 9999999999"} isDriver={false} />
                    <TicketCard title="Estapar Estacionamentos" subtitle={"RENAULT KWID • (81) 9999999999"} isDriver={false} />
                    <TicketCard title="Estapar Estacionamentos" subtitle={"RENAULT KWID • (81) 9999999999"} isDriver={false} />
                </View>
            </HomeParkingOwnerStyle>
        </SafeArea>
    )
}