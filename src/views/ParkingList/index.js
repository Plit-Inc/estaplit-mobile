import React from 'react';
import { ScrollView, StatusBar, View, Text } from 'react-native';
import { LocationContainer, SafeView, Title, Info } from './style';
import Input from '../../components/utils/Input';
import ParkingCard from '../../components/utils/ParkingCard';
import DateToggle from '../../components/utils/DateToggle';

function ParkingListScreen() {
  const options = [
    {
      label: 'Aberto',
      type: 'success',
    },
    {
      label: 'Aceita Reserva',
      type: 'success',
    },
  ];

  return (
    <SafeView>
      <LocationContainer>
        <Title>Indo para</Title>
        <Input label="Marco Zero" />
      </LocationContainer>
      <ScrollView>
        <View>
          <Text>Ola</Text>
        </View>
        <View>
          <Text>Ola</Text>
        </View>
        <View>
          <Text>Ola</Text>
        </View>
        <View>
          <Text>Ola</Text>
        </View>
      </ScrollView>
      <LocationContainer>
        <Info>3 estacionamentos encontrados</Info>
      </LocationContainer>
      <ParkingCard
        isOpen
        price="R$1,25"
        title="Estacionamento mais barato"
        distance="200m"
        review="4,5 (233)"
        hours="07:00 - 22:00"
        badges={options}
        imagePath="https://jconlineimagem.ne10.uol.com.br/imagem/noticia/2016/04/19/normal/e7e14c4d697e5b686f8dca60cd97973f.jpg"
      />
    </SafeView>
  );
}

export default ParkingListScreen;
