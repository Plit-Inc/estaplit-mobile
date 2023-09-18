import styled from 'styled-components/native';
import * as Constants from "../../../constants/index";

export const MainButtonStyle = styled.View`
    flex-direction: row;
    gap: 8px;
    align-items: center;
    background-color: ${Constants.buttonConfig.Default.Primary.Default.BackgroundColor};
    padding: ${Constants.buttonConfig.Default.Primary.Default.Padding};
    border-radius: ${Constants.buttonConfig.Default.Primary.Default.Radius};
`

export const MainButtonTextStyle = styled.Text`
    color: ${Constants.buttonConfig.Default.Primary.Default.Color};
    font-family: ${Constants.buttonConfig.Utils.fontFamily};
`