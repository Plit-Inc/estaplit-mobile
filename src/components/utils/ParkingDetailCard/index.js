import { Text } from "react-native-paper";
import { ParkingDetailOutsideCardStyle, ParkingDetailInsideCardStyle, BigTitle, SmallTitle, Subtitle, TitleAndIconView } from "./style";
import { Image, View } from "react-native";

export default function ParkingDetailCard({open_parking_spot, total_parking_spot, open_schedule_parking_spot, total_schedule_parking_spot,...props}) {
    return (
        <ParkingDetailOutsideCardStyle {...props}>
            <ParkingDetailInsideCardStyle isLeftCard={true}>
                <TitleAndIconView>
                    <Image style={{width: 16, height: 16}} source={require("../../../../assets/green-sirene.gif")}/>
                    <BigTitle>{open_parking_spot}<SmallTitle>/{total_parking_spot}</SmallTitle></BigTitle>
                </TitleAndIconView>
                <Subtitle>VAGAS LIVRES AGORA</Subtitle>
            </ParkingDetailInsideCardStyle>
            <ParkingDetailInsideCardStyle>    
                <BigTitle>{open_schedule_parking_spot}<SmallTitle>/{total_schedule_parking_spot}</SmallTitle></BigTitle>
                <Subtitle>DISPONÍVEIS PARA RESERVA</Subtitle>
            </ParkingDetailInsideCardStyle>
        </ParkingDetailOutsideCardStyle>
    )
}