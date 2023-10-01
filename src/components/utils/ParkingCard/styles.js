import styled from 'styled-components';
import * as Constants from '../../../constants/index';
import { titleConfig } from '../../../constants/index';

export const Element = styled.TouchableOpacity`
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${Constants.parkingCardConfig.Utils.BorderBottomColor};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`;

export const ParkImageCard = styled.Image`
  width: 64px;
  height: 72px;
  border-radius: ${Constants.parkingCardConfig.Utils.BorderRadius};
`;

export const ParkContent = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  padding-bottom: 4px;
`;
export const Badges = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  padding-top: 8px;
`;
