import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeParkingOwner from "../../views/HomeParkingOwner";
import ScheduleParkingContactValidation from "../../views/ScheduleParkingContactValidation";
import {Image, TouchableWithoutFeedback} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {colors} from "../../constants";
import HeaderTitle from "../../components/utils/HeaderTitle";
import ParkingOwnerLogin from "../../views/ParkingOwnerLogin";

const Stack = createNativeStackNavigator();
export default function ParkingOwnerRoutes() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Stack.Screen
                name="Home"
                component={HomeParkingOwner}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ParkingOwnerLogin"
                component={ParkingOwnerLogin}
                options={({ navigation }) => ({
                    headerTitle: () => (
                        <Image
                            style={{
                                width: 124,
                                height: 40,
                            }}
                            source={require('../../../assets/estaplit-spot-logo.png')}
                        />
                    ),
                })}/>
            <Stack.Screen
                name="ParkingOwnerContactValidation"
                component={ScheduleParkingContactValidation}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <TouchableWithoutFeedback onPress={navigation.goBack}>
                            <Ionicons
                                name="arrow-back"
                                size={20}
                                color={colors.primary[500]}
                            />
                        </TouchableWithoutFeedback>
                    ),
                    headerTitle: () => (
                        <HeaderTitle text={"Valide o seu celular"}/>
                    ),
                })}/>
        </Stack.Navigator>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#FEFEFE',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerShadowVisible: false,
    headerTitleAlign: 'center',
};
