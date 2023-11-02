import { Alert, ScrollView } from "react-native";
import { Icon, Avatar, Text } from "react-native-elements";
import React, { useState } from "react";
import { styles } from "./UploadImageForm.styles";
import * as ImagePicker from "expo-image-picker";
import { CargandoModal } from "../../../compartidos";
import { map, filter } from "lodash";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import uuid from "react-native-uuid";

export function UploadImageForm(props) {
  const { formik } = props;
  const [isLoading, setIsLoading] = useState(false);

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      uploadImage(result.assets[0].uri);
      setIsLoading(true)
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();
    const storageRef = ref(storage, `Empleos/${uuid.v4()}`);

    uploadBytes(storageRef, blob).then((snapshot) => {
      updatePhotoEmpleo(snapshot.metadata.fullPath);
    });
  };

  const updatePhotoEmpleo = async (imagePath) => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);

    const imageUrl = await getDownloadURL(imageRef);
    formik.setFieldValue("images", [...formik.values.images, imageUrl]);

    setIsLoading(false);
  };

  const removeImage = (img) => {
    Alert.alert("Eliminar Imagen", "estas seguro de eliminar esta imagen", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Eliminar",
        onPress: () => {
          const result= filter (formik.values.images,(image)=> image !==img)
          formik.setFieldValue("images",result)
        },
      },
    ],{
        cancelable:false
    });
  };

  return (
    <>
      <ScrollView
        style={styles.ViewImage}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Icon
          type="material-community"
          name="camera"
          color="#a7a7a7"
          containerStyle={styles.containerIcon}
          onPress={openGallery}
        />

        {map(formik.values.images, (image) => (
          <Avatar
            key={image}
            source={{ uri: image }}
            containerStyle={styles.imageStyle}
            onPress={() => removeImage(image)}
          />
        ))}
      </ScrollView>
      <Text style={styles.error}>{formik.errors.images}</Text>
      <CargandoModal show={isLoading} text="Subiendo imagen" />
    </>
  );
}
