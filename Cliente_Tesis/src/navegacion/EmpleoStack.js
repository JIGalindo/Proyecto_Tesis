import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { pantalla } from "../Utilidades";
import { EmpleosPantalla } from "../Pantallas/Empleos/EmpleosPantalla";
import { AddEmpleoPantalla } from "../Pantallas/Empleos/AddEmpleoPantalla";
import { EmpleoPantalla } from "../Pantallas/Empleos/EmpleoPantalla";

const Stack = createNativeStackNavigator();

export function EmpleoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={pantalla.empleo.empleos}
        component={EmpleosPantalla}
        options={{
          title: "Empleos",
          statusBarColor: "#00a680",
          headerTintColor: "#ffff",
          headerStyle: { backgroundColor: "#00a680" },
        }}
      />
      <Stack.Screen
        name={pantalla.empleo.addEmpleo}
        component={AddEmpleoPantalla}
        options={{
          title: "Crear Empleo",
          statusBarColor: "#00a680",
          headerTintColor: "#ffff",
          headerStyle: { backgroundColor: "#00a680" },
        }}
      />
      <Stack.Screen
        name={pantalla.empleo.empleo}
        component={EmpleoPantalla}
        options={{
          title: "Empleo",
          statusBarColor: "#00a680",
          headerTintColor: "#ffff",
          headerStyle: { backgroundColor: "#00a680" },
        }}
      />
    </Stack.Navigator>
  );
}
