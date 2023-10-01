import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, ParkingListScreenConfig } from '../../constants';


export const StyledContainer = styled.View`
    background-color: ${colors.gray[100]};
    margin-bottom: 16;
    padding: 16px;
    height: ${(props) => (props.height ? props.height : 'auto')};
    flex-direction: column;
`;

export const DateHoursContainer = styled.View`
    background-color: ${colors.gray[100]};
    padding: 16px;
    flex: 1;
    flex-direction: column;
`;

export const MainView = styled.View`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding-bottom: 10%;
    
`;

export const ScrowViewStyled = styled.ScrollView`
    margin: 5px;
    padding: 5px;
`;

export const TouchableOpacityStyled = styled.TouchableOpacity`
    margin: 5px;
    padding: 5px;
    height: min-content;
`;