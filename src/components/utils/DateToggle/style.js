import styled from 'styled-components/native';
import * as Constants from '../../../constants/index';

export const DateToggleStyle = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.isSelected
      ? Constants.dateToggleConfig.Ontouch.backgroundColor
      : Constants.dateToggleConfig.Default.backgroundColor};
  padding: ${Constants.dateToggleConfig.Utils.padding};
  border-radius: ${Constants.dateToggleConfig.Utils.borderRadius};
  border: ${Constants.dateToggleConfig.Utils.border};
  max-width: ${Constants.dateToggleConfig.Utils.maxWidth};
`;


export const HeaderDateTextStyle = styled.Text`
  color: ${(props) =>
    props.isSelected
      ? Constants.dateToggleConfig.Ontouch.color
      : Constants.dateToggleConfig.Default.color};
  font-family: ${Constants.dateToggleConfig.Utils.headerTextFont};
  font-size: ${Constants.dateToggleConfig.Utils.headerTextFontSize};
`;

export const MainDateTextStyle = styled.Text`
  color: ${(props) =>
    props.isSelected
      ? Constants.dateToggleConfig.Ontouch.color
      : Constants.dateToggleConfig.Default.color};
  font-family: ${Constants.dateToggleConfig.Utils.mainTextFont};
  font-size: ${Constants.dateToggleConfig.Utils.mainTextFontSize};
`;


export const DateToggleSelectedStyle = styled.View`
  background-color: ${(props) =>
    props.isSelected
      ? Constants.dateToggleConfig.Ontouch.backgroundColor
      : Constants.dateToggleConfig.Default.backgroundColor};
  padding: ${Constants.dateToggleConfig.Utils.padding};
  border-radius: ${Constants.dateToggleConfig.Utils.borderRadius};
  border: ${Constants.dateToggleConfig.Utils.border};
  width: ${Constants.dateToggleConfig.Utils.maxWidth};
  margin-right: 10px;
`;
