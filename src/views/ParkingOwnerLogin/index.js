import {TextInput} from "react-native-paper";
import {MaskedTextInput} from "react-native-mask-text";
import {ParkingTitle} from "../ParkingDetail/style";
import {View} from "react-native";
import {useState} from "react";
import {ParkingOwnerLoginStyle} from "./style";
import {Title} from "../Home/style";
import Separator from "../../components/utils/Separator";
import ScreenIndicator from "../../components/utils/ScreenIndicator";
import MainButton from "../../components/utils/MainButton";

export default function ParkingOwnerLogin() {
    const [phoneNumber, setPhoneNumber] = useState("");
    return (
        <ParkingOwnerLoginStyle>
            <View>
                <Title>Insira seu número de celular para acessar uma conta</Title>
                <TextInput
                    style={{backgroundColor: 'white'}}
                    label="DDD + Celular"
                    placeholder={"(99) 99999-9999"}
                    value={phoneNumber}
                    keyboardType={"number-pad"}
                    render={props =>
                        <MaskedTextInput
                            {...props}
                            onChangeText={(text, rawText) => setPhoneNumber(rawText)}
                            mask="(99) 99999-9999"
                        />
                    }
                />
            </View>
            <View style={{gap: 8}}>
                <Separator style={{borderBottomWidth: 1}}/>
                <ScreenIndicator numberOfFilledWidgets={1}/>
                <MainButton text={"Continuar"} iconName={"arrow-forward"} styleName="default" onPress={() => navigation.navigate('ParkingList')}/>
            </View>
        </ParkingOwnerLoginStyle>
    )
}