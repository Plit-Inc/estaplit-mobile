import styled from 'styled-components';
import { successScreenConfig } from '../../constants';

export const SafeView = styled.SafeAreaView`
  flex-grow: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const ConfirmationTitle = styled.Text`
  font-family: ${successScreenConfig.Utils.fontFamily.Regular};
  color: ${successScreenConfig.Utils.TextColor};
  font-size: ${successScreenConfig.Utils.FontSize};
  text-align: center;
  width: 327px;
`;

export const Address = styled.Text`
  font-family: ${successScreenConfig.Utils.fontFamily.Regular};
  color: ${successScreenConfig.Utils.TextColor};
  font-size: 14px;
  text-align: center;
`;

export const ReservationCard = styled.View`
  width: 343px;
  align-items: center;
  justify-content: space-between;
  background-color: ${successScreenConfig.ReservationCard.BackgroundColor};
  border-radius: ${successScreenConfig.ReservationCard.BorderRadius};
`;
