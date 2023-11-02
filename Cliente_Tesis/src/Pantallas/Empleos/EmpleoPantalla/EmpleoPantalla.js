import { ScrollView, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./EmpleoPantalla.styles";
import {Carrusel,Loading} from "../../../Componentes/compartidos"
import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../../../Utilidades";
import {Header,Info,BtnFavorite} from "../../../Componentes"

const {width}= Dimensions.get("screen")

export function EmpleoPantalla(props) {
  const { route } = props;
  const [empleo, setEmpleo] = useState(null);

  useEffect(() => {
    setEmpleo(null);
    onSnapshot(doc(db, "empleos", route.params.id), (doc) => {
      setEmpleo(doc.data());
    });
  }, [route.params.id]);

  if (!empleo) return <Loading show text="cargando Empleo"/>;
  

  return (
    <ScrollView style={styles.content}>
      <Carrusel arrayImages={empleo.images} width={width} height={250}/>

      <Header empleo={empleo}/>

      <Info empleo={empleo}/>
      <BtnFavorite idEmpleo={route.params.id}/>
    </ScrollView>
  );
}
