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
`;

export const TicketContainer = styled(BaseContainer)`
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const CloseParkingsContainer = styled(BaseContainer)``;

export const SearchContainer = styled.View`
  height: auto;
  padding-bottom: 24px;
`;

export const LogoContainer = styled.View`
  background-color: #fefefe;
  display: flex;
  align-items: center;
`;

export const Title = styled.Text`
  padding-bottom: ${HomeScreenConfig.Utils.padding};
  font-size: ${HomeScreenConfig.Title.fontSize};
  line-height: ${HomeScreenConfig.Title.lineHeight};
  font-family: ${HomeScreenConfig.Title.fontFamily};
`;

export const InputContainer = styled.View`
  padding-top: 32px;
`;

export const TicketHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
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
