import React, { useState } from 'react';
import { Button, Image, StatusBar, TouchableOpacity } from 'react-native';
import Input from '../../components/utils/Input';
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
} from './style';
import TicketCard from '../../components/utils/TicketCard';

function HomeScreen({ navigation }) {
  const [inputText, setInputText] = useState('');

  return (
    <>
      <StatusBar backgroundColor="transparent" />
      <SafeView>
        <LogoContainer>
          <Image source={require('../../../assets/estaplit-icon-blue.png')} />
        </LogoContainer>
        <SearchContainer>
          <Title>Para onde você deseja ir?</Title>
          <InputContainer>
            <Input
              label="Destino"
              placeholder="Ex: Marco Zero"
              state={inputText}
              setState={setInputText}
            />
          </InputContainer>
          <MainButton
            text="Buscar estacionamentos "
            iconName="search"
            styleName="default"
          />
        </SearchContainer>

        <TicketContainer>
          <TicketHeader>
            <Title>Próximas reservas</Title>
            <TouchableOpacity onPress={() => {}}>
              <Text>Ver todas</Text>
            </TouchableOpacity>
          </TicketHeader>
          <TicketCard title="Estapar Estacionamentos" />
        </TicketContainer>
        <Button
          title="Go to ParkingList"
          onPress={() => navigation.navigate('ParkingList')}
        />
      </SafeView>
    </>
  );
}

export default HomeScreen;
