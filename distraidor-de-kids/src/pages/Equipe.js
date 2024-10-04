import React, { Component, useState } from 'react';
import { View, Text, TextInput, Button, Image} from 'react-native';
import Imagem from '../Componentes/Imagem'
import Imagem2 from '../Componentes/Imagem2'
import Rodape from '../Componentes/Rodape'
import Heitor from '../Componentes/Link'
import Nyckolas from '../Componentes/Link2'
import {estilos} from '../Estilos'
let texto = "Equipe do Projeto";

function Equipe(){

  return(
    <View style={estilos.container}>
    <Text style={estilos.Texto}> {texto} </Text>
    <Imagem largura={150} altura={150} legenda='Eu gosto de Pizza'/>
    <Nyckolas/>
    <br/>
    <br/>
    <Imagem2 largura={150} altura={150} legenda='Sempre na espreita'/>
    <Heitor/>
    <Rodape/>
    </View>
  );
}

export default Equipe;