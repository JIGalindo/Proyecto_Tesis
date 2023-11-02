import { View } from "react-native";
import React from "react";
import { Input, Button } from "react-native-elements";
import {useFormik} from "formik"
import {getAuth,updateProfile} from "firebase/auth";
import toast from "react-native-toast-message"
import {initialValues,validationSchema} from "./ChangeDisplayNameForm.data"
import { styles } from "./ChangeDisplayNameForm.styles";

export function ChangeDisplayNameForm(props) {
    const {onClose,onReload}=props;

    const formik = useFormik({
        initialValues:initialValues(),
        validationSchema:validationSchema(),
        validateOnChange:false,
        onSubmit:async (formValue)=>{
            try {
                const {displayName}= formValue;
                const currentUser=getAuth().currentUser
                await updateProfile(currentUser,{displayName});
                
                onReload();
                onClose();
            } catch (error) {
                toast.show({
                    type:"error",
                    position:"bottom",
                    text1:"Error al cambiar nombre y apellido"
                })
            }
        }
    })
  return (
    <View style={styles.content}>
      <Input
        placeholder="Nombre y Apellido"
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
        onChangeText={(text)=> formik.setFieldValue("displayName",text)}
        errorMessage={formik.errors.displayName}
      />
      <Button
        title="Cambiar Nombre y Apellido"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
