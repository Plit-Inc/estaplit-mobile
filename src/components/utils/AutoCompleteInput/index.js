import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import { colors, AutoCompleteConfig } from '../../../constants/index';

function AutoCompleteInput({ callback }) {
  const GOOGLE_PLACES_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_KEY;
  const [liveLocation, setLiveLocation] = useState('');

  const [selectedLocation, setSelectedLocation] = useState('');

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
        setLiveLocation(location.coords);
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedLocation) {
      callback(selectedLocation);
    }
  }, [selectedLocation, liveLocation]);

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
          setSelectedLocation(data.terms[0].value);
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
        enablePoweredByContainer={false}
        enableHighAccuracyLocation
        textInputProps={{
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
