import { View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { SearchBar, ListItem, Avatar, Icon,Text } from "react-native-elements";
import {collection,query,startAt,endAt,limit,orderBy,getDocs, where} from "firebase/firestore"
import { getAuth} from "firebase/auth";
import {size,map} from "lodash"
import {useNavigation} from "@react-navigation/native"
import { Loading } from "../Componentes/compartidos";
import {db,pantalla} from "../Utilidades"

export function BuscarPantalla() {
  const [searchText, setSearchText] = useState("")
  const [searchResults, setSearchResults] = useState(null);
  const navigation = useNavigation();

  const goToEmpleo = (idEmpleo) => {
    navigation.navigate(pantalla.empleo.tab, {
        screen:pantalla.empleo.empleo,
        params: {
          id:idEmpleo ,
        }
      });
  };

  useEffect(() => {

    (async ()=>{
      const q= query(
        collection(db,"empleos"),
        orderBy("name"),
        startAt(searchText),
        endAt(`${searchText}\uf8ff`),
        limit(20)
      )

      const querySnapshot = await getDocs(q)
      setSearchResults(querySnapshot.docs)
    })()
  }, [searchText])
  
  return (
    <>
      <SearchBar
        placeholder="Buscar Empleo"
        value={searchText}
        onChangeText={(texto)=>setSearchText(texto)}
      />
      {!searchResults && <Loading show text="Cargando" />}

      <ScrollView>
      {size(searchResults) === 0 ?(
        <View style={{alignItems:"center", marginTop:20}}>
          <Text>No se han encontrado resultados</Text>
        </View>
      ):(
        map(searchResults, (item)=>{
          const data =item.data()

          return(
            <ListItem  key={data.id} bottomDivider onPress={()=>goToEmpleo(data.id)}>
              <Avatar source={{uri:data.images[0]}} rounded/>
              <ListItem.Content>
                <ListItem.Title>
                  {data.name}
                </ListItem.Title>
              </ListItem.Content>
              <Icon type="material-community" name="chevron-right"/>
            </ListItem>
          )
        })
      )}
      </ScrollView>
    </>
  );
}
