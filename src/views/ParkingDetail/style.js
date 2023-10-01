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
  margin-bottom: 16px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding-bottom: 4px;
`;

export const SectionTitle = styled.Text`
  font-family: ${Constants.parkingDetailConfig.Utils.fontFamily.Medium};
  font-size: ${Constants.parkingDetailConfig.Utils.FontSize.Medium};
  color: ${Constants.colors.gray[800]};
  margin-top: 24px;
`

export const Table = styled.View`
  border: ${Constants.parkingDetailConfig.Utils.borderWidth} solid ${Constants.parkingDetailConfig.Utils.borderColor};
  border-radius: 12px;
`

export const TableRow = styled.View`
  flex-direction: row;
  border-bottom-width: ${(props) => props.isFooter ? 0 : Constants.parkingDetailConfig.Utils.borderWidth};
  border-bottom-color: ${Constants.parkingDetailConfig.Utils.borderColor};
`

//Iphone does not renders border right in text so needs to inserted a view outside
export function TableText({text, rightElement, isHeader, isFree}) {
  const TableTextViewStyle = styled.View`
    flex: 1;
    padding: 16px;
    border-right-width: ${rightElement ? 0 : Constants.parkingDetailConfig.Utils.borderWidth};
    border-right-color: ${Constants.parkingDetailConfig.Utils.borderColor};
    width: 50%;
  `

  const TableTextStyle = styled.Text`
    color: ${isHeader ? Constants.colors.gray[500] : isFree ? Constants.colors.success["600"] : Constants.colors.gray[800]};
    font-family: ${isHeader ? Constants.parkingDetailConfig.Utils.fontFamily.Medium : Constants.parkingDetailConfig.Utils.fontFamily.Regular};;
  `

  return (
    <TableTextViewStyle>
      <TableTextStyle>{text}</TableTextStyle>
    </TableTextViewStyle>
  )
} 


export const SectionSubtitle = styled.Text`
  font-family: ${Constants.parkingDetailConfig.Utils.fontFamily.Regular};
  font-size: ${Constants.parkingDetailConfig.Utils.FontSize.Medium};
  color: ${Constants.colors.gray[600]};
  margin-top: 16px;
`;

export const OpeningHoursTable = styled.View`
  flex-direction: column;
  flex-grow: 1;
  gap: 6px;
`

export const OpeningHoursTableRow = styled.View`
  flex-direction: row;
  flex-grow: 1;
`

export const OpeningHoursTableText = styled.Text`
  color: ${(props) => props.isClosed ? Constants.colors.gray["500"] : Constants.colors.gray["1000"]};
  font-family: ${Constants.fontConfig.Regular};
  width: 120px;
`

export const ParkingSpaceImage = styled.Image`
  border-radius: 12px;
  width: 148px;
  height: 200px;
`

export const ReviewScoreText = styled.Text`
  color: ${Constants.colors.primary["500"]};
  font-size: ${Constants.parkingDetailConfig.Utils.FontSize.Large};
  font-family: ${Constants.fontConfig.Regular}
`