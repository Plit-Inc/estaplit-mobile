import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, ParkingListScreenConfig } from '../../constants';


export const StyledContainer = styled.View`
    background-color: ${colors.gray[100]};
    margin-bottom: 16;
    padding: 16px;
    height: ${(props) => (props.height ? props.height : 'auto')};
    flex-direction: column;
    height: 15%;
`;

export const DateHoursContainer = styled.View`
    background-color: ${colors.gray[100]};
    padding: 16px;
    flex-direction: column;
    
`;

export const MainView = styled.View`
    height: 100%;
    /* justify-content: space-between; */
    padding-bottom: 10%;
    
`;

export const BodyContainer = styled.View`
    background-color: ${colors.gray[100]};
    padding: 10px;
    flex-direction: column;
    justify-content: space-between;
    height: 85%;
`;

export const ScrowViewStyled = styled.ScrollView`
    margin-top: 15px;
`;

