import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navegacion/AppNavegacion";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </>
  );
}
