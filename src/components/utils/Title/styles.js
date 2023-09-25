import styled from 'styled-components';
import { titleConfig } from '../../../constants';

export const TitleStyle = styled.Text`
  font-family: ${titleConfig.fontFamily};
  font-weight: ${titleConfig.FontWeight};
  font-size: ${titleConfig.FontSize};
  color: ${(props) => props.titleColor};
  line-height: 22px;
`;
