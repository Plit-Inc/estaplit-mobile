import {ImageBackgroundStyle, MapsButtonStyle, MapsButtonTextStyle} from "./style";
import { ArrowUpRight } from 'phosphor-react-native';
import * as Constants from '../../../../src/constants/index';

export default function MapsButton({ text, ...props }) {
    return (
        <MapsButtonStyle {...props}>
            <ImageBackgroundStyle source={require("../../../../assets/mapbutton-background.png")} resizeMode="cover" >
                <MapsButtonTextStyle>{text}</MapsButtonTextStyle>
                <ArrowUpRight size={24} color={Constants.colors.gray["600"]}/>
            </ImageBackgroundStyle>
        </MapsButtonStyle>
    )
}