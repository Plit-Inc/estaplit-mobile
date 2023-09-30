import styled from 'styled-components';
import { colors, fontConfig, titleConfig } from '../../constants';

export const SafeView = styled.SafeAreaView`
  background-color: ${colors.gray[100]};
  flex-grow: 1;
`;

export const View = styled.View`
  flex-grow: 1;
  padding: 48px 16px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${fontConfig.Regular};
  font-size: 26px;
  color: ${colors.gray[800]};
  line-height: 24px;
  flex-wrap: wrap;
  padding-bottom: 32px;
`;

export const Header = styled.View``;
