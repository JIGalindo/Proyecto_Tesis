import { View } from "react-native";
import React,{useState} from "react";
import { styles } from "./InfoForm.styles";
import { MapForm } from "../MapForm";
import { Input } from "react-native-elements";

export function InfoForm(props) {
  const { formik } = props;

  const onOpenCloseMap = () =>setShowMap((prevState) => !prevState)

  const [showMap, setShowMap] = useState(false)

  return (
    <>
      <View style={styles.content}>
        <Input
          placeholder="Titulo del Empleo"
          onChangeText={(text) => formik.setFieldValue("name", text)}
          errorMessage={formik.errors.name}
        />
        <Input
          placeholder="Direccion"
          onChangeText={(text) => formik.setFieldValue("address", text)}
          errorMessage={formik.errors.address}
          rightIcon={{
            type: "material-community",
            name: "map-marker-radius",
            color:getColorIconMap(formik) ,
            onPress: onOpenCloseMap,
          }}
        />
        <Input
          placeholder="Descripcion del empleo"
          multiline={true}
          inputContainerStyle={styles.textArea}
          onChangeText={(text) => formik.setFieldValue("description", text)}
          errorMessage={formik.errors.description}
        />
      </View>
      <MapForm  show={showMap} close={onOpenCloseMap} formik={formik}/>
    </>
  );
}

const getColorIconMap =(formik)=>{
  if(formik.errors.location) return "#ff0000";

  if(formik.values.location) return "#00a680";

  return "#c2c2c2"
}