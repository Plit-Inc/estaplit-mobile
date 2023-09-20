import styled from 'styled-components';
import { ticketCardConfig } from '../../../constants/index';

export const Container = styled.View`
  padding: ${ticketCardConfig.Utils.padding};
  border-radius: ${ticketCardConfig.Utils.BorderRadius};
  border: 1px solid ${ticketCardConfig.Utils.BorderColor};
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 5px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: ${ticketCardConfig.Utils.padding};
  padding-bottom: ${ticketCardConfig.Utils.padding};
`;

export const HeaderRow = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Text = styled.Text`
  font-family: ${ticketCardConfig.Utils.fontFamily.Regular};
  font-size: ${ticketCardConfig.Utils.FontSize.Medium};
  color: ${ticketCardConfig.Utils.TextColor};
  font-weight: ${ticketCardConfig.Utils.FontWeight};
`;
