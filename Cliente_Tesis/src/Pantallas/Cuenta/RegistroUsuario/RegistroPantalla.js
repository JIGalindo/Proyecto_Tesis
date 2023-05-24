import { View,} from 'react-native'
import React from 'react'
import {Image}from "react-native-elements"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {RegistroForm} from "../../../Componentes/Auth/"
import {styles} from "./RegistroPantalla.style"

export function RegistroPantalla() {
  return (
    <KeyboardAwareScrollView>
      <Image source={require("../../../../assets/img/logo.png")} style={styles.imagen}/>
      <View style={styles.contenido}>
        <RegistroForm/>
      </View>
    </KeyboardAwareScrollView>
  )
}