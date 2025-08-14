import { Text, View, StyleSheet, ImageBackground, Image, ScrollView } from "react-native";
import {Input} from '../components/input/input';
import { Botao } from '../components/botao/botao';
import { Card } from '../components/card/card';
import { useState } from "react";
import axios from "axios"

export default function Index() {

  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});

  async function consultarCep(){
    try {
      if(cep !== "" && cep.length === 8){
        const resposta =  await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

        setJsonCep(resposta.data);
        //console.log(jsonCep);
      }else{
        alert("O cep esta incorreto. Digite com 8 numeros!")
      }
    } catch (error) {
      console.log(error);
      
    }
  }



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
    <Input
    valorCep={cep}
    onChangeValorCep={e => {setCep(e); console.log(e);}}
    />

    {/* botao */}
    <Botao tituloBotao='Consultar' onPress={consultarCep}/>

    {/*card de informacoes */}
    {jsonCep.cep &&
    <Card
    cep = {jsonCep.cep}
    logradouro={jsonCep.logradouro}
    bairro={jsonCep.bairro}
    uf={jsonCep.uf}
    estado={jsonCep.estado}
    regiao={jsonCep.regiao}
    />
    }
    
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
  fontSize: 25,
  fontFamily: "Poppins-Bold",
  color: '#000000'
}
})