import { View} from 'react-native'
import React from 'react'
import {Text,Icon} from "react-native-elements"
import {styles} from "./NotFoundEmpleos.styles"
export function NotFoundEmpleos() {
  return (
    <View style={styles.content}>
      <Icon type='material-community' name='alert-circle-outline' size={80}/>
      <Text style={styles.text}>No has aplicado a ningun empleo</Text>
    </View>
  )
}