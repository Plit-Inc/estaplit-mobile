import { Text } from "react-native-paper";
import { ParkingDetailOutsideCardStyle, ParkingDetailInsideCardStyle, BigTitle, SmallTitle, Subtitle, TitleAndIconView } from "./style";
import { Image, View } from "react-native";

export default function ParkingDetailCard({...props}) {
    return (
        <ParkingDetailOutsideCardStyle {...props}>
            <ParkingDetailInsideCardStyle isLeftCard={true}>
                <TitleAndIconView>
                    <Image style={{width: 16, height: 16}} source={require("../../../../assets/green-sirene.gif")}/>
                    <BigTitle>30<SmallTitle>/60</SmallTitle></BigTitle>
                </TitleAndIconView>
                <Subtitle>VAGAS LIVRES AGORA</Subtitle>
            </ParkingDetailInsideCardStyle>
            <ParkingDetailInsideCardStyle>    
                <BigTitle>3<SmallTitle>/20</SmallTitle></BigTitle>
                <Subtitle>DISPONÍVEIS PARA RESERVA</Subtitle>
            </ParkingDetailInsideCardStyle>
        </ParkingDetailOutsideCardStyle>
    )
}