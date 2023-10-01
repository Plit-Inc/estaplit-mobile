import React, { useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MainButton from '../../components/utils/MainButton';
import {
  InputContainer,
  LogoContainer,
  SafeView,
  SearchContainer,
  TicketContainer,
  TicketHeader,
  Title,
  Text,
  CloseParkingsContainer,
} from './style';
import TicketCard from '../../components/utils/TicketCard';
import AutoCompleteInput from '../../components/utils/AutoCompleteInput';
import Badge from '../../components/utils/Badge';
import ParkingCloseByCard from '../../components/utils/ParkingCloseBy';

function HomeScreen({ navigation }) {
  const [inputText, setInputText] = useState('');

  return (
    <SafeView>
      <StatusBar backgroundColor="transparent" />
      <ScrollView
        alwaysBounceVertical
        automaticallyAdjustContentInsets
        showsVerticalScrollIndicator={false}
      >
        <InputContainer>
          <Title>Para onde você deseja ir?</Title>
        </InputContainer>
        <AutoCompleteInput callback={setInputText} />
        <SearchContainer>
          <MainButton
            text="Buscar estacionamentos "
            iconName="search"
            styleName="default"
            callback={() => navigation.navigate('ParkingList')}
          />
        </SearchContainer>
        <CloseParkingsContainer>
          <TicketHeader>
            <Title>Estacionamentos por perto</Title>
          </TicketHeader>
          <FlatList
            horizontal
            data={[
              { key: '1', title: 'RECIFE ROTATIVO ESTACIONAMENTOS' },
              { key: '2', title: 'RECIFE R0TATIVO ESTACIONAMENTOS' },
              { key: '3', title: 'RECIFE ROTATIVO ESTACIONAMENTOS' },
              { key: '4', title: 'RECIFE ROTATIVO ESTACIONAMENTOS' },
            ]}
            renderItem={({ item }) => <ParkingCloseByCard title={item.title} />}
            keyExtractor={(item) => item.key}
            showsHorizontalScrollIndicator={false}
          />
        </CloseParkingsContainer>
        <TicketContainer>
          <TicketHeader>
            <Title>Próximas reservas</Title>
            <TouchableOpacity onPress={() => {}}>
              <Badge label="Ver todas" type="default" />
            </TouchableOpacity>
          </TicketHeader>
          <TicketCard
            title="Estapar Estacionamentos"
            subtitle="Av. Jorn. Aníbal Fernandes, s/n - Cidade Universitária, Recife - PE, 50740-560"
            isDriver
          />
        </TicketContainer>
      </ScrollView>
    </SafeView>
  );
}

export default HomeScreen;
