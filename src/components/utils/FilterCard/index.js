import React, { useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FilterCardStyle } from './style';
import Title from '../Title';
import { colors } from '../../../constants';

function FilterCard({ title, icon, selected, callback, openModal }) {
  const handlePress = () => {
    callback(!selected);
    if (openModal) {
      openModal();
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
      <FilterCardStyle isSelected={selected}>
        {title ? (
          <Title
            text={title}
            color={selected ? colors.primary[500] : colors.gray[600]}
          />
        ) : null}
        {icon ? (
          <Ionicons
            name="filter"
            size={22}
            color={selected ? colors.primary[500] : colors.gray[600]}
          />
        ) : null}
      </FilterCardStyle>
    </TouchableOpacity>
  );
}

export default FilterCard;
