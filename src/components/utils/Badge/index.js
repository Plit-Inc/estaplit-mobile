import React from 'react';
import { Element, Label } from './styles';
import * as Constants from '../../../constants/index';

function getStylesByType(type) {
  switch (type) {
    case 'success':
      return Constants.badgedConfig.Success;
    case 'disabled':
      return Constants.badgedConfig.Disabled;
    default:
      return Constants.badgedConfig.Default;
  }
}

function Badge({ label, type }) {
  const style = getStylesByType(type);

  return (
    <Element bgColor={style.BackgroundColor} padding={style.Padding}>
      <Label textColor={style.Color} fontSize={style.FontSize}>
        {label}
      </Label>
    </Element>
  );
}

export default Badge;
