import styled from 'styled-components/native';
import * as Constants from "../../../constants/index";

export const HourToggleStyle = styled.TouchableOpacity`
    background-color: ${props => props.isSelected ? Constants.hourToggleConfig.Ontouch.backgroundColor : Constants.hourToggleConfig.Default.backgroundColor };
    padding: ${Constants.hourToggleConfig.Utils.padding};
    border-radius: ${Constants.hourToggleConfig.Utils.borderRadius};
    border: ${Constants.hourToggleConfig.Utils.border};
    flex-direction: row;
    justify-content: space-between;
`

export const HourToggleTextStyle = styled.Text`
    color: ${props => props.isSelected ? Constants.dateToggleConfig.Ontouch.color : Constants.dateToggleConfig.Default.color };
    font-family: ${Constants.hourToggleConfig.Utils.mainTextFont};
    font-size: ${Constants.hourToggleConfig.Utils.mainTextFontSize};    
`
export const MainToggleTextStyle = styled.Text`
    color: ${props => props.isSelected ? Constants.dateToggleConfig.Ontouch.color : Constants.dateToggleConfig.Default.color };
    font-family: ${Constants.hourToggleConfig.Utils.headerTextFont};
    font-size: ${Constants.hourToggleConfig.Utils.mainTextFontSize};    
`