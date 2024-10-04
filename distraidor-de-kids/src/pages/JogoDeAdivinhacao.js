import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Rodape from '../Componentes/Rodape'
import { estilos } from '../Estilos';

const JogoDeAdivinhacao = () => {
  const [numeroSecreto, setNumeroSecreto] = useState(Math.floor(Math.random() * 100) + 1); // Número aleatório entre 1 e 100
  const [palpite, setPalpite] = useState('');
  const [tentativas, setTentativas] = useState(0);
  const [mensagem, setMensagem] = useState('');

  // Função para validar o palpite do jogador
  const verificarPalpite = () => {
    const numeroPalpite = parseInt(palpite);

    if (isNaN(numeroPalpite)) {
      setMensagem('Por favor, insira um número válido!');
      return;
    }

    setTentativas(tentativas + 1);

    if (numeroPalpite < numeroSecreto) {
      setMensagem('O número secreto é maior!');
    } else if (numeroPalpite > numeroSecreto) {
      setMensagem('O número secreto é menor!');
    } else {
      setMensagem(`Parabéns! Você acertou o número em ${tentativas + 1} tentativas!`);
    }

    setPalpite('');
  };

  // Função para reiniciar o jogo
  const reiniciarJogo = () => {
    setNumeroSecreto(Math.floor(Math.random() * 100) + 1);
    setTentativas(0);
    setMensagem('');
    setPalpite('');
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Jogo de Adivinhação</Text>
      <Text style={styles.subtitulo}>Tente adivinhar o número entre 1 e 100</Text>

      <TextInput
        style={estilos.input}
        keyboardType="numeric"
        value={palpite}
        onChangeText={setPalpite}
        placeholder="Digite seu palpite"
      />

      <Button title="Enviar Palpite" onPress={verificarPalpite} />

      {mensagem ? <Text style={estilos.mensagem}>{mensagem}</Text> : null}

      <Button title="Reiniciar Jogo" onPress={reiniciarJogo} />
      <Rodape/>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitulo: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default JogoDeAdivinhacao;