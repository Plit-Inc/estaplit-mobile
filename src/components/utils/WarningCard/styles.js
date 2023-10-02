import styled from 'styled-components';
import * as Constants from '../../../../src/constants/index';

export const WarningCardStyle = styled.View`
  padding: 8px;
  border-left-width: 2px;
  border-left-color: ${(props) => props.isBlue ? Constants.colors.primary["500"] : Constants.colors.alert["600"]};
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const WarningCardTextStyle = styled.Text`
    font-size: 12px;
    font-family: ${Constants.fontConfig.Medium};
    max-width: 90%;
    line-height: 15px;
`;