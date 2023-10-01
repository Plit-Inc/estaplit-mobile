import { Image, Linking, TouchableWithoutFeedback } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from '../../views/Home';
import ParkingDetail from '../../views/ParkingDetail';
import ParkingListScreen from '../../views/ParkingList';
import { colors, imagesConfig } from '../../constants/index';
import SuccessScreen from '../../views/Success';

const Stack = createNativeStackNavigator();
export default function DriversRoutes() {
  return (
    <Stack.Navigator initialRouteName="Success" screenOptions={screenOptions}>
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
            <TouchableWithoutFeedback
              onPress={() => {
                Linking.openURL('whatsapp://send?text=MESSAGE!');
              }}
            >
              <Ionicons
                name="share-outline"
                size={20}
                color={colors.primary[500]}
              />
            </TouchableWithoutFeedback>
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
