import { View } from "react-native";
import { Button } from "react-native-elements";
import React, { useEffect, useState } from "react";
import { Modal } from "../../../compartidos";
import * as Location from "expo-location";
import Toast from "react-native-toast-message";
import MapView from "react-native-maps";
import { styles } from "./MapForm.styles";

export function MapForm(props) {
  const { show, close,formik } = props;

  const [location, setLocation] = useState({
    latitude: 0.001,
    longitude: 0.001,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Toast.show({
          type: "info",
          position: "bottom",
          text1: "tienes que ir a activar los permisos de localizacion",
        });
        return;
      }
      const locationTemp = await Location.getCurrentPositionAsync({});

      setLocation({
        latitude: locationTemp.coords.latitude,
        longitude: locationTemp.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
    })();
  }, []);


  const saveLocation= ()=>{
    formik.setFieldValue("location", location)
    console.log(location)
    close();
  }

  return (
    <Modal show={show} close={close}>
      <MapView
        initialRegion={location}
        showsUserLocation={true}
        style={styles.mapStyle}
        onRegionChange={(locationTemp) => setLocation(locationTemp)}
      >
      </MapView>
      <View style={styles.mapActions}>
        <Button
          title="Guardar"
          containerStyle={styles.btnMapContainerSave}
          buttonStyle={styles.btnMapSave}
          onPress={saveLocation}
        />
        <Button
          title="Cerrar"
          containerStyle={styles.btnMapContainerCancel}
          buttonStyle={styles.btnMapCancel}
          onPress={close}
        />
      </View>
    </Modal>
  );
}
//            <MapView.Marker draggable coordinate={location}/>
