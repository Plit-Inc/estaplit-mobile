import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Location from 'expo-location';
import axios from 'axios';
import { colors, AutoCompleteConfig } from '../../../constants/index';

const GOOGLE_PLACES_API_KEY = 'AIzaSyCd6RiuEXOXE5XDoVKBGMlRZrOwM7dEBOo';

function AutoCompleteInput() {
  const [currentLocation, setCurrentLocation] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [showCurrentAddress, setShowCurrentAddress] = useState(false);

  const [inputText, setInputText] = useState('');

  const [selectedLocation, setSelectedLocation] = useState('');

  const [locateIconColor, setLocateIconColor] = useState(
    AutoCompleteConfig.Icon.color,
  );

  const [hasTextInput, setHasTextInput] = useState(false);
  const containerHeight = hasTextInput ? 300 : 70;

  const styles = StyleSheet.create({
    container: {
      height: containerHeight,
    },
  });

  const textInputRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location.coords);
      }
    })();
  }, []);

  const handleGetCurrentLocation = async () => {
    if (currentLocation) {
      if (showCurrentAddress) {
        setLocateIconColor(AutoCompleteConfig.Icon.color);
        setShowCurrentAddress(false);
        setInputText('');
        // setCurrentLocation('');
        return;
      }
      const { latitude, longitude } = currentLocation;
      setShowCurrentAddress(true);
      setLocateIconColor(AutoCompleteConfig.Icon.selectedColor);

      try {
        await getAddressFromCoords(latitude, longitude);
      } catch (error) {
        console.error('Error getting address:', error);
      }
    } else {
      console.error('Location not available.');
    }
  };

  const getAddressFromCoords = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_PLACES_API_KEY}`,
      );

      if (response.data?.results) {
        console.log('response', response);
        const address = response.data.results[0].formatted_address;
        setCurrentAddress(address);
        setInputText(address);
        console.log(address);
      }
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
    }
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        ref={textInputRef}
        placeholder="Ex: Marco Zero"
        returnKeyType="default"
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'pt-BR',
          components: 'country:br',
        }}
        onPress={(data, details) => {
          setSelectedLocation(details.geometry.location);
        }}
        onFail={(error) => console.error(error)}
        fetchDetails
        renderRow={(data) => (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Text
              ellipsizeMode="head"
              style={{
                color: AutoCompleteConfig.Text.color,
                fontFamily: AutoCompleteConfig.Utils.fontFamily,
                fontSize: AutoCompleteConfig.Text.fontSize,
                lineHeight: AutoCompleteConfig.Text.lineHeight,
                paddingRight: 0,
              }}
            >
              {data.description}
            </Text>
            <Ionicons
              name="arrow-back"
              size={AutoCompleteConfig.RowIcon.size}
              color={AutoCompleteConfig.Icon.color}
              style={{ transform: [{ rotate: '45deg' }], marginLeft: 20 }}
            />
          </View>
        )}
        renderRightButton={() => (
          <TouchableWithoutFeedback onPress={handleGetCurrentLocation}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}
            >
              <Ionicons
                name="locate-outline"
                size={AutoCompleteConfig.Icon.size}
                color={locateIconColor}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
        enablePoweredByContainer={false}
        enableHighAccuracyLocation
        textInputProps={{
          InputComp: TextInput,
          value: inputText,
          onChangeText: (value) => {
            if (!currentLocation) {
              setInputText(value);
            }
          },
          onBlur: () => {
            setHasTextInput(false);
          },
          onFocus: () => {
            setHasTextInput(true);
          },
        }}
        styles={{
          textInputContainer: {
            backgroundColor: colors.gray[100],
            borderBottomWidth: 1,
            borderColor: colors.gray[600],
          },
          textInput: {
            fontFamily: AutoCompleteConfig.Utils.fontFamily,
            paddingLeft: 0,
            height: 40,
            color: AutoCompleteConfig.Utils.color,
            fontSize: AutoCompleteConfig.Placeholder.fontSize,
            lineHeight: AutoCompleteConfig.Placeholder.lineHeight,
          },
        }}
      />
    </View>
  );
}

export default AutoCompleteInput;
