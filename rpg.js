import { Button, Image, Text, View } from "react-native";

import styles from './style';

export default function RPG(props){
    return(
        
        <View style={styles.container}>
            <View style={styles.viewimg}>
                <Image style={styles.img} source ={{uri: props.rpg.imgUrl}}/>
            </View>
            <View style={styles.viewdata}>
                <Text style={styles.titulo}> {props.rpg.titulo} </Text>                
                <Text style={styles.descricao}> {props.rpg.descricao} </Text>                
                <Button style={styles.btn} title=" Trocar "/>             

            </View>
        </View>
    );
}