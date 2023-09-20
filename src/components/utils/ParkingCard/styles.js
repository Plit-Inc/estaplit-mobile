import styled from 'styled-components';
import * as Constants from '../../../constants/index';

export const Element = styled.View`
  width: 100%;
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${Constants.parkingCardConfig.Utils.BorderBottomColor};
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const ParkImageCard = styled.Image`
  width: 64px;
  height: 72px;
  border-radius: ${Constants.parkingCardConfig.Utils.BorderRadius};
`;

export const Info = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

export const InfoText = styled.Text`
  font-family: ${Constants.parkingCardConfig.Utils.fontFamily.Regular};
  color: ${Constants.parkingCardConfig.Utils.TextColor};
  font-size: ${Constants.parkingCardConfig.Utils.FontSize.Default};
  line-height: 16px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding-bottom: 4px;
`;

export const Badges = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;
  padding-top: 8px;
`;
