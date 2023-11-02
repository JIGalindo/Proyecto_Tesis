import { View } from "react-native";
import React, { useState } from "react";
import { styles } from "./ChangeEmailFrom.styles";
import { Input, Button } from "react-native-elements";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangeEmailForm.data";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import {
  updateEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
  getAuth,
} from "firebase/auth";

export function ChangeEmailForm(props) {
  const { onClose, onReload } = props;

  const [showPasword, setShowPasword] = useState(false);

  const onShowPassword = () => setShowPasword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const currentUser = getAuth().currentUser;

        const credentials = EmailAuthProvider.credential(
          currentUser.email,
          formValue.password
        );
        reauthenticateWithCredential(currentUser, credentials).then(async ()=>{
          await updateEmail(currentUser, formValue.email).then(()=>{
            Toast.show({
              type: "error",
              position: "top",
              text1: "email Actualizado",
            });
            onReload();
            onClose();
          })
        }).catch((error)=>{
          Toast.show({
            type: "error",
            position: "top",
            text1: "Contraseña Incorrecta",
          });
        });
        
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al cambiar email",
        });
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder="Nuevo Email"
        containerStyle={styles.input}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPasword ? false : true}
        rightIcon={{
          type: "material-community",
          name: showPasword ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: onShowPassword,
        }}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title="Cambiar Email"
        containerStyle={styles.btncontainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
