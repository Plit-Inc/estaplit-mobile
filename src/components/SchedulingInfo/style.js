import styled from 'styled-components';
import { colors, fontConfig } from '../../constants';
import { Text } from 'react-native';

export const InfoContainer = styled.View`
    background-color: ${colors.gray[100]};
    flex-direction: column;
`;

export const InfoHeader = styled.View`
    gap: 16px;
`;


export const InfoCodeContainer = styled.View`
    flex-direction: column;
`;
export const InfoCode = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: ${colors.gray[800]};
`;
export const DateTimeContainer = styled.View`
  flex-direction: row;
`;

export const InfoDate = styled.Text`
    font-size: 16px;
    font-weight: 600;
    font-family: ${fontConfig.Medium};
    color: ${colors.gray[800]};
`;

export const InfoDateTitle = styled.Text`
    font-size: 12px;
    font-family: ${fontConfig.Medium};
    color: ${colors.gray[600]};
`;


export const DateTimeCard = styled.View`
    flex-direction: column;
    width: 50%;
`;  

export const InfoStatusContainer = styled.View`
      background-color: ${colors.success[100]};
    border-radius: 40px;
    padding: 5px;
`
export const InfoStatus = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: ${colors.success[600]};
  
`;

export const WarningContainer = styled.View`
    flex-direction: row;
    align-items: center;
    
`;
export const WarningText = styled.Text`
    font-size: 14px;
    font-weight: 600;
    color: ${colors.alert[600]};
    margin: 20px;
`;