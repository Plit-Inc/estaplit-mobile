import React from 'react';
import { View } from 'react-native';
import { TitleStyle } from './styles';

function Title({ text, color }) {
  return (
    <View>
      <TitleStyle numberOfLines={1} ellipsizeMode="tail" titleColor={color}>
        {text}
      </TitleStyle>
    </View>
  );
}

export default Title;
