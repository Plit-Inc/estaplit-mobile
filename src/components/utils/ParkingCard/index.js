import React from 'react'
import {
  Badges,
  Element,
  ParkImageCard,
  Info,
  InfoText,
  Row,
  Title
} from "./styles";
import Badge from "../Badge";
import { View } from "react-native";
import { Clock, MapPinLine, Star, Money } from 'phosphor-react-native';
import * as Constants from "../../../constants/index";


function ParkingCard({ isOpen, price, title, review, distance, hours, imagePath }) {

  return (
    <Element>
      <ParkImageCard source={{ uri: imagePath }} />
      <View>
        <Title open={isOpen}>{title}</Title>
        <Row>
          <Info>
            <MapPinLine
              size={Constants.parkingCardConfig.Utils.IconSize}
              color={Constants.parkingCardConfig.Utils.IconColor}
            />
            <InfoText>{distance} do seu destino</InfoText>
          </Info>
          <Info>
            <Star
              size={Constants.parkingCardConfig.Utils.IconSize}
              color={Constants.parkingCardConfig.Utils.IconColor}
            />
            <InfoText>{review}</InfoText>
          </Info>
        </Row>
        <Row>
          <Info>
            <Money
              size={Constants.parkingCardConfig.Utils.IconSize}
              color={Constants.parkingCardConfig.Utils.IconColor}
            />
            <InfoText>A partir de {price}</InfoText>
          </Info>
          <Info>
            <Clock
              size={Constants.parkingCardConfig.Utils.IconSize}
              color={Constants.parkingCardConfig.Utils.IconColor}
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
  )
}

export default ParkingCard;