import React from 'react'
import {styles} from "./Map.styles"
import MapView,{Marker}from "react-native-maps"
import OpenMap from "react-native-open-maps"


export function Map(props) {
const {location,name}= props;

const openAppMap=()=>{
    OpenMap({
        latitude:location.latitude,
        longitude:location.longitude,
        zoom:19,
        query:name,
    })
}

  return (
    <MapView style={styles.content} initialRegion={location} onPress={openAppMap}>
        <Marker coordinate={location}/>
    </MapView>
  )
}