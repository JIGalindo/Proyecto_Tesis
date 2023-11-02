import { View } from "react-native";
import React, { useState } from "react";
import { styles } from "./ChangePasswordFrom.styles";
import { initialValues, validationSchema } from "./ChangePasswordForm.data";
import { useFormik } from "formik";
import { Input, Button } from "react-native-elements";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import {
  getAuth,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";

export function ChangePasswordForm(props) {
  const { onClose } = props;

  const [showPassword, setshowPassword] = useState(false);
  const [showPassword1, setshowPassword1] = useState(false);
  const [showPassword2, setshowPassword2] = useState(false);

  const onShowPassword = () => setshowPassword((prevState) => !prevState);
  const onShowPassword1 = () => setshowPassword1((prevState1) => !prevState1);
  const onShowPassword2 = () => setshowPassword2((prevState2) => !prevState2);

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
        )
        reauthenticateWithCredential(currentUser,credentials).then(async ()=>{
          await updatePassword (currentUser,formValue.newPassword).then(()=>{
            Toast.show({
              type: "error",
              position: "top",
              text1: "Contraseña Actualizada",
            });
            onClose();
          })
        }).catch((error)=>{
          Toast.show({
            type: "error",
            position: "top",
            text1: "Contraseña Anterior Incorrecta",
          });
        });
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al cambiar password",
        });
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder="Contraseña Actual"
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={{
          type: "material-community",
          name: showPassword ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: onShowPassword,
        }}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Nueva contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword1 ? false : true}
        rightIcon={{
          type: "material-community",
          name: showPassword1 ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: onShowPassword1,
        }}
        onChangeText={(text) => formik.setFieldValue("newPassword", text)}
        errorMessage={formik.errors.newPassword}
      />
      <Input
        placeholder="Confirmar Contraseña"
        containerStyle={styles.input}
        secureTextEntry={showPassword2 ? false : true}
        rightIcon={{
          type: "material-community",
          name: showPassword2 ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: onShowPassword2,
        }}
        onChangeText={(text) =>
          formik.setFieldValue("confirmNewPassword", text)
        }
        errorMessage={formik.errors.confirmNewPassword}
      />
      <Button
        title="Cambiar Contraseña"
        containerStyle={styles.btncontainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
