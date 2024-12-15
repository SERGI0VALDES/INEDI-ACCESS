import {View, StatusBar, TouchableOpacity, Text, Image } from 'react-native';
import {StyleSheet} from 'react-native';

// imagenes
import logo_inedi from '../../assets/logo_inedi.png';


export default function citasAdmin({ navigation }) {
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

// Estilos.
export const styles = StyleSheet.create({
  // Estilos del logo que esta de fondo.
  background:{
    width:'100%',
    height:'100%',
    position:'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Fondo semitransparente
    alignItems:'center',
    justifyContent: 'center',
  },
  logoInedi: {
    width: '100%', // Un porcentaje más manejable
    height: '100%',
    position: 'absolute',
    opacity: 0.3,
    resizeMode: 'contain', // Ajustar la imagen sin desbordar
  },  
  //El containerIndex es el contenedor que contiene precisamente todo el screen, por eso en su nombre se le asigno Index
  //Indicando que es el primero de todos los contenedores de la pagina. [contenedor 1].
  containerIndex: {
    flex: 1,
    fontWeight: 'bold', 
    backgroundColor: '#fff',
    textAlign: 'center', // Alineación horizontal
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Contenedor 2, contiene botones [Atras] 
  encabezado: {
    height: 50, // Altura del encabezado
    width:'100%',
    backgroundColor: '#007AFF', // Color de fondo (azul)
    flexDirection: 'row', // Para alinear los elementos en fila
    justifyContent: 'space-between', // Espaciado uniforme entre elementos
    alignItems: 'center', // Centrar verticalmente
    paddingHorizontal: 15, // Espaciado interno horizontal
    position:'absolute',
    top:0,
  },
  Atras: { // Es el boton que nos redirije al Login para cerrar sesion.
    position:'absolute', 
    left:10,
    padding: 10
  },
  textoAtras: {
    fontSize:18,
    color:'white',
    fontWeight:450
  }, 

});