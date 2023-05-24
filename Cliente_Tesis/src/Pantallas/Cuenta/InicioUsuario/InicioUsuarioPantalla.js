import { ScrollView } from "react-native";
import React from "react";
import { Text, Button, Image } from "react-native-elements";
import { styles } from "./InicioUsuarioPantalla.styles";
import {useNavigation} from "@react-navigation/native"
import {pantalla} from "../../../Utilidades"

export function InicioUsuario() {
    const navegacion =useNavigation();
    const irLoguin = () => {
        navegacion.navigate(pantalla.cuenta.logueo)
    };

    return (
        <ScrollView centerContent={true} style={styles.content}>
            <Image
                source={require("../../../../assets/img/user-guest.png")}
                style={styles.image}
            />
            <Text style={styles.title}>Consultar tu perfil</Text>
            <Text style={styles.description}>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora
            </Text>
            <Button buttonStyle={styles.btnStyle} title="ver tu perfil" onPress={irLoguin} />
        </ScrollView>
    );
}
