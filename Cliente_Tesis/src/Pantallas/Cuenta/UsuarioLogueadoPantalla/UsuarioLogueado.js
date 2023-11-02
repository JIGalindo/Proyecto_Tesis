import { View } from "react-native";
import { Button } from "react-native-elements";
import React, { useState } from "react";
import {getAuth,signOut} from "firebase/auth"
import {CargandoModal} from "../../../Componentes"
import { InfoUser} from "../../../Componentes/Account";
import { styles } from "./UsuarioLogueado.style";
import{AccountOptions} from "../../../Componentes/Account/AccountOptions"

export function UsuarioLogueado() {
    const [loading, setLoading] = useState(false);
    const [loadingText, setLoadingText] = useState("")

    const [_, setReload] = useState(false)

    const onReload =()=> setReload((prevState) => !prevState)


    const logout =async ()=>{
        const auth =getAuth();
        await signOut(auth)
    }
    return (
        <View>
            <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />
            <AccountOptions onReload={onReload}/>
            <Button
                title="Cerrar Sesion"
                buttonStyle={styles.buttonStyle}
                titleStyle={styles.btntext}
                onPress={logout}
            />
            <CargandoModal show={loading} text={loadingText}/>
        </View>
    );
}
