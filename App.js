import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RPG from './src/componetes/rpg/rpg';

export default function App() {

  const rpg = [
    {
      titulo: 'Guerreiro e cavaleiro',
      descricao: 'Alta resistencia; Combate corporal com espadas, lanças, machados, maças e escudos; Vestimentas e armaduras pesadas',
      imgUrl: "https://2.bp.blogspot.com/_wnuwcUW6qdE/TUeLDhwmTLI/AAAAAAAAAog/O98VFug5PYk/s1600/mounted_black_knight.jpg",
    },
    {
      titulo: 'Arqueiros, Caçador e ranger',
      descricao: 'Baixa resistencia; Alto dano; Combate a distancia com arco e varieadade de flecha, Vestimentas e armaduras medias',
      imgUrl: "https://pm1.narvii.com/6322/9d9703e64d2a997b5e87bf2f238f790d9764e9a1_hq.jpg"
    },
    {
      titulo: 'Mago, Bruxo e Elementista',
      descricao: 'Altissimo dano; Vestimentas e armaduras leves; Combate a distancia com magiass de variados elementos',
      imgUrl: "https://pm1.narvii.com/6522/3f90e83d68679f9772740e96e74db6cfe480abf5_hq.jpg"
    },

  ]

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Troca de cartas </Text>
      {rpg.map(r=> <RPG rpg={r}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9f9ad0',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,

  },
  header:{
    fontSize: 20,
    fontFamily: 'cursive',
  
  
  }
});
