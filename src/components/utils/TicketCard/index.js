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

function TicketCard({ title, subtitle, isDriver, ticket_date, hour, ticket_status, parking_id, isDriverFunction }) {
  return (
    <Container>
      <Header>
        <HeaderRow>
          <HeaderContent>
            <CalendarBlank
              size={ticketCardConfig.Utils.IconSize}
              color={ticketCardConfig.Utils.IconColor}
            />
            <Text style={{lineHeight: 15}}>{ticket_date}</Text>
          </HeaderContent>
          <HeaderContent>
            <Clock
              size={ticketCardConfig.Utils.IconSize}
              color={ticketCardConfig.Utils.IconColor}
            />
            <Text style={{lineHeight: 15}}>{hour}</Text>
          </HeaderContent>
        </HeaderRow>
        <Badge label={ticket_status} type="success" />
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
          callback={() => {isDriverFunction(parking_id)}}
      />
      }

    </Container>
  );
}

export default TicketCard;
