import {StyleSheet} from 'react-native';
//Archivo con la mayoria de estilos de ClasesScreen.js
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
    top:'0%',
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
  clasesQr: {
    position: 'absolute',
    right:50,
    top:230,
    width:60,
    height:60,
    resizeMode: 'contain', // Ajuste de imagen dentro del contenedor
  },
  iconAgregar:{
    position: 'absolute',
    left:50,
    top:230,
    width:60,
    height:60,
    resizeMode: 'contain', // Ajuste de imagen dentro del contenedor
  },
  //Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    height: 230,
    backgroundColor: '#f1f0f0',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  //cerrar modal
  entrar:{
    backgroundColor: '#164ddf',
    paddingVertical: 10, // Espaciado vertical
    paddingHorizontal: 50, // Espaciado horizontal
    borderRadius: 5, // Bordes redondeados
    alignItems: 'center', // Centrar el texto horizontalmente
    position:'absolute',
    top:120,
    shadowColor: '#000', // Sombra (iOS)
    shadowOffset: { width: 0, height: 2 }, // Dirección de la sombra
    shadowOpacity: 0.2, // Opacidad de la sombra
    shadowRadius: 4, // Difusión de la sombra
    elevation: 4, // Sombra para Android
    marginTop: 40, // Separación superior
  },
  entrarButtonText: {
    color: 'white',
    fontSize: 16,
  },
  input:{
    height: 50, // Altura 
    borderWidth:0.1,
    borderColor: '#000', // Color de borde 
    borderRadius:5,
    paddingHorizontal: 10, // Espaciado interno 
    fontSize: 18,
    color: '#000',
    backgroundColor: '#F9F9F9',
    marginTop: 20, // Usar margen `top` 
    width: '90%', 
    // Propiedades de sombra para iOS
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Elevation para Android
    elevation: 4, 
  },
});