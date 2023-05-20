import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import { BuscarPantalla } from "../Pantallas/BuscarPantalla";
import { CuentaPantalla } from "../Pantallas/CuentaPantalla";
import { FavoritosPantalla } from "../Pantallas/FavoritosPantalla";
import {EmpleosPantalla} from "../Pantallas/EmpleosPantalla"
import { pantalla } from "../Utilidades";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) =>
          pantallaOpcionesIcono(route, color, size),
      })}
    >
      <Tab.Screen
        name={pantalla.empleo.tab}
        component={EmpleosPantalla}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name={pantalla.buscar.tab}
        component={BuscarPantalla}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name={pantalla.favoritos.tab}
        component={FavoritosPantalla}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={pantalla.cuenta.tab}
        component={CuentaPantalla}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

function pantallaOpcionesIcono(route, color, size) {
  let iconName;

  if (route.name === pantalla.empleo.tab) {
    iconName = "compass-outline";
  }
  if (route.name === pantalla.favoritos.tab) {
    iconName = "heart-outline";
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
