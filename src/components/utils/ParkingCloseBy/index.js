import React from 'react';
import { Clock, MapPinLine, Star, Money } from 'phosphor-react-native';
import { View } from 'react-native';
import { Container, Info, InfosContainer, InfoText, Row } from './style';
import Title from '../Title';
import {
  parkingCardConfig,
  parkingCloseByCardConfig,
} from '../../../constants';
import Badge from '../Badge';

function ParkingCloseByCard({ title }) {
  return (
    <Container>
      <Title text={title} color={parkingCloseByCardConfig.Utils.TitleColor} />
      <InfosContainer>
        <Row>
          <Info>
            <MapPinLine
              size={parkingCardConfig.Utils.IconSize}
              color={parkingCardConfig.Utils.IconColor}
            />
            <InfoText>em 500m</InfoText>
          </Info>
          <Info>
            <Star
              size={parkingCardConfig.Utils.IconSize}
              color={parkingCardConfig.Utils.IconColor}
            />
            <InfoText>4,3 (233)</InfoText>
          </Info>
        </Row>
        <Row>
          <Info>
            <Money
              size={parkingCardConfig.Utils.IconSize}
              color={parkingCardConfig.Utils.IconColor}
            />
            <InfoText>A partir de R$4,00</InfoText>
          </Info>
        </Row>
      </InfosContainer>
      <View style={{ paddingRight: 96 }}>
        <Badge label="Vagas disponiveis" type="success" />
      </View>
    </Container>
  );
}

export default ParkingCloseByCard;
