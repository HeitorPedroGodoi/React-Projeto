import { View,Text, Image } from 'react-native';
import { estilos } from '../Estilos';

function Imagem2(props) {
  return (
    <View>
      <Image
        style={{ width: props.largura, height: props.altura }}
        source={require('../../Midia/Heitor.png')}
      />
      <Text>{props.legenda}</Text>
    </View>
  );
}

export default Imagem2;
