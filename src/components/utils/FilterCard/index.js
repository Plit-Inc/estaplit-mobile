import React, { useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import BottomSheet from '@gorhom/bottom-sheet';
import { FilterCardStyle } from './style';
import Title from '../Title';
import { colors } from '../../../constants';

function FilterCard({ title, icon, selected, callback }) {
  const bottomSheetRef = useRef();
  const snapPoints = ['48%'];

  const [isModalVisible, setModalVisible] = useState(false);
  const handlePress = () => {
    callback(!selected);
    if (icon) {
      toggleModal();
    }
  };

  const toggleModal = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
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
            size={18}
            color={selected ? colors.primary[500] : colors.gray[600]}
          />
        ) : null}

        {icon ? (
          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            detached={false}
            snapPoints={['25%', '50%', '75%']}
          >
            <View>
              <Text>React Native Bottom Sheet</Text>
            </View>
          </BottomSheet>
        ) : null}
      </FilterCardStyle>
    </TouchableOpacity>
  );
}

export default FilterCard;
