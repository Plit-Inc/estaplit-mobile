import React, { useState } from 'react';
import { Text, StatusBar } from 'react-native';
import { Header, SafeView, Title, View } from './style';
import MainButton from '../../components/utils/MainButton';
import { colors } from '../../constants';
import Input from '../../components/utils/Input';

function ParkingLogin({ navigation }) {
  const [phone, setPhone] = useState('');

  return (
    <SafeView>
      <StatusBar backgroundColor="transparent" />
      <View>
        <Header>
          <Title>Insira seu número de celular para acessar uma conta</Title>
          <Input
            label="DDD + Celular"
            placeholder="(00) 00000-0000"
            fontSize={20}
            state={phone}
            setState={setPhone}
            textColor={colors.gray[800]}
          />
        </Header>
        <MainButton
          text="Entrar"
          iconName="arrow-forward"
          styleName="default"
          callback={() => navigation.navigate('')}
        />
      </View>
    </SafeView>
  );
}

export default ParkingLogin;
