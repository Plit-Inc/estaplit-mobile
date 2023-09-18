import { Text } from "react-native";
import { MainButtonStyle, MainButtonTextStyle } from "./style";
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Constants from "../../../constants/index";


export default function MainButton({ text, buttonName }) {
    return (
        <MainButtonStyle>
            <MainButtonTextStyle>
                {text}
            </MainButtonTextStyle>
            <Ionicons name={buttonName} size={17} color={Constants.buttonConfig.Default.Primary.Default.Color} />
        </MainButtonStyle>
    )
}