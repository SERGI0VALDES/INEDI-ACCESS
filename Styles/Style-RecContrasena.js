import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    width: '80%',
    marginTop: 20,   
  },
  texto: {
    fontSize:18,
    fontWeight: 'bold',
    marginTop: 20, // Usar margen `top` 
  },
  inputClave: {
    height: 50, // Altura 
    borderWidth: .1,
    borderColor: 'gray', // Color de borde 
    paddingHorizontal: 20, // Espaciado interno 
    fontSize: 18,
    color: '#000',
    backgroundColor: '#F9F9F9',
    marginTop: 20, // Usar margen `top` 
    width: '80%',  
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    color: '#333',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  positionAtras: {
    position:'absolute',
    top:100
  },
  imgAtras: {
    resizeMode: 'contain',
    width:80,
    height:80
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
});