import styled from 'styled-components/native';
import { buttonConfig } from '../../../constants/index';

export const MainButtonStyle = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => props.padding};
  border: ${(props) => (props.border ? props.border : 'transparent')};
  border-radius: ${buttonConfig.Default.Primary.Default.Radius};
`;

export const MainButtonTextStyle = styled.Text`
  color: ${(props) => props.textColor};
  font-family: ${buttonConfig.Utils.fontFamily};
  line-height: ${(props) => props.lineHeight};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;
