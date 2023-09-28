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

export const Title = styled.Text`
  font-family: ${ParkingListScreenConfig.Utils.fontFamily};
  font-size: ${ParkingListScreenConfig.Title.fontSize};
  font-weight: ${ParkingListScreenConfig.Utils.fontWeight};
  line-height: ${ParkingListScreenConfig.Title.lineHeight};
  color: ${ParkingListScreenConfig.Utils.color};
`;

export const Info = styled.Text`
  font-family: ${ParkingListScreenConfig.Utils.fontFamily};
  color: ${ParkingListScreenConfig.Utils.color};
  font-weight: ${ParkingListScreenConfig.Utils.fontWeight};
  font-size: ${ParkingListScreenConfig.Text.fontSize};
`;
