import DriversRoutes from "./driversRoutes";
import { NavigationContainer } from "@react-navigation/native";
import { DriverContextProvider } from "../Context/index";
import ParkingOwnerRoutes from "./parkingOwnerRoutes";

export default function Routes() {
  return (
    <>
      <NavigationContainer>
        <DriverContextProvider>
          <DriversRoutes />
        {/*<ParkingOwnerRoutes />*/}
        </DriverContextProvider>
      </NavigationContainer>
    </>
  )
}