import styled from "styled-components";
import * as Constants from '../../../src/constants/index';

export const MainView = styled.View`
  padding: 16px;
  background-color: ${Constants.colors.gray[100]};
  flex-grow: 1;
  height: 100%;
`;

export const MainScrollView = styled.ScrollView`
  background-color: ${Constants.colors.gray[100]};
  height: 100%;
`;

export const ParkingTitle = styled.Text`
  text-transform: uppercase;
  font-family: ${Constants.parkingDetailConfig.Utils.fontFamily.Regular};
  font-size: ${Constants.parkingDetailConfig.Utils.FontSize.Title};
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding-bottom: 4px;
`;


