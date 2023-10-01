import {WarningCardStyle, WarningCardTextStyle} from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Constants from "../../../../src/constants/index";

export default function WarningCard({ text, type, ...props }) {
    const styles = {
        alert: Constants.colors.alert["600"],
        success: Constants.colors.success["600"],
        message: Constants.colors.primary[500],
    };
    const textColor = styles[type]
    
    return (
        <WarningCardStyle color={styles[type]} {...props}>
            <Ionicons
                name={"warning-outline"}
                size={16}
                style={{color: type ?  textColor : Constants.colors.alert["600"], alignSelf: 'flex-start'}}
            />
            <WarningCardTextStyle style={{color: type ?  textColor : Constants.colors.alert["600"], alignSelf: 'flex-start'}}>{text}</WarningCardTextStyle>
        </WarningCardStyle>
    )
}