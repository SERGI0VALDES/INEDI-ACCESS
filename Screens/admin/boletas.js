import {View, StatusBar, TouchableOpacity, Text, Image } from 'react-native';
// Importación de hoja de estilos
import { styles } from '../../Styles/admin/Sboletas';
// imagenes
import logo_inedi from '../../assets/logo_inedi.png';


export default function boletasAdmin({ navigation }) {
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

      <View style={styles.boletasControl}>

       

      </View>

      <TouchableOpacity style={styles.boton}>
                 <Text style={styles.textoBoton}>Subir boleta</Text>
       </TouchableOpacity>
       
      <StatusBar style="auto" />
    </View>
  );
}

