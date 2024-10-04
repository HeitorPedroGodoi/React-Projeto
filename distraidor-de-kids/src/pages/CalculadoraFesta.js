import React, { Component, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Botao from '../Componentes/Botao';
import { estilos } from '../Estilos';
import Rodape from '../Componentes/Rodape'
import Imagem3 from '../Componentes/Imagem3'
let texto = 'Calculadora de Utensilios para festa';

function Festa() {
  const [numero, setNumero] = useState(0);
  const [prata, setPrata] = useState(0);
  const [copo, setCopo] = useState(0);
  const [guarda, setGuarda] = useState(0);

  function entrar() {
    setPrata(numero * 1, 3);
    setCopo(numero * 4);
    setGuarda(numero * 5);
  }
  function resetar() {
    setPrata(0);
    setCopo(0);
    setGuarda(0);
  }

  return (
    <View style={estilos.area}>
      <Text style={{ fontSize: 28, textAlign: 'center' }}> {texto} </Text>
      <Imagem3 largura={150} altura={150}/>
      <TextInput
        style={estilos.input}
        placeholder="Número de Convidados"
        onChangeText={setNumero}
      />

      <Text>Pratos e Utensilios: {prata}</Text>
      <Text>Copos: {copo}</Text>
      <Text>Guardanapos: {guarda}</Text>

      <Text> *Lembre-se que isso é uma aproximação do que você vai usar</Text>
      <Botao titulo="Calcular" cor="steelblue" acao={entrar} />
      <Botao titulo="Resetar" cor="red" acao={resetar} />
      <Rodape/>
    </View>
  );
}

export default Festa;