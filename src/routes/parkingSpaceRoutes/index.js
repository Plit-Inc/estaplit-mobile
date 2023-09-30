import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import ParkingLogin from '../../views/ParkingLogin';
import { logosConfig } from '../../constants';

const Stack = createNativeStackNavigator();
export default function ParkingRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="ParkingLogin"
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name="ParkingLogin"
        component={ParkingLogin}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Image
              source={logosConfig.EstaplitSpot}
              style={{ width: 120, height: 40 }}
            />
          ),
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
