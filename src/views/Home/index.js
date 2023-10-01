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
    <>
      <StatusBar backgroundColor="transparent" />
      <SafeView>
        {/* <ScrollView */}
        {/*  alwaysBounceVertical */}
        {/*  automaticallyAdjustContentInsets */}
        {/*  showsVerticalScrollIndicator={false} */}
        {/* > */}
        <LogoContainer>
          <Image
            style={{
              width: 124,
              height: 40,
            }}
            source={require('../../../assets/estaplit-icon-blue.png')}
          />
        </LogoContainer>
        <InputContainer>
          <Title>Para onde você deseja ir?</Title>
        </InputContainer>
        <AutoCompleteInput />
        <SearchContainer>
          <MainButton
            text="Buscar estacionamentos "
            iconName="search"
            styleName="default"
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
              { key: '2', title: 'RECIFE ESTACIONAMENTOS' },
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
          <TicketCard title="Estapar Estacionamentos" />
        </TicketContainer>
        <Button
          title="Go to ReserveParking"
          onPress={() => navigation.navigate('ReserveParking')}
        />
        <Button
          title="Go to ParkingList"
          onPress={() => navigation.navigate('ParkingList')}
        />
        {/* </ScrollView> */}
      </SafeView>
    </>
  );
}

export default HomeScreen;
