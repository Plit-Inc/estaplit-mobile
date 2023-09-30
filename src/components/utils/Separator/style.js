import styled from "styled-components";
import * as Constants from '../../../constants/index';

export const SeparatorStyle = styled.View`
    border-bottom-style: solid;
    border-bottom-width: 8px;
    width: 120%;
    border-color: ${Constants.colors.gray[300]};
    margin-left: -20px;
`;