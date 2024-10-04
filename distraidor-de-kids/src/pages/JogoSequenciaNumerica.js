import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Rodape from '../Componentes/Rodape'
import { estilos } from '../Estilos';

const JogoSequenciaNumerica = () => {
  const [sequencia, setSequencia] = useState([]);
  const [tentativa, setTentativa] = useState('');
  const [nivel, setNivel] = useState(1);
  const [inputAtivo, setInputAtivo] = useState(false);
  const [mensagem, setMensagem] = useState('');

  // Função para gerar a sequência numérica aleatória
  const gerarSequencia = (nivel) => {
    const novaSequencia = [];
    for (let i = 0; i < nivel; i++) {
      novaSequencia.push(Math.floor(Math.random() * 10)); // Gera números de 0 a 9
    }
    setSequencia(novaSequencia);
    setInputAtivo(false);
    setMensagem('Memorize a sequência!');
    
    // Exibe a sequência por 3 segundos e depois esconde
    setTimeout(() => {
      setMensagem('Agora tente repetir!');
      setInputAtivo(true);
    }, 3000);
  };

  // Função para verificar se a tentativa está correta
  const verificarTentativa = () => {
    if (tentativa.split('').map(Number).join('') === sequencia.join('')) {
      setMensagem('Você acertou!');
      setNivel(nivel + 1);
      setTentativa('');
      gerarSequencia(nivel + 1);
    } else {
      setMensagem('Você errou! Reiniciando o jogo...');
      setNivel(1);
      setTentativa('');
      gerarSequencia(1);
    }
  };

  // Inicia o jogo ao carregar
  useEffect(() => {
    gerarSequencia(nivel);
  }, []);

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Jogo da Sequência Numérica</Text>
      <Text style={styles.nivel}>Nível: {nivel}</Text>

      {inputAtivo ? (
        <>
          <TextInput
            style={estilos.input}
            keyboardType="numeric"
            value={tentativa}
            onChangeText={setTentativa}
            placeholder="Digite a sequência"
          />
          <Button title="Enviar" onPress={verificarTentativa} />
        </>
      ) : (
        <Text style={styles.sequencia}>
          {sequencia.join(' ')}
        </Text>
      )}

      {mensagem ? <Text style={estilos.mensagem}>{mensagem}</Text> : null}
      <Rodape/>
    </View>
  );
};

const styles = StyleSheet.create({
  nivel: {
    fontSize: 20,
    marginBottom: 20,
  },
  sequencia: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default JogoSequenciaNumerica;