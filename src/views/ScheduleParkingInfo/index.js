import {Text, View} from "react-native";
import React, {useState} from "react";
import Input from "../../components/utils/Input";
import {colors} from "../../constants";
import {TextInput} from "react-native-paper";
import { MaskedTextInput } from "react-native-mask-text";
import {ScheduleParkingInfoStyle} from "./style";
import MainButton from "../../components/utils/MainButton";
import Separator from "../../components/utils/Separator";
import ScreenIndicator from "../../components/utils/ScreenIndicator";
import * as Constants from '../../constants';

export default function ScheduleParkingInfo() {
    const [scheduleParkingInfo, setScheduleParkingInfo] = useState({
        name: '',
        phoneNumber: '',
        car: ''
    });

    const handleChange = async (value, type) => {
        setScheduleParkingInfo(prev => ({...prev, [type]: value}));
    };
    return (
        <ScheduleParkingInfoStyle>
            <View style={{gap: 24}}>
                <TextInput
                    style={{backgroundColor: 'white'}}
                    label="Nome e Sobrenome"
                    value={scheduleParkingInfo.name}
                    onChangeText={(value) => handleChange(value, "name")}
                />
                <TextInput
                    style={{backgroundColor: 'white'}}
                    label="DDD + Celular"
                    placeholder={"(99) 99999-9999"}
                    value={scheduleParkingInfo.phone}
                    keyboardType={"number-pad"}
                    render={props =>
                        <MaskedTextInput
                            {...props}
                            onChangeText={(text, rawText) => handleChange(rawText, "phone")}
                            mask="(99) 99999-9999"
                        />
                    }
                />
                <TextInput
                    style={{backgroundColor: 'white'}}
                    label="Seu carro"
                    value={scheduleParkingInfo.car}
                    onChangeText={(value) => handleChange(value, "car")}
                />
            </View>
            <View style={{gap: 8}}>
                <Separator style={{borderBottomWidth: 1}}/>
                <ScreenIndicator numberOfFilledWidgets={1}/>
                <MainButton text={"Continuar"} iconName={"arrow-forward"} styleName="default" onPress={() => navigation.navigate('ParkingList')}/>
            </View>
        </ScheduleParkingInfoStyle>
    )
}