import styled from 'styled-components/native';
import * as Constants from "../../../constants/index";
import { View } from 'react-native';

export const HourToggleStyle = styled.View`
    background-color: ${props => props.isSelected ? Constants.dateToggleConfig.Ontouch.backgroundColor : Constants.dateToggleConfig.Default.backgroundColor };
    padding: ${Constants.dateToggleConfig.Utils.padding};
    border-radius: ${Constants.dateToggleConfig.Utils.borderRadius};
    border: ${Constants.dateToggleConfig.Utils.border};
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
`

export const HourToggleTextStyle = styled.Text`
    color: ${props => props.isSelected ? Constants.dateToggleConfig.Ontouch.color : Constants.dateToggleConfig.Default.color };
    font-family: ${Constants.dateToggleConfig.Utils.mainTextFont};
    font-size: ${Constants.dateToggleConfig.Utils.mainTextFontSize};    
`
export const MainToggleTextStyle = styled.Text`
    color: ${props => props.isSelected ? Constants.dateToggleConfig.Ontouch.color : Constants.dateToggleConfig.Default.color };
    font-family: ${Constants.dateToggleConfig.Utils.headerTextFont};
    font-size: ${Constants.dateToggleConfig.Utils.mainTextFontSize};    
`