import { View } from "react-native";
import React from "react";
import { Text, Icon, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { pantalla } from "../../../Utilidades";
import { styles } from "./UserNotLogged.styles";

export function UserNotLogged() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(pantalla.cuenta.tab, {
      screen: pantalla.cuenta.logueo,
    });
  };

  return (
    <View style={styles.content}>
      <Icon type="material-community" name="alert-circle-outline" size={80} />
      <Text style={styles.info}>
        Necesitas estar logeado para ver esta seccion
      </Text>
      <Button
        title="Ir al login"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={goToLogin}
      />
    </View>
  );
}
