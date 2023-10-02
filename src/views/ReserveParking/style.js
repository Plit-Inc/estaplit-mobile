import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, ParkingListScreenConfig } from '../../constants';


export const StyledParkingContainer = styled.View`
    flex-direction: column;
`;
export const DateHoursContainer = styled.View`
    background-color: ${colors.gray[100]};
    flex-direction: column;
`;

export const MainView = styled.View`
    height: 100%;
    background-color: ${colors.gray["100"]};
    padding: 20px;
`;

export const BodyContainer = styled.View`
    background-color: ${colors.gray[100]};
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
`;

export const ScrowViewStyled = styled.ScrollView`
    margin-top: 16px;
`;

