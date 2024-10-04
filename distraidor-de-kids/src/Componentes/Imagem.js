import { View,Text, Image } from 'react-native';
import { estilos } from '../Estilos';

function Imagem(props) {
  return (
    <View >
      <Image
        style={{ width: props.largura, height: props.altura }}
        source={require('../../Midia/Nyckolas.png')}
      />
      <Text>{props.legenda}</Text>
    </View>
  );
}

export default Imagem;
