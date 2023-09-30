import DriversRoutes from "./driversRoutes";
import { NavigationContainer } from "@react-navigation/native";
import { DriverContextProvider } from "../Context/index";

export default function Routes() {
  return (
    <>
      <NavigationContainer>
        <DriverContextProvider>
          <DriversRoutes/>
        </DriverContextProvider>
      </NavigationContainer>
    </>
  )
}