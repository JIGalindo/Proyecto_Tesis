import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
        options={{
          title: "Buscar",
          statusBarColor: "#00a680",
          headerTintColor: "#ffff",
          headerStyle: { backgroundColor: "#00a680" },
          navigationBarColor:"#00a680"
        }}
      />
    </Stack.Navigator>
  );
}
//activeColor="#f0edf6"
//
