import {Image, Linking, Share, Text, TouchableWithoutFeedback} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from '../../views/Home';
import ParkingDetail from '../../views/ParkingDetail';
import ParkingListScreen from '../../views/ParkingList';
import { colors, imagesConfig } from '../../constants/index';
import SuccessScreen from '../../views/Success';
import ScheduleParkingInfo from "../../views/ScheduleParkingInfo";
import HeaderTitle from "../../components/utils/HeaderTitle";
import ScheduleParkingContactValidation from "../../views/ScheduleParkingContactValidation";
import CancelSchedule from "../../views/CancelSchedule";
import ReserveParking from '../../views/ReserveParking';
import ConfirmReservation from '../../views/ConfirmReservation';
import VisualizeSchedule from "../../views/VisualizeSchedule";

const Stack = createNativeStackNavigator();
export default function DriversRoutes() {
  const onShare = async () => {
    try {
      await Share.share({
        message:
          'Confira esse estacionamento que encontrei no estaplit!',
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Image
              source={imagesConfig.EstaplitBlue}
              style={{ width: 124, height: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ParkingList"
        component={ParkingListScreen}
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
        })}
      />
      <Stack.Screen
        name="ReserveParking"
        component={ReserveParking}
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
            <HeaderTitle text={"Reservar vaga"}/>
          ),
        })}
      />
      <Stack.Screen
        name="ConfirmReservation"
        component={ConfirmReservation}
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
            <HeaderTitle text={"Confirme sua reserva"}/>
          ),
        })}
      />
      <Stack.Screen
        name="ParkingDetail"
        component={ParkingDetail}
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
          headerRight: () => (
            <TouchableWithoutFeedback onPress={() => {onShare()}}>
              <Ionicons
                name="share-outline"
                size={20}
                color={colors.primary[500]}
              />
            </TouchableWithoutFeedback>
          ),
          headerTitle: () => (
            <HeaderTitle text={"Detalhe do estacionamento"}/>
          ),
        })}
      />
      <Stack.Screen
        name="Success"
        component={SuccessScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ScheduleParkingInfo"
        component={ScheduleParkingInfo}
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
                <HeaderTitle text={"Insira suas informações"}/>
            ),
      })}/>

      <Stack.Screen
          name="ScheduleParkingContactValidation"
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
      <Stack.Screen
          name="CancelSchedule"
          component={CancelSchedule}
          options={({ navigation }) => ({
              headerLeft: () => (
                  <TouchableWithoutFeedback onPress={navigation.goBack}>
                      <Ionicons
                          name="arrow-back"
                          size={20}
                          color={colors.error[600]}
                      />
                  </TouchableWithoutFeedback>
              ),
              headerTitle: () => (
                  <HeaderTitle text={"Cancelar reserva"} style={{color: colors.error["600"]}}/>
              ),
          })}/>
      <Stack.Screen
        name="VisualizeSchedule"
        component={VisualizeSchedule}
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
            <HeaderTitle text={"Detalhes da reserva"} style={{color: colors.primary[500]}}/>
          ),
          headerRight: () => (
            <TouchableWithoutFeedback onPress={() => {navigation.navigate('CancelSchedule')}}>
              <Ionicons
                name="trash-outline"
                size={20}
                color={colors.primary[500]}
              />
            </TouchableWithoutFeedback>
          ),
        })}/>
    </Stack.Navigator>
  );
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
};
