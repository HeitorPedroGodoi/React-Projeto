import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet } from 'react-native';
import Forca from './src/pages/Forca';
import JogoDaVelha from './src/pages/JogoDaVelha';
import JogoDeAdivinhacao from './src/pages/JogoDeAdivinhacao';
import JogoDasCores from './src/pages/JogoDasCores';
import JogoSequenciaNumerica from './src/pages/JogoSequenciaNumerica';
import JogoDaMemoria from './src/pages/JogoDaMemoria';
import JogoQuiz from './src/pages/Quiz';
import Equipe from './src/pages/Equipe';
import Festa from './src/pages/CalculadoraFesta';
import Botao from './src/Componentes/Botao';
import Rodape from './src/Componentes/Rodape'

const Stack = createStackNavigator();

// Tela do Menu Principal
const Menu = ({ navigation }) => {
  const [elementVisible, setElementVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Distraidor de Crianças</Text>
      <Button
        title="Jogo da Forca"
        onPress={() => navigation.navigate('Forca')}
      />
      <Button
        title="Jogo da Velha"
        onPress={() => navigation.navigate('JogoDaVelha')}
      />
      <Button
        title="Jogo de Adivinhação"
        onPress={() => navigation.navigate('JogoDeAdivinhacao')}
      />
      <Button
        title="Jogo das Cores"
        onPress={() => navigation.navigate('JogoDasCores')}
      />
      <Button
        title="Jogo da Sequência Numérica"
        onPress={() => navigation.navigate('JogoSequenciaNumerica')}
      />
      <Button
        title="Jogo da Memória"
        onPress={() => navigation.navigate('JogoDaMemoria')}
      />
      <Button
        title="Teste de Conhecimento"
        onPress={() => navigation.navigate('JogoQuiz')}
      />
      <Button
        title="Calculadora para festas"
        onPress={() => navigation.navigate('Festa')}
      />
      {elementVisible ? (
        <Button
          title="Quem criou essa bomba?"
          onPress={() => navigation.navigate('Equipe')}
        />
      ) : null}
      <Botao cor='lightgray' acao={() => setElementVisible(!elementVisible)}/>
      <Rodape/>
    </View>
  );
};

// App Principal com Navegação
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Forca" component={Forca} />
        <Stack.Screen name="JogoDaVelha" component={JogoDaVelha} />
        <Stack.Screen name="JogoDeAdivinhacao" component={JogoDeAdivinhacao} />
        <Stack.Screen name="JogoDasCores" component={JogoDasCores} />
        <Stack.Screen
          name="JogoSequenciaNumerica"
          component={JogoSequenciaNumerica}
        />
        <Stack.Screen name="JogoDaMemoria" component={JogoDaMemoria} />
        <Stack.Screen name="JogoQuiz" component={JogoQuiz} />
        <Stack.Screen name="Equipe" component={Equipe} />
        <Stack.Screen name="Festa" component={Festa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
});
