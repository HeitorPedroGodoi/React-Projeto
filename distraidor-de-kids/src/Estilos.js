import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  inicio: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  texto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  rodape: {
    position: 'absolute',
    bottom: 10,
    fontSize: 14,
    color: '#ecf0f1',
    textAlign: 'center',
  },
  TextoRodape: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 150,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
    fontFamily: 'monospace',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    fontSize: 20,
    padding: 10,
    fontFamily: 'monospace',
  },
  titulo: {
    fontSize: 30,
    marginBottom: 20,
  },
  mensagem: {
    fontSize: 18,
    marginVertical: 20,
    color: 'blue',
  },
  Misterio:{
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
    imagem:{
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export { estilos };
