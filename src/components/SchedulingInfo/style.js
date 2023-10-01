import styled from 'styled-components';
import { colors } from '../../constants';
import { Text } from 'react-native';

export const InfoContainer = styled.View`
    background-color: ${colors.gray[100]};
    margin: 5px 0;
    padding: 16px;
    flex-direction: column;
`;

export const InfoHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;


export const InfoCodeContainer = styled.View`
    flex-direction: column;
    align-items: left;
    padding: 16px 0;
`;
export const InfoCode = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: ${colors.gray[800]};
`;
export const DateTimeContainer = styled.View`
    flex-direction: row;
    align-items: left;
    margin: 16px 0;
`;

export const InfoDate = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: ${colors.gray[800]};
`;


export const DateTimeCard = styled.View`
    flex-direction: column;
    align-items: left;
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

