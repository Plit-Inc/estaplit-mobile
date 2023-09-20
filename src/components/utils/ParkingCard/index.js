import React from 'react';
import { Badges, Element, ParkImageCard, Info, InfoText, Row } from './styles';
import Badge from '../Badge';
import { View } from 'react-native';
import { Clock, MapPinLine, Star, Money } from 'phosphor-react-native';
import { parkingCardConfig } from '../../../constants/index';
import Title from '../Title';

function ParkingCard({
  isOpen,
  price,
  title,
  review,
  distance,
  hours,
  imagePath,
}) {
  return (
    <Element>
      <ParkImageCard source={{ uri: imagePath }} />
      <View>
        <Title
          text={title}
          color={
            isOpen
              ? parkingCardConfig.Default.TitleColor
              : parkingCardConfig.Disabled.TitleColor
          }
        />
        <Row>
          <Info>
            <MapPinLine
              size={parkingCardConfig.Utils.IconSize}
              color={parkingCardConfig.Utils.IconColor}
            />
            <InfoText>{distance} do seu destino</InfoText>
          </Info>
          <Info>
            <Star
              size={parkingCardConfig.Utils.IconSize}
              color={parkingCardConfig.Utils.IconColor}
            />
            <InfoText>{review}</InfoText>
          </Info>
        </Row>
        <Row>
          <Info>
            <Money
              size={parkingCardConfig.Utils.IconSize}
              color={parkingCardConfig.Utils.IconColor}
            />
            <InfoText>A partir de {price}</InfoText>
          </Info>
          <Info>
            <Clock
              size={parkingCardConfig.Utils.IconSize}
              color={parkingCardConfig.Utils.IconColor}
            />
            <InfoText>{hours}</InfoText>
          </Info>
        </Row>
        <Badges>
          <Badge label="Fechado" type="disabled" />
          <Badge label="Aceita reservas" type="success" />
        </Badges>
      </View>
    </Element>
  );
}

export default ParkingCard;
