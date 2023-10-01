import styled from 'styled-components/native';
import * as Constants from "../../constants";
import { View } from 'react-native';


export const Container = styled.View`
    background-color: ${Constants.colors.gray[100]};
    padding: 22px 0;
`;
export const Section = styled.View`
    align-items: left;
    padding: 12px;
    background-color: ${Constants.colors.gray[100]};
    border-radius: 8px;
    `;

export const SectionTitle = styled.Text`
 font-family: ${Constants.parkingDetailConfig.Utils.fontFamily.Regular};
  font-size: 14px;
  color: ${Constants.colors.gray[600]};

`;

export const SectionSubtitle = styled.Text`
  font-family: ${Constants.parkingDetailConfig.Utils.fontFamily.Medium};
  font-size: 16px;
  color: ${Constants.colors.gray[800]};

`;