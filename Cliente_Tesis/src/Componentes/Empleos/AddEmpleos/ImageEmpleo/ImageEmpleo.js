import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native-elements";
import { styles } from "./ImageEmpleo.styles";

export function ImageEmpleo(props) {
  const { formik } = props;

  const primaryImage = formik.values.images[0];

  return (
    <View style={styles.content}>
      <Image
        source={
          primaryImage
            ? { uri: primaryImage }
            : require("../../../../../assets/img/image-not-found.png")
        }
        style={styles.image}
      />
    </View>
  );
}
