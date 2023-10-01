import {WarningCardStyle, WarningCardTextStyle} from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Constants from "../../../../src/constants/index";

export default function WarningCard({ text, ...props }) {
    return (
        <WarningCardStyle {...props}>
            <Ionicons
                name={"warning-outline"}
                size={16}
                style={{color: Constants.colors.alert["600"], alignSelf: 'flex-start'}}
            />
            <WarningCardTextStyle>{text}</WarningCardTextStyle>
        </WarningCardStyle>
    )
}