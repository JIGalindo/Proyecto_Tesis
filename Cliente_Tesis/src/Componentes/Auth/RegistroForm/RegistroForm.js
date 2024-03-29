import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Input, Icon, Button } from "react-native-elements";
import { styles } from "./RegistroForm.style";
import { useFormik } from "formik";
import {useNavigation} from "@react-navigation/native"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {pantalla}from "../../../Utilidades"
import { initialValues, validationSchema } from "./RegistroForm.data";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export function RegistroForm() {
  const [showPass, setshowPass] = useState(false);
  const [showPass2, setshowPass2] = useState(false);
  const verPassword = () => setshowPass((prevState) => !prevState);
  const verPassword2 = () => setshowPass2((prevState) => !prevState);
  const navegacion = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
          navegacion.navigate(pantalla.cuenta.cuenta);
      } catch (error) {
        Toast.show({
          type:"error",
          position:"top",
          text1:"Error al registrarce"
        })
      }
    },
  });
  return (
    <View style={styles.contenido}>
      <Input
        placeholder="E-Mail"
        containerStyle={styles.input}
        rightIcon=<Icon
          type="material-community"
          name="at"
          iconStyle={styles.icon}
        />
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="PassWord"
        containerStyle={styles.input}
        secureTextEntry={showPass ? false : true}
        rightIcon=<Icon
          type="material-community"
          name={showPass ? "eye-off-outline" : "eye-outline"}
          iconStyle={styles.icon}
          onPress={verPassword}
        />
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Confirm PassWord"
        containerStyle={styles.input}
        secureTextEntry={showPass2 ? false : true}
        rightIcon=<Icon
          type="material-community"
          name={showPass2 ? "eye-off-outline" : "eye-outline"}
          iconStyle={styles.icon}
          onPress={verPassword2}
        />
        onChangeText={(text) => formik.setFieldValue("confirmpassword", text)}
        errorMessage={formik.errors.confirmpassword}
      />
      <Button
        title="Unirse"
        containerStyle={styles.btncontenedor}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
