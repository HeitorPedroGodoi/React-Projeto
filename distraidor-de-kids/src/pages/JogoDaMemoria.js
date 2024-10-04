import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Rodape from '../Componentes/Rodape'
import { estilos } from '../Estilos';

// Gera um array de pares de números
const gerarCartas = () => {
  const cartas = [];
  for (let i = 1; i <= 6; i++) {
    cartas.push(i, i); // Adiciona pares de números
  }
  return cartas.sort(() => Math.random() - 0.5); // Embaralha as cartas
};

const JogoDaMemoria = () => {
  const [cartas, setCartas] = useState(gerarCartas());
  const [cartasViradas, setCartasViradas] = useState([]);
  const [paresEncontrados, setParesEncontrados] = useState([]);
  const [tentativas, setTentativas] = useState(0);

  // Função para manipular o clique nas cartas
  const virarCarta = (index) => {
    if (cartasViradas.length === 2 || cartasViradas.includes(index) || paresEncontrados.includes(index)) {
      return; // Evita virar mais de duas cartas ou virar cartas já encontradas
    }
    setCartasViradas([...cartasViradas, index]);

    if (cartasViradas.length === 1) {
      const primeiroIndex = cartasViradas[0];
      const segundoIndex = index;

      if (cartas[primeiroIndex] === cartas[segundoIndex]) {
        // Par encontrado
        setParesEncontrados([...paresEncontrados, primeiroIndex, segundoIndex]);
        setCartasViradas([]);
      } else {
        // Se as cartas forem diferentes, espera 1 segundo antes de escondê-las novamente
        setTimeout(() => {
          setCartasViradas([]);
        }, 1000);
      }
      setTentativas(tentativas + 1);
    }
  };

  // Verifica se o jogador encontrou todos os pares
  useEffect(() => {
    if (paresEncontrados.length === cartas.length) {
      Alert.alert('Parabéns!', `Você encontrou todos os pares em ${tentativas} tentativas!`);
      resetarJogo();
    }
  }, [paresEncontrados]);

  // Função para reiniciar o jogo
  const resetarJogo = () => {
    setCartas(gerarCartas());
    setCartasViradas([]);
    setParesEncontrados([]);
    setTentativas(0);
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Jogo da Memória</Text>
      <View style={styles.grid}>
        {cartas.map((carta, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.carta, 
              cartasViradas.includes(index) || paresEncontrados.includes(index) ? styles.cartaVirada : styles.cartaOculta
            ]}
            onPress={() => virarCarta(index)}
          >
            <Text style={styles.cartaTexto}>
              {cartasViradas.includes(index) || paresEncontrados.includes(index) ? carta : '?'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.tentativas}>Tentativas: {tentativas}</Text>
      <Button title="Reiniciar Jogo" onPress={resetarJogo} />
      <Rodape/>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '80%',
  },
  carta: {
    width: 70,
    height: 70,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
  cartaVirada: {
    backgroundColor: '#4caf50',
  },
  cartaOculta: {
    backgroundColor: '#ccc',
  },
  cartaTexto: {
    fontSize: 24,
    color: '#fff',
  },
  tentativas: {
    fontSize: 18,
    marginVertical: 20,
  },
});

export default JogoDaMemoria;