
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navegacion/AppNavegacion";
import {initFirebase} from "./src/Utilidades"

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </>
  );
}
