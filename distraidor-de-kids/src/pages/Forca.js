import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Rodape from '../Componentes/Rodape'
import { estilos } from '../Estilos';

const palavras = ['react', 'expo', 'javascript', 'mobile', 'programacao']; // Lista de palavras

const Forca = () => {
  const [palavra, setPalavra] = useState(palavras[Math.floor(Math.random() * palavras.length)]);
  const [tentativas, setTentativas] = useState(6); // Número de tentativas restantes
  const [letrasTentadas, setLetrasTentadas] = useState([]); // Letras já escolhidas
  const [letraAtual, setLetraAtual] = useState(''); // Letra digitada pelo jogador

  // Função para renderizar o estado atual da palavra com traços para as letras faltantes
  const renderPalavra = () => {
    return palavra.split('').map((letra) => 
      letrasTentadas.includes(letra) ? letra : '_'
    ).join(' ');
  };

  // Função chamada quando o jogador tenta uma letra
  const tentarLetra = () => {
    if (!letraAtual || letrasTentadas.includes(letraAtual)) return;

    setLetrasTentadas([...letrasTentadas, letraAtual]);

    if (!palavra.includes(letraAtual)) {
      setTentativas(tentativas - 1);
    }

    setLetraAtual('');
  };

  // Verifica se o jogador ganhou ou perdeu
  const venceu = palavra.split('').every((letra) => letrasTentadas.includes(letra));
  const perdeu = tentativas <= 0;

  return (
    <View style={estilos.container}>
      <Text style={styles.titulo}>Jogo da Forca</Text>
      <Text style={styles.palavra}>{renderPalavra()}</Text>
      <Text>Tentativas restantes: {tentativas}</Text>

      {/* Input para o jogador tentar uma letra */}
      {!venceu && !perdeu && (
        <>
          <TextInput
            style={estilos.input}
            value={letraAtual}
            onChangeText={setLetraAtual}
            maxLength={1}
          />
          <Button title="Tentar letra" onPress={tentarLetra} />
        </>
      )}

      {/* Mostra mensagem de vitória ou derrota */}
      {venceu && <Text>Você ganhou!</Text>}
      {perdeu && <Text>Você perdeu! A palavra era: {palavra}</Text>}

      {/* Botão para reiniciar o jogo */}
      <Button
        title="Jogar novamente"
        onPress={() => {
          setPalavra(palavras[Math.floor(Math.random() * palavras.length)]);
          setTentativas(6);
          setLetrasTentadas([]);
        }}
        
      />
      <Rodape/>
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    marginBottom: 20,
  },
  palavra: {
    fontSize: 24,
    marginVertical: 20,
    letterSpacing: 5,
  },
});

export default Forca;