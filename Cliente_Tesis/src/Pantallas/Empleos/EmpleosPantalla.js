import { View, Text } from 'react-native'
import React from 'react'
import {Button} from "@rneui/themed"
import{pantalla} from "../../Utilidades"

export function EmpleosPantalla(props) {
  const {navigation} = props;
  const irAgregarEmpleo = () => {
    //@para navegar dentro del mismo stack
    //navigation.navigate(pantalla.empleo.addEmpleo)

    //@para navegar a otro stack
    navigation.navigate(pantalla.cuenta.tab, {screen: pantalla.cuenta.cuenta})
  }
  return (
    <View>
      <Text>Empleos</Text>
      <Button title="Crear Empleo" onPress={irAgregarEmpleo}/>
    </View>
  )
}