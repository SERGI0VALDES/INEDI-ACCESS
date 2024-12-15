import {View, StatusBar, TouchableOpacity, Text, Image } from 'react-native';
// estilos
import { styles } from '../Styles/Style-Servicios.js';
// imagenes
import logo_inedi from '../assets/logo_inedi.png';


export default function ServiciosScreen({ navigation }) {
  return (
    
    <View style={styles.containerIndex}>
      
      <View style={styles.background}>
      <Image source={logo_inedi} style={styles.logoInedi} />
      </View>

      {/* Contenedor de encabezado */}
      <View style={styles.encabezado}>

        <TouchableOpacity style={styles.Atras} onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.textoAtras}>Cerrar</Text>
        </TouchableOpacity>

      </View> 

      
      <StatusBar style="auto" />
    </View>
  );
}
