import {WarningCardStyle, WarningCardTextStyle} from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Constants from "../../../../src/constants/index";

export default function WarningCard({ text, isBlue, ...props }) {
    return (
        <WarningCardStyle isBlue={isBlue} {...props}>
            <Ionicons
                name={isBlue ? "information-circle-outline" : "warning-outline"}
                size={16}
                style={{color: isBlue ? Constants.colors.primary["500"] : Constants.colors.alert["600"], alignSelf: 'flex-start'}}
            />
            <WarningCardTextStyle style={{color: isBlue ? Constants.colors.primary["500"] : Constants.colors.alert["600"]}}>{text}</WarningCardTextStyle>
        </WarningCardStyle>
    )
}