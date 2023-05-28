import { View } from "react-native";
import { Button } from "react-native-elements";
import React from "react";
import {getAuth,signOut} from "firebase/auth"
import { InfoUser } from "../../../Componentes/Account/InfoUser";
import { styles } from "./UsuarioLogueado.style";

export function UsuarioLogueado() {
    const logout =async ()=>{
        const auth =getAuth();
        await signOut(auth)
    }
    return (
        <View>
            <InfoUser />
            <Button
                title="Cerrar Sesion"
                buttonStyle={styles.buttonStyle}
                titleStyle={styles.btntext}
                onPress={logout}
            />
        </View>
    );
}
