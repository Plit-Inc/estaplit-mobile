import styled from "styled-components";
import * as Constants from '../../../constants/index';

export const ParkingDetailOutsideCardStyle = styled.View`
  display: flex;
  flex-direction: row;
  border: ${Constants.parkingDetailConfig.Utils.borderWidth} solid ${Constants.parkingDetailConfig.Utils.borderColor};
  border-radius: 8px;
`;

export const ParkingDetailInsideCardStyle = styled.View`
  gap: 4px;
  border-right-width: ${(props) => props.isLeftCard ? Constants.parkingDetailConfig.Utils.borderWidth : 0};
  border-right-color: ${(props) => props.isLeftCard ? Constants.parkingDetailConfig.Utils.borderColor : ""};
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const BigTitle = styled.Text`
    font-size: ${Constants.parkingDetailConfig.Utils.FontSize.BigTitle};
    font-family: ${Constants.parkingDetailConfig.Utils.fontFamily.Medium};
    color: ${Constants.colors.gray[1000]};
`

export const SmallTitle = styled.Text`
    font-size: ${Constants.parkingDetailConfig.Utils.FontSize.Large};
    font-family: ${Constants.parkingDetailConfig.Utils.fontFamily.Regular};
    color: ${Constants.colors.gray[500]};
`

export const Subtitle = styled.Text`
    font-size: ${Constants.parkingDetailConfig.Utils.FontSize.Default};
    font-family: ${Constants.parkingDetailConfig.Utils.fontFamily.Medium};;
    text-transform: uppercase;
    color: ${Constants.colors.gray[500]};
    text-align: center;
`

export const TitleAndIconView = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 4px;
`