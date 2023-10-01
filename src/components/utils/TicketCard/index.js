import React from 'react';
import { CalendarBlank, Clock } from 'phosphor-react-native';
import {
  Container,
  Header,
  Text,
  HeaderRow,
  Content,
  HeaderContent,
} from './styles';
import Badge from '../Badge';
import { ticketCardConfig } from '../../../constants/index';

import Title from '../Title';
import MainButton from '../MainButton';

function TicketCard({ title, subtitle, isDriver }) {
  return (
    <Container>
      <Header>
        <HeaderRow>
          <HeaderContent>
            <CalendarBlank
              size={ticketCardConfig.Utils.IconSize}
              color={ticketCardConfig.Utils.IconColor}
            />
            <Text style={{lineHeight: 15}}>26 Jan. 2023</Text>
          </HeaderContent>
          <HeaderContent>
            <Clock
              size={ticketCardConfig.Utils.IconSize}
              color={ticketCardConfig.Utils.IconColor}
            />
            <Text style={{lineHeight: 15}}>11:00</Text>
          </HeaderContent>
        </HeaderRow>
        <Badge label={isDriver ? "Confirmada" : "Pago"} type="success" />
      </Header>
      <Content>
        <Title text={title} color={ticketCardConfig.Utils.TitleColor} />
        <Text>
          {subtitle}
        </Text>
      </Content>
      {isDriver && <MainButton
          text="Ver detalhes"
          iconName="arrow-forward"
          styleName="transparent"
      />
      }

    </Container>
  );
}

export default TicketCard;
