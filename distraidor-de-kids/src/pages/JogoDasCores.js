import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Rodape from '../Componentes/Rodape'
import { estilos } from '../Estilos';

const coresTexto = ['Vermelho', 'Azul', 'Verde', 'Amarelo', 'Roxo'];
const coresRGB = ['red', 'blue', 'green', 'yellow', 'purple'];

const JogoDasCores = () => {
  const [corTexto, setCorTexto] = useState('');
  const [corTextoReal, setCorTextoReal] = useState('');
  const [pontuacao, setPontuacao] = useState(0);
  const [mensagem, setMensagem] = useState('');

  // Gera uma nova rodada com uma cor de texto e uma cor real aleatória
  const gerarNovaRodada = () => {
    const indiceCorTexto = Math.floor(Math.random() * coresTexto.length);
    const indiceCorReal = Math.floor(Math.random() * coresRGB.length);
    
    setCorTexto(coresTexto[indiceCorTexto]);
    setCorTextoReal(coresRGB[indiceCorReal]);
    setMensagem('');
  };

  // Função chamada ao jogador escolher uma cor
  const escolherCor = (corEscolhida) => {
    if (corEscolhida === corTextoReal) {
      setPontuacao(pontuacao + 1);
      setMensagem('Acertou! :)');
    } else {
      setPontuacao(pontuacao - 1);
      setMensagem('Errou! :(');
    }
    gerarNovaRodada(); // Gera uma nova rodada após a escolha
  };

  // Inicia o jogo gerando a primeira rodada
  useEffect(() => {
    gerarNovaRodada();
  }, []);

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Jogo das Cores</Text>
      <Text style={styles.pontuacao}>Pontuação: {pontuacao}</Text>

      {/* Texto da cor, que terá a cor diferente do seu nome */}
      <Text style={[styles.corTexto, { color: corTextoReal }]}>
        {corTexto}
      </Text>

      <View style={styles.botoesContainer}>
        {/* Botões para o jogador escolher a cor */}
        {coresRGB.map((cor, index) => (
          <Button
            key={index}
            title={coresTexto[index]}
            color={cor}
            onPress={() => escolherCor(cor)}
          />
        ))}
      </View>

      {mensagem ? <Text style={estilos.mensagem}>{mensagem}</Text> : null}
      <Rodape/>
    </View>
  );
};

const styles = StyleSheet.create({
  pontuacao: {
    fontSize: 20,
    marginBottom: 20,
  },
  corTexto: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
});

export default JogoDasCores;