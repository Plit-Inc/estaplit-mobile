import { InfoText } from "../ParkingCloseBy/style";
import { InfoStyle } from "./style";

export default function Info({ text, IconComponent }) {

    return (
        <InfoStyle>
            <IconComponent />
            <InfoText>{text}</InfoText>
        </InfoStyle>
    )
}