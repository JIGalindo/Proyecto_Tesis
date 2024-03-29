import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import React from "react";
import { PostulacionesPantalla } from "../Pantallas/PostulacionesPantalla";
import { pantalla } from "../Utilidades";

const Stack = createNativeStackNavigator();

export function PostulacionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={pantalla.postulaciones.postulaciones}
        component={PostulacionesPantalla}
        options={{ title: "Postulaciones",        statusBarColor:"#00a680",
        headerTintColor:"#ffff", 
        headerStyle:{backgroundColor:"#00a680"}, }}
      />
    </Stack.Navigator>
  );
}
