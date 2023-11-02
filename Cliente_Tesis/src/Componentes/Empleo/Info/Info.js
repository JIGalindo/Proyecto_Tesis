import { View} from 'react-native'
import React from 'react'
import {styles} from "./Info.styles"
import {Text,Icon,ListItem} from "react-native-elements"
import {map} from "lodash";
import {Map} from "../../compartidos"

export function Info(props) {
    const {empleo}=props;

    const listInfo=[
        {
            text:empleo.address,
            iconType:"material-community",
            iconName:"map-marker",
        },
        {
          text:empleo.contacto,
          iconType:"material-community",
          iconName:"card-account-mail",
        }
    ]
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Informacion Sobre el Empleo</Text>
      <Map location={empleo.location} name={empleo.name}/>
      {map(listInfo, (item,index)=>(
        <ListItem key={index} bottomDivider>
            <Icon type={item.iconType} name={item.iconName} color="#00a680"/>
            <ListItem.Content>
                <ListItem.Title>{item.text}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
      ))}      
    </View>
  )
}