import { Text, View, StyleSheet, ImageBackground, Image, ScrollView } from "react-native";
import {Input} from '../components/input/input';
import { Botao } from '../components/botao/botao';
import { Card } from '../components/card/card';

export default function Index() {
  return (
    <>
    {/* logo + imagem de fundo */}
    <ImageBackground source={require('../assets/images/image 2.png')} 
    style={styles.imgFundo}>
      <Image source={require('../assets/images/LogoFindCEP.png')} 
      style={styles.logo}></Image>

    </ImageBackground>

    {/* campo de consulta */}
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>

    {/* titulo */}
    <Text style={styles.titulo}>Consulte seu CEP</Text>

    {/* input  */}
    <Input/>

    {/* botao */}
    <Botao tituloBotao='Consultar'/>

    {/*card de informacoes */}
    <Card/>
    </View>
    </ScrollView>

    </>
  );
}

//estilos dos meus componentes
const styles = StyleSheet.create({
imgFundo: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%'
},
logo: {
  width: 100,
  height: 120
},
container: {
  gap: 40,
  width: "100%",
  minHeight: "100%",
  alignItems: "center",
  paddingBottom: 70
},
containerScroll: {
  flex: 1.5,
  paddingTop: 50,
  height: '100%',
  paddingBottom: 50,
},
titulo: {
  fontSize: 25
}
})