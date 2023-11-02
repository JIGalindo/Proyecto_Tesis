import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Image, Icon, Text } from "react-native-elements";
import {doc,deleteDoc} from "firebase/firestore"
import { styles } from "./EmpleoPostulaciones.styles";
import { useNavigation } from "@react-navigation/native";
import { db,pantalla } from "../../../Utilidades";

export function EmpleoPostulaciones(props) {
  const { empleo } = props;
  const navigation = useNavigation();

  const goToEmpleo = () => {
    navigation.navigate(pantalla.empleo.tab, {
        screen:pantalla.empleo.empleo,
        params: {
          id: empleo.id,
        }
      });
  };


  const removeApply= async ()=>{
    try {
        await deleteDoc(doc(db,"aplicaciones", empleo.idAplicaciones))
        
    } catch (error) {
        console.log(error)
        
    }
  }
  return (
    <TouchableOpacity onPress={goToEmpleo}>
      <View style={styles.content}>
        <Image source={{ uri: empleo.images[0] }} style={styles.image} />
        <View style={styles.infoContent}>
          <Text style={styles.name}>{empleo.name}</Text>
          <Icon
            type="material-community"
            name="check-circle"
            color="#00a680"
            size={35}
            containerStyle={styles.iconContainer}
            onPress={removeApply}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
