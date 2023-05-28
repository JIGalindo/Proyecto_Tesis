import { View, Text } from "react-native";
import React from "react";
import { styles } from "./InfoUser.style";
import { Avatar } from "react-native-elements";
import { fetchSignInMethodsForEmail, getAuth } from "firebase/auth";
import * as ImagePicker from "expo-image-picker"
import {getStorage,ref,uploadBytes} from "firebase/storage"

export function InfoUser() {
  const {uid,photoURL,displayName,email} = getAuth().currentUser
  
  const  changeAvatar =async ()=>{
    const  result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect:[4,3]
    });
    if(!result.canceled) uploadImage(result.uri)
  };

  const uploadImage = async (uri) =>{
    const response = await fetch(uri);
    const blob =await response.blob();
    
    const storage = getStorage();
    const storageRef= ref(storage,`avatar/${uid}`)
    uploadBytes(storageRef,blob).then((snapshot)=>{
      console.log(snapshot.metadata)
    })
  }

  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        icon={{ type: "material", name: "person" }}
        containerStyle={styles.avatar}
        source={{uri:photoURL}}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar}/>
      </Avatar>
      <View>
        <Text style={styles.displayName}>{displayName || "Anonimo"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}
