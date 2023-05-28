import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CuentaPantalla } from "../Pantallas/Cuenta/CuentaPantalla";
import { pantalla } from "../Utilidades";
import { LoginPantalla } from "../Pantallas/Cuenta/LogueoPantalla";
import { RegistroPantalla } from "../Pantallas/Cuenta/RegistroUsuario";

const Stack = createNativeStackNavigator();

export function CuentaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={pantalla.cuenta.cuenta}
        component={CuentaPantalla}
        options={{ title: "Cuenta" }}
      />
      <Stack.Screen
        name={pantalla.cuenta.logueo}
        component={LoginPantalla}
        options={{ title: "Iniciar Sesion" }}
      />
        <Stack.Screen
        name={pantalla.cuenta.registro}
        component={RegistroPantalla}
        options={{ title: "Crea tu cuenta" }}
      />
    </Stack.Navigator>
  );
}
