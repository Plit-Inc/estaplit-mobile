import DriversRoutes from "./driversRoutes";
import { NavigationContainer } from "@react-navigation/native";


export default function Routes() {
  return (
    <>
      <NavigationContainer>
          <DriversRoutes/>
      </NavigationContainer>
    </>
  )
}