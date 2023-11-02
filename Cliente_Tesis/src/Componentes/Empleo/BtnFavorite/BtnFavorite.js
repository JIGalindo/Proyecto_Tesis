import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "react-native-elements";
import { getAuth, getMultiFactorResolver } from "firebase/auth";
import {
  doc,
  setDoc,
  getDocs,
  query,
  where,
  collection,
  deleteDoc,
} from "firebase/firestore";
import uuid from "react-native-uuid";
import { styles } from "./BtnFavorite.styles";
import { db } from "../../../Utilidades";
import  {size,forEach} from "lodash"

export function BtnFavorite(props) {
  const { idEmpleo,idEmpleador } = props;
  const [isApply, setIsApply] = useState(undefined);
  const [isReload, setIsReload] = useState(false)
  const auth = getAuth();

  useEffect(() => {
    ( async () => {
      const response = await getApply();

      if (size(response)>0) {
        setIsApply(true);      
      } else {
        setIsApply(false)
      }
    })();
  }, [idEmpleo,isReload]);

  const onReload=()=> setIsReload((prevState=> !prevState))

  const getApply = async () => {
    const q = query(
      collection(db, "aplicaciones"),
      where("idEmpleo", "==", idEmpleo),
      where("idUser", "==", auth.currentUser.uid)
    );
    const result =await getDocs(q);
    return result.docs;
  };

  const Apply = async () => {
    try {
      const idApply = uuid.v4();
      const data = {
        id: idApply,
        idEmpleo,
        idUser: auth.currentUser.uid,
      };


      await setDoc(doc(db, "aplicaciones", idApply), data);

      onReload();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };


  const removeApply = async () =>{
    try {
      const response= await getApply()
      forEach(response, async (item) =>{
        await deleteDoc(doc(db,"aplicaciones", item.id))
      })

      onReload();
      
    } catch (error) {
      console.log(error)      
    }

  }
  return (
    <View style={styles.content}>

    {isApply !== undefined &&(
      <Icon
        type="material-community"
        name= {isApply ? "check-circle" :"check-circle-outline"}
        color={isApply ? "#00a680":"#000"}
        size={35}
        onPress={isApply ? removeApply : Apply}
      />

    )}
    </View>
  );
}
