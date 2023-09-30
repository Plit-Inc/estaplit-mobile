import { NavigationContainer } from '@react-navigation/native';
import DriversRoutes from './driversRoutes';
import { DriverContextProvider } from '../Context/index';
import ParkingRoutes from './parkingSpaceRoutes';

export default function Routes() {
  return (
    <NavigationContainer>
      <DriverContextProvider>
        {/* <DriversRoutes /> */}
        <ParkingRoutes />
      </DriverContextProvider>
    </NavigationContainer>
  );
}
