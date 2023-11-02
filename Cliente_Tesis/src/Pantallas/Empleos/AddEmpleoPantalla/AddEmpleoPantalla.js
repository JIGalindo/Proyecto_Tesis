import {ScrollView } from "react-native";
import React from "react";
import { styles } from "./AddEmpleoPantalla.styles";
import { InfoForm,UploadImageForm,ImageEmpleo } from "../../../Componentes/Empleos/AddEmpleos";
import { initialValues, validationSchema } from "./AddEmpleoPantalla.data";
import { useFormik,} from "formik";
import { Button } from "react-native-elements";
import uuid from "react-native-uuid";
import {getAuth} from "firebase/auth"
import {doc,setDoc} from "firebase/firestore"
import {db} from "../../../Utilidades"
import {useNavigation} from "@react-navigation/native"

export function AddEmpleoPantalla() {

  const navigation =useNavigation();
  
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue;
        newData.id =uuid.v4()
        newData.idEmpleador=  getAuth().currentUser.uid
        newData.createAt= new Date();
        newData.contacto= getAuth().currentUser.email
        
        //const myDB =doc(db,"empleos", newData.id)
        //await setDoc(myDB,newData)

        await setDoc(doc(db,"empleos", newData.id),newData)

        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <ScrollView  showsVerticalScrollIndicator={false} >
      <ImageEmpleo formik={formik}/>
      <InfoForm  formik={formik}/>
      <UploadImageForm formik={formik}/>
      <Button
        title="Crear Empleo"
        buttonStyle={styles.addEmpleo}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView >
  );
}
