import React from 'react';
import { TitleStyle } from './styles';
function Title({ text, color }) {
  return <TitleStyle titleColor={color}>{text}</TitleStyle>;
}

export default Title;
