import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { pantalla } from "../Utilidades";
import { EmpleosPantalla } from "../Pantallas/Empleos/EmpleosPantalla";
import { AddEmpleoPantalla } from "../Pantallas/Empleos/AddEmpleoPantalla";

const Stack = createNativeStackNavigator();

export function EmpleoStack(param) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={pantalla.empleo.empleos}
        component={EmpleosPantalla}
        options={{ title: "Empleos" }}
      />
      <Stack.Screen
        name={pantalla.empleo.addEmpleo}
        component={AddEmpleoPantalla}
        options={{ title: "Crear Empleo" }}
      />
    </Stack.Navigator>
  );
}
