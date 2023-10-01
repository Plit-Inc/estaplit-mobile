import React from 'react';
import {
    DateToggleSelectedStyle,
  HeaderDateTextStyle,
  MainDateTextStyle,
} from './style';

export default function DateToggleSelect({
  headerDateText,
  mainDateText,
  isSelected,
}) {

  return (
    <DateToggleSelectedStyle
      isSelected={isSelected}
    >
      {headerDateText ? (
        <HeaderDateTextStyle isSelected={isSelected}>
          {headerDateText}
        </HeaderDateTextStyle>
      ) : null}
      {mainDateText ? (
        <MainDateTextStyle isSelected={isSelected}>
          {mainDateText}
        </MainDateTextStyle>
      ) : null}
    </DateToggleSelectedStyle>
  );
}
