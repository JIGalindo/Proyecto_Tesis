import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CuentaPantalla } from "../Pantallas/CuentaPantalla";
import { pantalla } from "../Utilidades";

const Stack = createNativeStackNavigator();

export function CuentaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={pantalla.cuenta.cuenta}
        component={CuentaPantalla}
        options={{ title: "Cuenta" }}
      />
    </Stack.Navigator>
  );
}
