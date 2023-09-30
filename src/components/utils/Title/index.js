import React from 'react';
import { View } from 'react-native';
import { TitleStyle } from './styles';

function Title({ text, color }) {
  return <TitleStyle titleColor={color}>{text}</TitleStyle>;
}

export default Title;
