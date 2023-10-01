import React, {useState} from "react";
import {CodeField, useBlurOnFulfill, useClearByFocusCell} from "react-native-confirmation-code-field";
import {CodeFieldCellStyle, ScheduleParkingContactValidationStyle, Title} from "./style";
import {View} from "react-native";
import Separator from "../../components/utils/Separator";
import ScreenIndicator from "../../components/utils/ScreenIndicator";
import MainButton from "../../components/utils/MainButton";

const CELLCOUNT = 5;
export default function ScheduleParkingContactValidation() {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELLCOUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <ScheduleParkingContactValidationStyle>
            <View style={{gap: 32}}>
                <Title>Insira o código de 5 dígitos enviado para o seu celular (81) *****-9999 via SMS</Title>
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELLCOUNT}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({index, symbol, isFocused}) => (
                        <CodeFieldCellStyle key={index} text={value[index]} index={index} getCellOnLayoutHandler={getCellOnLayoutHandler} isFocused={isFocused}/>
                    )}
                />
            </View>
            <View style={{gap: 8}}>
                <Separator style={{borderBottomWidth: 1}}/>
                <ScreenIndicator numberOfFilledWidgets={2}/>
                <MainButton text={"Continuar"} iconName={"arrow-forward"} styleName="default" onPress={() => navigation.navigate('ParkingList')}/>
            </View>
        </ScheduleParkingContactValidationStyle>
    )
}