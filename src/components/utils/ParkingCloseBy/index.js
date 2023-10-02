import React from 'react';
import { MapPinLine, Star, Money } from 'phosphor-react-native';
import { View } from 'react-native';
import { Container, InfosContainer, Row } from './style';
import Title from '../Title';
import {
  parkingCardConfig,
  parkingCloseByCardConfig,
} from '../../../constants';
import Badge from '../Badge';
import Info from '../Info';

function ParkingCloseByCard({ title, distance, price, rating, open_parking_spot }) {
  const icon = (
    <MapPinLine
      size={parkingCardConfig.Utils.IconSize}
      color={parkingCardConfig.Utils.IconColor}
    />
  );
  return (
    <Container>
      <Title text={title} color={parkingCloseByCardConfig.Utils.TitleColor} />
      <InfosContainer>
        <Row>
          <Info
            IconComponent={() => (
              <MapPinLine
                size={parkingCardConfig.Utils.IconSize}
                color={parkingCardConfig.Utils.IconColor}
              />
            )}
            text={`em ${distance}m`}
          />
          <Info
            IconComponent={() => (
              <Star
                size={parkingCardConfig.Utils.IconSize}
                color={parkingCardConfig.Utils.IconColor}
              />
            )}
            text={rating}
          />
        </Row>
        <Row>
          <Info
            IconComponent={() => (
              <Money
                size={parkingCardConfig.Utils.IconSize}
                color={parkingCardConfig.Utils.IconColor}
              />
            )}
            text={`A partir de R$${price}`}
          />
        </Row>
      </InfosContainer>
      {open_parking_spot > 0 && <View style={{ paddingRight: 96 }}>
        <Badge label="Vagas disponiveis" type="success" />
      </View>}

    </Container>
  );
}

export default ParkingCloseByCard;
