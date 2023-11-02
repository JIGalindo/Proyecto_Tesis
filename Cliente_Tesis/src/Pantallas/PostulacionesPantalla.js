import React, { useState, useEffect } from "react";
import {ScrollView, Text } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  onSnapshot,
  or,
} from "firebase/firestore";
import {size, map} from "lodash"
import {Loading} from "../Componentes/compartidos"
import {db} from '../Utilidades'
import { UserNotLogged,NotFoundEmpleos, EmpleoPostulaciones} from "../Componentes/Postulaciones";

export function PostulacionesPantalla() {
  const [hasLogged, setHasLogged] = useState(null);
  const [empleos, setEmpleos] = useState(null)
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  useEffect(() => {
    if (auth?.currentUser) {
      const q = query(
        collection(db,"aplicaciones"),
        where("idUser",'==', auth.currentUser.uid)
      );
  
      onSnapshot(q, async (snapshot)=>{
        let empleoArray=[]
        for await (const item of snapshot.docs){
          const data = item.data();
          const docRef= doc (db,"empleos", data.idEmpleo)
          const docSnap = await getDoc(docRef);
          const newData= docSnap.data();
          newData.idAplicaciones = data.idAplicaciones
  
          empleoArray.push(newData)
        }
  
        setEmpleos(empleoArray)
      })
      
    }
  }, [auth])
  


  if (!hasLogged) return <UserNotLogged />;

  if(!empleos) return <Loading show text="Cargando"/>;
  
  if (size(empleos) === 0) return <NotFoundEmpleos/>;


  return (
    <ScrollView>
      {map(empleos,(empleo)=>(
        <EmpleoPostulaciones key={empleo.id} empleo ={empleo}/>
      ))}
    </ScrollView>
  );
}
 