import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import{CargandoModal} from "../../../Componentes/compartidos"
import{ListEmpleos} from "../../../Componentes/Empleos"
import { Icon } from "react-native-elements";
import { pantalla, db } from "../../../Utilidades";
import { styles } from "./EmpleosPantalla.styles";

export function EmpleosPantalla(props) {
  const { navigation } = props;

  const [currentUser, setCurrentUser] = useState(null);

  const [empleos, setEmpleos] = useState(null)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, "empleos"),
      orderBy("createAt", "desc"),
      );

    onSnapshot(q, (snapshot) => {
      setEmpleos(snapshot.docs);
    });
  }, []);

  const irAgregarEmpleo = () => {
    //@para navegar dentro del mismo stack
    navigation.navigate(pantalla.empleo.addEmpleo);

    //@para navegar a otro stack
    //navigation.navigate(pantalla.cuenta.tab, {
    // screen: pantalla.cuenta.cuenta,
    // });
  };
  return (
    <View style={styles.content}>
    {!empleos ? (
      <CargandoModal show text="Cargando"/>
    ):<ListEmpleos empleos={empleos}/>
    }

      
      {currentUser && (
        <Icon
          reverse
          type="material-community"
          name="plus"
          color="#00a680"
          containerStyle={styles.btnContainer}
          onPress={irAgregarEmpleo}
        />
      )}
    </View>
  );
}
