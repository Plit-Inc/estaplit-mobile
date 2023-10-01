import styled from "styled-components";
import * as Constants from '../../../src/constants/index';
import {StatusBar} from "react-native";

export const SafeArea = styled.SafeAreaView`
  margin-top: ${`${StatusBar.currentHeight ? StatusBar.currentHeight : 0}px`};
`

export const HomeParkingOwnerStyle = styled.ScrollView`
    padding: 20px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const CounterView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const CounterButton = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 8px 12px;
  background-color: ${Constants.colors.primary["100"]};
  gap: 8px;
  align-items: center;
  width: 100px;
`

export const CounterButtonText = styled.Text`
  color: ${Constants.colors.primary["500"]};
  text-transform: uppercase;
  font-family: ${Constants.fontConfig.SemiBold};
`

export const CounterTitle = styled.Text`
  font-size: 64px;
  font-family: ${Constants.fontConfig.Regular};
  color: ${Constants.colors.gray["1000"]};
  text-align: center;
`

export const CounterSubtitle = styled.Text`
  font-size: 16px;
  font-family: ${Constants.fontConfig.Regular};
  color: ${Constants.colors.gray["600"]};
  text-align: center;
`

export const ParkingOccupationTable = styled.View`
    gap: 8px;
    width: 100%;
`

export const ParkingOccupationRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const ParkingOccupationText = styled.Text`
  font-size: 14px;
  font-family: ${Constants.fontConfig.Regular};
  color: ${(props) => props.isTotal ? Constants.colors.gray["1000"] : Constants.colors.gray["600"]};
`

export const TotalOfSchedulesView = styled.View`
  background-color: ${Constants.colors.gray["300"]};
  border-radius: 4px;
  padding: 2px 6px;
  justify-content: center;
  align-items: center;
`

export const TotalOfSchedulesText = styled.Text`
  font-size: 12px;
  font-family: ${Constants.fontConfig.Medium};
  color: ${Constants.colors.gray["600"]};
`