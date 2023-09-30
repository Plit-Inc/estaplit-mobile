import React, { useCallback, useMemo, useRef } from 'react';
import 'react-native-gesture-handler';
import { View, Text, StyleSheet, StatusBar, Button } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

function BottomSheetModalStyle() {
  const bottomSheetRef = useRef();
  const snapPoints = ['48%'];

  // renders
  return (
    <BottomSheetModalProvider>
      <View>
        <Button title="Present Modal" />
        <StatusBar />
        <BottomSheetModal
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
        >
          <View>
            <Text>Hello</Text>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BottomSheetModalStyle;
