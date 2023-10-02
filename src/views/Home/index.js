import React, { useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import MainButton from '../../components/utils/MainButton';
import {
  SafeView,
  SearchContainer,
  TicketContainer,
  TicketHeader,
  Title,
  CloseParkingsContainer,
} from './style';
import TicketCard from '../../components/utils/TicketCard';
import AutoCompleteInput from '../../components/utils/AutoCompleteInput';
import ParkingCloseByCard from '../../components/utils/ParkingCloseBy';
import { useDriverContext } from '../../Context';

function HomeScreen({ navigation }) {
  const [inputText, setInputText] = useState('');
  const { reservations, parking_spaces, setSelectedParkingSpace } =
    useDriverContext();

  function visualizeSchedule(parking_id) {
    const currentParkingSpace = parking_spaces.filter(
      (parking_space) => parking_space.id === parking_id,
    )[0];
    setSelectedParkingSpace(currentParkingSpace);
    navigation.navigate('VisualizeSchedule');
  }
  return (
    <SafeView>
      <ScrollView
        alwaysBounceVertical
        automaticallyAdjustContentInsets
        showsVerticalScrollIndicator={false}
      >
        <Title>Para onde você deseja ir?</Title>
        <AutoCompleteInput callback={setInputText} />
        <SearchContainer>
          <MainButton
            text="Buscar estacionamentos "
            iconName="search"
            styleName="default"
            callback={() =>
              navigation.navigate('ParkingList', { destination: inputText })
            }
          />
        </SearchContainer>
        <CloseParkingsContainer>
          <TicketHeader>
            <Title>Estacionamentos por perto</Title>
          </TicketHeader>
          <FlatList
            horizontal
            data={parking_spaces}
            renderItem={({ item }) => (
              <ParkingCloseByCard
                title={item.name}
                price={item.price}
                distance={item.distance}
                rating={item.rate}
                open_parking_spot={item.open_parking_spot}
              />
            )}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </CloseParkingsContainer>
        <TicketContainer>
          <TicketHeader>
            <Title>Próximas reservas</Title>
          </TicketHeader>
          <FlatList
            horizontal
            data={reservations}
            renderItem={({ item }) => (
              <TicketCard
                title={item.parking_name}
                subtitle={item.address}
                hour={item.ticket_hour}
                ticket_date={item.ticket_date}
                ticket_status={item.status}
                parking_id={item.parking_id}
                isDriverFunction={visualizeSchedule}
                isDriver
              />
            )}
            keyExtractor={(item) => item.parking_id}
            showsHorizontalScrollIndicator={false}
          />
        </TicketContainer>
      </ScrollView>
    </SafeView>
  );
}

export default HomeScreen;
