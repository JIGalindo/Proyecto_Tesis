import { View,FlatList, TouchableOpacity } from 'react-native'
import {Text,Image} from "react-native-elements"
import React from 'react'
import {useNavigation} from "@react-navigation/native"
import {pantalla} from "../../../Utilidades"
import {styles} from "./ListEmpleos.styles"

export function ListEmpleos(props) {
    const {empleos}=props;
    const navigation = useNavigation();

    const goToEmpleo=(empleo)=>{
        navigation.navigate(pantalla.empleo.empleo,{id : empleo.id})
    }

  return (
    <View>
      <FlatList
        data={empleos}
        renderItem={(doc)=>{
            const empleo =doc.item.data();
            return(
                <TouchableOpacity onPress={()=>goToEmpleo(empleo)}>
                    <View style={styles.empleo}>
                        <Image source={{uri:empleo.images[0]}} style={styles.image}/>
                        <View>
                            <Text style={styles.name}>{empleo.name}</Text>
                            <Text style={styles.info}>{empleo.address}</Text>
                            <Text style={styles.info}>{empleo.description}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }}
      />
    </View>
  )
}