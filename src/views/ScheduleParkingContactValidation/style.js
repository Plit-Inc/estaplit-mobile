import styled from "styled-components";
import {CodeField, useBlurOnFulfill, useClearByFocusCell} from "react-native-confirmation-code-field";
import * as Constants from "../../constants";

export const ScheduleParkingContactValidationStyle = styled.View`
  justify-content: space-between;
  background-color: ${Constants.colors.gray[100]};
  height: 100%;
  padding: 20px;
`

export const Title = styled.Text`
  font-family: ${Constants.parkingDetailConfig.Utils.fontFamily.Regular};
  font-size: ${Constants.parkingDetailConfig.Utils.FontSize.Medium};
  color: ${Constants.colors.gray[600]};
  margin-top: 16px;
`;

export function CodeFieldCellStyle({text, index, getCellOnLayoutHandler, isFocused}) {
    const CodeFieldCellViewStyle = styled.View`
      width: 50px;
      border-bottom-width: 1px;
      border-bottom-color: ${isFocused ? Constants.colors.primary["500"] : Constants.colors.gray["500"] };
    `

    const CodeFieldCellTextStyle = styled.Text`
      text-align: center;
      color: ${text ? Constants.colors.gray["1000"] : Constants.colors.gray["500"]};
      font-family: ${Constants.fontConfig.Regular};
      font-size: ${Constants.spacing.largeS};
      margin-bottom: 8px;
    `

    return (
        <CodeFieldCellViewStyle
            onLayout={getCellOnLayoutHandler(index)}>
            <CodeFieldCellTextStyle>{text ? text : 0}</CodeFieldCellTextStyle>
        </CodeFieldCellViewStyle>
    )
}
