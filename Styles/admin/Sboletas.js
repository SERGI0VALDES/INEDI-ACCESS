import {StyleSheet} from 'react-native';
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
    // Contenedor para subir o bajar boletas.
    boletasControl: {
  
      width:'90%',
      height: '60%',
      backgroundColor:'rgba(227, 227, 227, 0.93)',
      position:'absolute',
      top:'10%',
      borderRadius:10,
  
    },
    boton:{
      backgroundColor: 'rgba(109, 241, 8, 0.77)',
      paddingBlock:10,
      paddingHorizontal:30,
      borderRadius: 5, // Bordes redondeados
      alignItems: 'center', // Centrar el texto horizontalmente
      position:'absolute',
      top:'80%',
      shadowColor: '#000', // Sombra (iOS)
      shadowOffset: { width: 0, height: 2 }, // Dirección de la sombra
      shadowOpacity: 0.2, // Opacidad de la sombra
      shadowRadius: 4, // Difusión de la sombra
      elevation: 4, // Sombra para Android
      marginTop: 40, // Separación superior
    },
    textoBoton:{
    color: 'white',
    fontSize: 16,
    fontWeight:450
    },
  
  });