import React, { useState } from 'react';
import { ScrollView, StatusBar, View, Text, TextInput } from 'react-native';
import { LocationContainer, SafeView, Title, Info } from './style';
import Input from '../../components/utils/Input';
import ParkingCard from '../../components/utils/ParkingCard';
import DateToggle from '../../components/utils/DateToggle';
import { colors } from '../../constants';
import FilterCard from '../../components/utils/FilterCard';

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

  const [allFilters, setAllFilters] = useState(false);
  const [acceptsReservation, setAcceptsReservation] = useState(false);
  const [fixValue, setFixValue] = useState(false);
  const [onlinePayment, setOnlinePayment] = useState(false);

  return (
    <SafeView>
      <LocationContainer>
        <Title>Indo para</Title>
        <View
          style={{
            flex: 1,
            fontSize: 26,
          }}
        >
          <Input
            state="Marco Zero"
            fontSize={26}
            textColor={colors.primary[500]}
          />
        </View>
      </LocationContainer>
      <ScrollView
        horizontal
        automaticallyAdjustContentInsets
        showsHorizontalScrollIndicator={false}
        style={{
          marginLeft: 16,
          marginTop: 14,
          height: 70,
        }}
      >
        <FilterCard icon selected={allFilters} callback={setAllFilters} />
        <FilterCard
          title="Aceita reservas"
          selected={acceptsReservation}
          callback={setAcceptsReservation}
        />
        <FilterCard
          title="Valor fixo"
          selected={fixValue}
          callback={setFixValue}
        />
        <FilterCard
          title="Pagamento online"
          selected={onlinePayment}
          callback={setOnlinePayment}
        />
      </ScrollView>
      <Info>3 estacionamentos encontrados</Info>
      <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
        <ParkingCard
          isOpen
          price="R$1,25"
          title="Estacionamento mais barato"
          distance="200m"
          review="4,5 (233)"
          hours="07:00 - 22:00"
          imagePath="https://jconlineimagem.ne10.uol.com.br/imagem/noticia/2016/04/19/normal/e7e14c4d697e5b686f8dca60cd97973f.jpg"
        />
        <ParkingCard
          isOpen
          price="R$1,25"
          title="Estacionamento do seu João Dawn"
          distance="200m"
          review="4,5 (233)"
          hours="07:00 - 22:00"
          badges={options}
          imagePath="https://jconlineimagem.ne10.uol.com.br/imagem/noticia/2016/04/19/normal/e7e14c4d697e5b686f8dca60cd97973f.jpg"
        />
        <ParkingCard
          isOpen
          price="R$1,25"
          title="Estacionamento da Thaiszinha mil grauuuuuuuu"
          distance="200m"
          review="4,5 (233)"
          hours="07:00 - 22:00"
          badges={options}
          imagePath="https://jconlineimagem.ne10.uol.com.br/imagem/noticia/2016/04/19/normal/e7e14c4d697e5b686f8dca60cd97973f.jpg"
        />
        <ParkingCard
          isOpen
          price="R$1,25"
          title="Estacionamento mais barato"
          distance="200m"
          review="4,5 (233)"
          hours="07:00 - 22:00"
          imagePath="https://jconlineimagem.ne10.uol.com.br/imagem/noticia/2016/04/19/normal/e7e14c4d697e5b686f8dca60cd97973f.jpg"
        />
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
      </ScrollView>
    </SafeView>
  );
}

export default ParkingListScreen;
