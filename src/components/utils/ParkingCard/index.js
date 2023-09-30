import React from 'react';
import { View } from 'react-native';
import { Clock, MapPinLine, Star, Money } from 'phosphor-react-native';
import { Badges, Element, ParkImageCard, Info, InfoText, Row } from './styles';
import Badge from '../Badge';
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
  badges,
}) {
  return (
    <Element>
      <ParkImageCard source={{ uri: imagePath }} />
      <View>
        <View style={{ paddingBottom: 8 }}>
          <Title
            text={title}
            color={
              isOpen
                ? parkingCardConfig.Default.TitleColor
                : parkingCardConfig.Disabled.TitleColor
            }
          />
        </View>
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
          {badges
            ? badges.map((item, index) => (
                <Badge
                  key={`${item}-${index}`}
                  label={item.label}
                  type={item.type}
                />
              ))
            : null}
        </Badges>
      </View>
    </Element>
  );
}

export default ParkingCard;
