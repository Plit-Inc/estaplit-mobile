import styled from "styled-components";
import * as Constants from '../../../constants/index';

export const InfoStyle = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

export const InfoTextStyle = styled.Text`
  font-family: ${Constants.parkingCardConfig.Utils.fontFamily.Regular};
  color: ${Constants.parkingCardConfig.Utils.TextColor};
  font-size: ${Constants.parkingCardConfig.Utils.FontSize.Default};
  line-height: 16px;
`;