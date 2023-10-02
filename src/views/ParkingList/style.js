import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, ParkingListScreenConfig } from '../../constants';

export const SafeView = styled.SafeAreaView`
  background-color: ${colors.gray[100]};
  flex-grow: 1;
`;

export const LocationContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding-left: ${ParkingListScreenConfig.Utils.padding};
  padding-right: ${ParkingListScreenConfig.Utils.padding};
`;

export const ParkingListTitle = styled.Text`
  font-family: ${ParkingListScreenConfig.Utils.fontFamily};
  font-size: ${ParkingListScreenConfig.Title.fontSize};
  font-weight: ${ParkingListScreenConfig.Utils.fontWeight};
  line-height: ${ParkingListScreenConfig.Title.lineHeight};
  color: ${ParkingListScreenConfig.Utils.color};
`;

export const Info = styled.Text`
  padding-left: ${ParkingListScreenConfig.Utils.padding};
  padding-right: ${ParkingListScreenConfig.Utils.padding};
  padding-top: 12px;
  font-family: ${ParkingListScreenConfig.Utils.fontFamily};
  color: ${ParkingListScreenConfig.Utils.color};
  font-weight: ${ParkingListScreenConfig.Utils.fontWeight};
  font-size: ${ParkingListScreenConfig.Text.fontSize};
`;

export const Options = styled.View`
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  height: 80px;
  align-items: center;
  justify-content: space-between;
`;
