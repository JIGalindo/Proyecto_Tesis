import { View, ScrollView } from "react-native";
import { Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { LoginForm } from "../../../Componentes/Auth";
import { pantalla } from "../../../Utilidades";
import { styles } from "./LogueoPantalla.Style";

export function LoginPantalla() {
    const navegacion = useNavigation();

    const irRegistro = () => {
        navegacion.navigate(pantalla.cuenta.registro);
    };
    return (
        <ScrollView>
            <View style={styles.todo}>
                <Image
                    source={require("../../../../assets/img/logo.png")}
                    style={styles.imagen}
                />
            </View>
            <View>
                <LoginForm />

                <Text style={styles.textRegistro}>
                    Aun no tienes cuenta?{" "}
                    <Text style={styles.btnregistro} onPress={irRegistro}>
                        Registrarce
                    </Text>
                </Text>
            </View>
        </ScrollView>
    );
}
