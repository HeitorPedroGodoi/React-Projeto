import { View,Text, Image } from 'react-native';
import { estilos } from '../Estilos';

function Imagem3(props) {
  return (
    <View style={estilos.imagem}>
      <Image
        style={{ width: props.largura, height: props.altura }}
        source={require('../../Midia/Bolo.png')}
      />
    </View>
  );
}

export default Imagem3;
