import styled from "styled-components/native";
import * as Constants from '../../../constants/index';
import { Animated } from "react-native";

export const ScreenIndicatorStyle = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
`;

export const UncoloredWidget = styled(Animated.View)`
    background-color: ${Constants.colors.gray["400"]};
    border-radius: 52px;
    height: 4px;
    width: 107px;
`

export const ColoredWidget = styled(Animated.View)`
    background-color: ${Constants.colors.primary[500]};
    border-radius: 52px;
    height: 100%;
    width: ${props => props.Width ? `${props.Width.current}%` : 0};
`