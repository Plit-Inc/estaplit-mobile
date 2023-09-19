import { Text } from "react-native";
import { MainButtonStyle, MainButtonTextStyle } from "./style";
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Constants from "../../../constants/index";
import { TextInput } from 'react-native-paper';
import { useState } from "react";


export default function Input({ label, placeholder, state, setState }) {

    return (
        <TextInput 
            mode="flat"
            style={{backgroundColor: 'white'}}
            placeholder={placeholder}
            label={label}
            value={state}
            onChangeText={text => setState(text)}
        />
    )
}