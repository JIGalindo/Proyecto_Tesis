import { View} from 'react-native'
import React from 'react'
import {Text,Rating} from "react-native-elements"
import {styles} from "./Header.style"

export function Header(props) {
  const {empleo}= props;
  console.log(empleo)
  return (
    <View style={styles.content}>
      <View style={styles.titleView}>
        <Text style={styles.name}>{empleo.name}</Text>
      </View>
      <Text  style={styles.description}>{empleo.description}</Text>
    </View>
  )
}