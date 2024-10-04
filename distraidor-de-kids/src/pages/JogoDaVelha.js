import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Rodape from '../Componentes/Rodape'
import { estilos } from '../Estilos';

const JogoDaVelha = () => {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null)); // Tabuleiro 3x3
  const [jogadorAtual, setJogadorAtual] = useState('X'); // Começa com o jogador 'X'
  const [vencedor, setVencedor] = useState(null); // Estado para o vencedor

  // Função que verifica se há um vencedor
  const verificarVencedor = (novoTabuleiro) => {
    const linhasVitoria = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
      [0, 4, 8], [2, 4, 6], // Diagonais
    ];

    for (let linha of linhasVitoria) {
      const [a, b, c] = linha;
      if (novoTabuleiro[a] && novoTabuleiro[a] === novoTabuleiro[b] && novoTabuleiro[a] === novoTabuleiro[c]) {
        return novoTabuleiro[a];
      }
    }

    return null;
  };

  // Função chamada ao clicar em uma célula
  const jogar = (index) => {
    if (tabuleiro[index] || vencedor) return; // Não deixa jogar em células preenchidas ou após vitória

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[index] = jogadorAtual;
    setTabuleiro(novoTabuleiro);

    const novoVencedor = verificarVencedor(novoTabuleiro);
    if (novoVencedor) {
      setVencedor(novoVencedor);
    } else {
      // Alterna o jogador
      setJogadorAtual(jogadorAtual === 'X' ? 'O' : 'X');
    }
  };

  // Função para reiniciar o jogo
  const reiniciarJogo = () => {
    setTabuleiro(Array(9).fill(null));
    setJogadorAtual('X');
    setVencedor(null);
  };

  // Renderiza uma célula
  const renderizarCelula = (index) => {
    return (
      <TouchableOpacity style={styles.celula} onPress={() => jogar(index)}>
        <Text style={styles.celulaTexto}>{tabuleiro[index]}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Jogo da Velha</Text>
      <View style={styles.tabuleiro}>
        {tabuleiro.map((_, index) => renderizarCelula(index))}
      </View>
      {vencedor ? (
        <Text style={styles.vencedorTexto}>Vencedor: {vencedor}</Text>
      ) : (
        <Text style={styles.jogadorTexto}>Jogador atual: {jogadorAtual}</Text>
      )}
      <Button title="Reiniciar Jogo" onPress={reiniciarJogo} />
      <Rodape/>
    </View>
  );
};

const styles = StyleSheet.create({
  tabuleiro: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  celula: {
    width: 100,
    height: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  celulaTexto: {
    fontSize: 36,
  },
  jogadorTexto: {
    fontSize: 20,
    marginVertical: 20,
  },
  vencedorTexto: {
    fontSize: 24,
    marginVertical: 20,
    fontWeight: 'bold',
  },
});

export default JogoDaVelha;