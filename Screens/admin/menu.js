
import { View, StatusBar, TouchableOpacity, Text, Image } from 'react-native';
// estilos
import { styles } from '../../Styles/admin/Smenu.js';

import logo_inedi from '../../assets/logo_inedi.png';


export default function menuAdmin({ navigation }) {

  return (
    
    <View style={styles.containerIndex}>
      
      <View style={styles.background}>
      <Image source={logo_inedi} style={styles.logoInedi} />
      </View>

      {/* Contenedor de encabezado */}
      <View style={styles.encabezado}>

        {/* Botón para cerrar sesión */}
        <TouchableOpacity style={styles.Atras} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textoAtras}>Cerrar</Text>
        </TouchableOpacity>

      </View>

      {/* Contenedor del menú */}
      <View style={styles.containerMenu}>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate('boletin')}>
          <Text style={styles.textoBoton}>Actualizar boletin</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate('citas')}>
          <Text style={styles.textoBoton}>Crear una citas</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.boton}
          onPress={() => navigation.navigate('boletas')}>
          <Text style={styles.textoBoton}>Subir boletas</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.boton}
          onPress={() => navigation.navigate('adminUsuarios')}>
          <Text style={styles.textoBoton}>Dar de alta</Text>
        </TouchableOpacity>

        
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
