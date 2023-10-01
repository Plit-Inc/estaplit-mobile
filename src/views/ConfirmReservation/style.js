import styled from 'styled-components';
import { colors } from '../../constants';

export const MainView = styled.View`
    flex-direction: column;
    background-color: ${colors.primary[50]};
    height: 100%;
 `;


export const StyledParkingContainer = styled.View`
    background-color: ${colors.gray[100]};
    margin-bottom: 16;
    padding: 16px;
    flex-direction: column;
    height: 15%;
`;

export const SectionTitle = styled.Text`
  font-family: ${Constants.parkingDetailConfig.Utils.fontFamily.Medium};
  font-size: ${Constants.parkingDetailConfig.Utils.FontSize.Medium};
  color: ${Constants.colors.gray[800]};
  margin-top: 24px;
`
export const SectionSubtitle = styled.Text`
  font-family: ${Constants.parkingDetailConfig.Utils.fontFamily.Regular};
  font-size: ${Constants.parkingDetailConfig.Utils.FontSize.Medium};
  color: ${Constants.colors.gray[600]};
  margin-top: 16px;
`;
