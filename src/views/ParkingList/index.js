import React, { useRef, useState } from 'react';
import {ScrollView, View, TouchableOpacity, FlatList} from 'react-native';
import { Modalize } from 'react-native-modalize';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LocationContainer, SafeView, Info, ParkingListTitle } from './style';
import Input from '../../components/utils/Input';
import ParkingCard from '../../components/utils/ParkingCard';
import { colors } from '../../constants';
import OptionsModal from '../../components/utils/OptionsModal';
import Title from '../../components/utils/Title';
import FilterCard from '../../components/utils/FilterCard';
import {useNavigation} from "@react-navigation/native";
import {useDriverContext} from "../../Context";
import TicketCard from "../../components/utils/TicketCard";

function ParkingListScreen({route, navigation}) {
  const { destination } = route.params;
  const { setSelectedParkingSpace, parking_spaces } = useDriverContext();
  const [inputText, setInputText] = useState(destination);

  const [allFilters, setAllFilters] = useState(false);
  const [acceptsReservation, setAcceptsReservation] = useState(false);
  const [fixValue, setFixValue] = useState(false);
  const [onlinePayment, setOnlinePayment] = useState(false);

  const modalizeRef = useRef(null);

  const [checked, setChecked] = useState('first');

  const onOpen = () => {
    modalizeRef.current?.open();
    setAllFilters(true);
  };

  const onClose = () => {
    modalizeRef.current?.close();
    setAllFilters(false);
  };

  return (
    <SafeView>
      <View style={{height: '100%'}}>
        <LocationContainer>
          <ParkingListTitle>Indo para</ParkingListTitle>
          <View
            style={{
              flex: 1,
              fontSize: 26,
            }}
          >
            <Input
              state={inputText}
              setState={setInputText}
              fontSize={26}
              textColor={colors.primary[500]}
              withIcon
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
          <TouchableOpacity onPress={onOpen}>
            <FilterCard
              icon
              selected={allFilters}
              callback={setAllFilters}
              openModal={() => modalizeRef.current?.open()}
            />
          </TouchableOpacity>
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
        <Info>{parking_spaces.length} estacionamentos encontrados</Info>
        <FlatList
          data={parking_spaces}
          renderItem={({ item }) => <ParkingCard
            isOpen
            callback={() => { navigation.navigate('ParkingDetail'); setSelectedParkingSpace(item) }}
            price={item.price}
            title={item.name}
            distance={item.distance}
            review={item.rate}
            hours={item.hour}
            imagePath={item.images[0]}
          />}
          keyExtractor={(item) => item.id}
        />
      </View>

      <Modalize
        ref={modalizeRef}
        adjustToContentHeight
        HeaderComponent={
          <View
            style={{
              height: 56,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignContent: 'center',
              paddingLeft: 16,
              paddingRight: 16,
            }}
          >
            <TouchableOpacity />
            <Title text="Ordenar por" color={colors.primary[500]} />
            <TouchableOpacity onPress={onClose} style={{ paddingTop: 5 }}>
              <Ionicons name="close" size={24} color={colors.primary[500]} />
            </TouchableOpacity>
          </View>
        }
        onOverlayPress={() => {
          setAllFilters(false);
        }}
      >
        <OptionsModal />
      </Modalize>
    </SafeView>
  );
}

export default ParkingListScreen;
