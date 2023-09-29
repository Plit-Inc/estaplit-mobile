import styled from 'styled-components';
import * as Constants from '../../../constants/index';

export const Element = styled.View`
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgColor};
  border-radius: ${Constants.badgedConfig.Utils.Radius};
`;

export const Label = styled.Text`
  font-family: ${Constants.badgedConfig.Utils.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-weight: 500;
  color: ${(props) => props.textColor};
`;
