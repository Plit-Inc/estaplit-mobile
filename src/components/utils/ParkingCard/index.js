import React from 'react';
import { View } from 'react-native';
import { Clock, MapPinLine, Star, Money } from 'phosphor-react-native';
import { Badges, Element, ParkImageCard, Row } from './styles';
import Badge from '../Badge';
import { parkingCardConfig } from '../../../constants/index';
import Title from '../Title';
import Info from '../Info';

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
          <Info 
            text={`${distance} do seu destino`} 
            IconComponent={ () => <MapPinLine
              size={parkingCardConfig.Utils.IconSize}
              color={parkingCardConfig.Utils.IconColor}
            />}
          />
          <Info 
            text={`${review}`} 
            IconComponent={ () => <Star
              size={parkingCardConfig.Utils.IconSize}
              color={parkingCardConfig.Utils.IconColor}
            />}
          />
        </Row>
        <Row>
          <Info 
            text={`A partir de ${price}`} 
            IconComponent={ () => <Money
              size={parkingCardConfig.Utils.IconSize}
              color={parkingCardConfig.Utils.IconColor}
            />}
          />
          <Info 
            text={`${hours}`} 
            IconComponent={ () => <Clock
              size={parkingCardConfig.Utils.IconSize}
              color={parkingCardConfig.Utils.IconColor}
            />}
          />
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
