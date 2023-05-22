import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import React from "react";
import { BuscarPantalla } from "../Pantallas/BuscarPantalla";
import { pantalla } from "../Utilidades";

const Stack = createNativeStackNavigator();

export function BuscarStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={pantalla.buscar.buscar}
        component={BuscarPantalla}
        options={{ title: "Buscar" }}
      />
    </Stack.Navigator>
  );
}
