
import {getAuth,onAuthStateChanged} from "firebase/auth"
import React ,{ useEffect, useState } from "react";
import {InicioUsuario} from "./InicioUsuario/InicioUsuarioPantalla"
import {UsuarioLogueado} from "./UsuarioLogueadoPantalla/UsuarioLogueado"
import {CargandoModal} from "../../Componentes"

export function CuentaPantalla() {
  const [Logueado,setLogueado] = useState(null)
  
  useEffect(()=>{
    const auth=getAuth()
    onAuthStateChanged(auth,(user)=>{
      setLogueado(user ? true : false);
    })
  },[])

  if (Logueado === null){
    return <CargandoModal show text="Cargando"/>;
  }
  return Logueado ? <UsuarioLogueado/> : <InicioUsuario/>

}
