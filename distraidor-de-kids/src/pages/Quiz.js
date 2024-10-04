import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Rodape from '../Componentes/Rodape'
import { estilos } from '../Estilos';

// Definir as perguntas do quiz
const perguntas = [
  {
    pergunta: 'Qual é a capital da Austrália?',
    opcoes: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    respostaCorreta: 'Canberra',
  },
  {
    pergunta: 'Qual é o maior planeta do sistema solar?',
    opcoes: ['Terra', 'Júpiter', 'Marte', 'Saturno'],
    respostaCorreta: 'Júpiter',
  },
  {
    pergunta: 'Quem escreveu "Dom Quixote"?',
    opcoes: ['William Shakespeare', 'Miguel de Cervantes', 'Dante Alighieri', 'Jorge Luis Borges'],
    respostaCorreta: 'Miguel de Cervantes',
  },
  {
    pergunta: 'Qual é a substância mais abundante na Terra?',
    opcoes: ['Oxigênio', 'Hidrogênio', 'Água', 'Nitrogênio'],
    respostaCorreta: 'Água',
  },
];

const Quiz = () => {
  const [indicePergunta, setIndicePergunta] = useState(0); // Pergunta atual
  const [pontuacao, setPontuacao] = useState(0); // Contador de acertos
  const [respondeu, setRespondeu] = useState(false); // Se já respondeu a pergunta

  const perguntaAtual = perguntas[indicePergunta];

  // Função para verificar a resposta e avançar para a próxima pergunta
  const responder = (resposta) => {
    if (respondeu) return; // Evita que o usuário responda mais de uma vez

    if (resposta === perguntaAtual.respostaCorreta) {
      setPontuacao(pontuacao + 1);
      Alert.alert('Correto!', 'Você acertou a resposta.');
    } else {
      Alert.alert('Errado!', `A resposta correta era ${perguntaAtual.respostaCorreta}.`);
    }
    setRespondeu(true);
  };

  // Avançar para a próxima pergunta ou finalizar o quiz
  const proximaPergunta = () => {
    const proxima = indicePergunta + 1;
    if (proxima < perguntas.length) {
      setIndicePergunta(proxima);
      setRespondeu(false);
    } else {
      Alert.alert('Fim do Quiz', `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`);
      reiniciarQuiz();
    }
  };

  // Reiniciar o quiz
  const reiniciarQuiz = () => {
    setIndicePergunta(0);
    setPontuacao(0);
    setRespondeu(false);
  };

  return (
    <View style={estilos.container}>
      <Text style={styles.pergunta}>{perguntaAtual.pergunta}</Text>
      {perguntaAtual.opcoes.map((opcao, index) => (
        <TouchableOpacity
          key={index}
          style={styles.opcao}
          onPress={() => responder(opcao)}
        >
          <Text style={styles.opcaoTexto}>{opcao}</Text>
        </TouchableOpacity>
      ))}
      {respondeu && (
        <TouchableOpacity style={styles.botaoProxima} onPress={proximaPergunta}>
          <Text style={styles.botaoTexto}>Próxima Pergunta</Text>
        </TouchableOpacity>
      )}
      <Rodape/>
    </View>
  );
};

const styles = StyleSheet.create({
  pergunta: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  opcao: {
    backgroundColor: '#3498db',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  opcaoTexto: {
    fontSize: 18,
    color: '#fff',
  },
  botaoProxima: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2ecc71',
    borderRadius: 5,
  },
  botaoTexto: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Quiz;
