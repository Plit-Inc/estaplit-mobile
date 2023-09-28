import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, HomeScreenConfig } from '../../constants';

export const SafeView = styled(SafeAreaView)`
  background-color: ${colors.gray[100]};
  flex-grow: 1;
  padding: ${HomeScreenConfig.Utils.padding};
`;

const BaseContainer = styled.View`
  padding-top: ${HomeScreenConfig.Search.paddingTop};
  padding-bottom: ${HomeScreenConfig.Search.paddingBottom};
`;

export const TicketContainer = styled(BaseContainer)``;

export const SearchContainer = styled(BaseContainer)``;

export const LogoContainer = styled.View`
  background-color: #fefefe;
  display: flex;
  align-items: center;
`;

export const Title = styled.Text`
  padding-bottom: ${HomeScreenConfig.Utils.padding};
  font-size: ${HomeScreenConfig.Title.fontSize};
  font-weight: ${HomeScreenConfig.Title.fontWeight};
  line-height: ${HomeScreenConfig.Title.lineHeight};
  font-family: ${HomeScreenConfig.Utils.fontFamily};
`;

export const InputContainer = styled.View`
  padding-bottom: 24px;
`;

export const TicketHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text`
  height: 32px;
  font-family: ${HomeScreenConfig.Ticket.fontFamily};
  font-size: ${HomeScreenConfig.Ticket.fontSize};
  font-weight: ${HomeScreenConfig.Ticket.fontWeight};
  line-height: 18px;
  color: ${HomeScreenConfig.Ticket.color};
  padding: 7px 0;
`;
