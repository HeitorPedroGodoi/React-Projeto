import { View,Text, Linking } from 'react-native';
import { estilos } from '../Estilos';

function Heitor() {
  return (
    <View style={estilos.imagem}>
      <Text onPress={ () =>{Linking.openURL('https://github.com/HeitorPedroGodoi')} }>Clique aqui para acessar o meu github</Text>
    </View>
  );
}

export default Heitor;
