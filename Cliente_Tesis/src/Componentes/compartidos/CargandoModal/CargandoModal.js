import { View, ActivityIndicator } from "react-native";
import React from "react";
import { Overlay, Text } from "react-native-elements";
import { styles } from "./CargandoModal.style";

export function CargandoModal(props) {
  const { show, text } = props;
  return (
    <Overlay
      isVisible={show}
      overlayStyle={styles.overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#00a680" />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}

CargandoModal.defaultProps = {
  show: false,
};
