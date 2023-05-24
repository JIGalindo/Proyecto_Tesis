import { View, ScrollView } from "react-native";
import { Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { pantalla } from ".././../../Utilidades";
import { styles } from "./LogueoPantalla.Style";

export function LogueoPantalla() {
    const navegacion = useNavigation();

    const irRegistro = () => {
        navegacion.navigate(pantalla.cuenta.registro);
    };
    return (
        <ScrollView>
            <Image
                source={require("../../../../assets/img/logo.png")}
                style={styles.imagen}
            />
            <View style={styles.contenido}>
                <Text>Estamos en el Login</Text>
                <Text onPress={irRegistro}>Registrarce</Text>
            </View>
        </ScrollView>
    );
}
