import {StyleSheet} from 'react-native';
//Este archivo, esta importado en mas de 1 archivo Screen tomando estilos reutilizables.
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
    width:'100%',
    height:'100%',
    flex: 1,
    fontWeight: 'bold', 
    backgroundColor: '#fff',
    textAlign: 'center', // Alineación horizontal
    alignItems: 'center',
    justifyContent: 'center',
  },
  //Es el segundo contenedor en la pagina, este contiene los botones del menú
  containerMenu: {
    backgroundColor:'#f5f5f5',
    width:'90%',
    height:'55%',
    padding: 20, // Espaciado interno
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Sombra en Android
  },
  // Contenedor 3, contiene botones [Atras] y [Qr]
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
  // Son los datos del alumno logeado
  infoAlumno:{
    fontSize:16,
    left:20,
    position:'absolute',
    fontWeight: '350',
  },
  botonQrIcon: { // boton que da acceso a la camara para leer qr´s
    left:290,
  },
  imageQrIcon:{
    width:35,
    height:35,
    resizeMode: 'contain', // Ajuste de imagen dentro del contenedor
  },
  Atras:{ // Es el boton que nos redirije al Login para cerrar sesion.
    position:'absolute', 
    left:10,
    padding: 10
  },
  textoAtras:{
    fontSize:18,
    color:'white',
    fontWeight:450
  }, 
  boton: {
    width: '100%', // Botones ocupan todo el ancho del contenedor
    paddingVertical: 15,
    top:70,
    borderWidth: 1, // Grosor del borde
    borderColor: '#ddd', // Color del borde
    marginBottom: 15, // Espaciado entre botones
    alignItems: 'center', // Centra el texto del botón
    backgroundColor: '#ffffff', // Fondo blanco
    borderRadius: 8,
    shadowColor: '#afadad',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    
  },
  textoBoton: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },

  //Estilos del Modal
  closeButton: {
    backgroundColor: '#1fcd36',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalBody: {
    fontSize: 14,
    textAlign: 'center',
  },
});