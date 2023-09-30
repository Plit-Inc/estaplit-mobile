import { Linking, TouchableWithoutFeedback } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from '../../views/Home';
import ParkingDetail from '../../views/ParkingDetail';
import ParkingListScreen from '../../views/ParkingList';
import { colors } from '../../constants/index';

const Stack = createNativeStackNavigator();
export default function DriversRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
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
