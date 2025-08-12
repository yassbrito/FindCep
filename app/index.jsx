import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import {Input} from '../components/input/input';

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
    <View style={styles.container}>
    {/* titulo */}
    <Text style={styles.titulo}>Consulte seu CEP</Text>

    {/* input  */}
    <Input/>
    {/* botao */}
    {/*card de informacoes */}
    </View>

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
  flex: 1.5,
  alignItems: "center",
  paddingTop: 50,
  paddingBottom: 50,
  gap: 40
},
titulo: {
  fontSize: 25
}
})