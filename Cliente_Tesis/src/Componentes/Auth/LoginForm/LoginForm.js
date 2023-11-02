import { View} from "react-native";
import React, { useState } from "react";
import { Input, Icon, Button } from "react-native-elements";
import { styles } from "./LoginForm.style";
import { initialValues, validationSchema } from "./LoginForm.data";
import { useFormik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import {useNavigation} from "@react-navigation/native"
import { pantalla } from "../../../Utilidades";

export function LoginForm() {
  const [showPass, setshowPass] = useState(false);
  const verPassword = () => setshowPass((prevState) => !prevState);

  const navegacion = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        navegacion.navigate(pantalla.cuenta.cuenta)
      } catch (error) {
        Toast.show({
          type:'error',
          position:'top',
          text1:'usuario o contraseña incorrectos'
        })
      }
    }, 
  });
  return (

        <View style={styles.contenido}>
      <Input
        placeholder="correo electronico"
        containerStyle={styles.Input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="contraseña"
        containerStyle={styles.Input}
        secureTextEntry={showPass ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPass ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={verPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title="Iniciar Sesion"
        containerStyle={styles.btncontainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
