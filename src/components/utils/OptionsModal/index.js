import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { colors } from '../../../constants/index';
import { Options, Row } from './style';
import MainButton from '../MainButton';

function OptionsModal() {
  const [distance, setDistance] = useState(false);
  const [avaliation, setAvaliation] = useState(false);
  const [price, setPrice] = useState(false);

  return (
    <View
      style={{ flex: 1, paddingLeft: 16, paddingRight: 16, paddingBottom: 80 }}
    >
      <Options>
        <Row
          style={{ borderBottomWidth: 1, borderBottomColor: colors.gray[300] }}
        >
          <Text>Distância</Text>
          <RadioButton
            value="first"
            color={colors.primary[500]}
            status={distance ? 'checked' : 'unchecked'}
            onPress={() => setDistance(!distance)}
          />
        </Row>

        <Row
          style={{ borderBottomWidth: 1, borderBottomColor: colors.gray[300] }}
        >
          <Text>Avaliação</Text>
          <RadioButton
            value="first"
            color={colors.primary[500]}
            status={avaliation ? 'checked' : 'unchecked'}
            onPress={() => setAvaliation(!avaliation)}
          />
        </Row>

        <Row>
          <Text>Preço</Text>
          <RadioButton
            value="first"
            color={colors.primary[500]}
            status={price ? 'checked' : 'unchecked'}
            onPress={() => setPrice(!price)}
          />
        </Row>
      </Options>
      <MainButton text="Aplicar" styleName="default" />
    </View>
  );
}

export default OptionsModal;
