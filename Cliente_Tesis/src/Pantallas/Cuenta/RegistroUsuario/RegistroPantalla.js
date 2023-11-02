import { View } from "react-native";
import React from "react";
import { Image } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RegistroForm } from "../../../Componentes/Auth/";
import { styles } from "./RegistroPantalla.style";

export function RegistroPantalla() {
    return (
        <KeyboardAwareScrollView>
            <View style={styles.todo}>
                <Image
                    source={require("../../../../assets/img/logo.png")}
                    style={styles.imagen}
                />
            </View>
            <View style={styles.contenido}>
                <RegistroForm />
            </View>
        </KeyboardAwareScrollView>
    );
}
