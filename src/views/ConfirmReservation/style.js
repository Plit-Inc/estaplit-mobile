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

