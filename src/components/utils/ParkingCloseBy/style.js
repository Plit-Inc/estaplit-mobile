import styled from 'styled-components';
import { parkingCloseByCardConfig } from '../../../constants/index';
import * as Constants from '../../../constants';

export const Container = styled.View`
  width: 250px;
  padding: ${parkingCloseByCardConfig.Utils.padding};
  border-radius: ${parkingCloseByCardConfig.Utils.BorderRadius};
  border: 1px solid ${parkingCloseByCardConfig.Utils.BorderColor};
  margin-right: 8px;
`;

export const InfosContainer = styled.View`
  padding-top: 8px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding-bottom: 4px;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

export const InfoText = styled.Text`
  font-family: ${parkingCloseByCardConfig.Utils.fontFamily.Regular};
  color: ${parkingCloseByCardConfig.Utils.TextColor};
  font-size: ${parkingCloseByCardConfig.Utils.FontSize.Default};
  line-height: 16px;
`;
