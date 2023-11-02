import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import { pantalla } from "../Utilidades";
import {EmpleoStack} from "./EmpleoStack"
import {PostulacionStack} from "./PostulacionStack"
import { BuscarStack } from "./BuscarStack";
import { CuentaStack } from "./CuentaStack";


const Tab = createBottomTabNavigator();

export function AppNavigation() {
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) =>
          pantallaOpcionesIcono(route, color, size),
      })}
    >
      <Tab.Screen
        name={pantalla.buscar.tab}
        component={BuscarStack}
        options={{ title: "Buscar"}}
      />
      <Tab.Screen
        name={pantalla.empleo.tab}
        component={EmpleoStack}
        options={{ title: "Empleos" }}
      />
      <Tab.Screen
        name={pantalla.postulaciones.tab}
        component={PostulacionStack}
        options={{ title: "Postulaciones" }}
      />
      <Tab.Screen
        name={pantalla.cuenta.tab}
        component={CuentaStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

function pantallaOpcionesIcono(route, color, size) {
  let iconName;

  if (route.name === pantalla.empleo.tab) {
    iconName = "briefcase-outline";
  }
  if (route.name === pantalla.postulaciones.tab) {
    iconName = "application-edit";
  }
  if (route.name === pantalla.buscar.tab) {
    iconName = "magnify";
  }
  if (route.name === pantalla.cuenta.tab) {
    iconName = "account-circle-outline";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
