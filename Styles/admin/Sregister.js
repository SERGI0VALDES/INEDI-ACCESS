import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
    backgroundColor: '#f5f5f5', // Color de fondo claro
    padding: 20, // Espaciado interno para evitar que el contenido toque los bordes
  },
  textoTitulo: {
    fontSize: 24, // Tamaño de texto para el título
    fontWeight: 'bold', // Texto en negrita
    marginBottom: 20, // Espacio debajo del título
    color: '#333', // Color del texto
  },
  input: {
    width: '100%', // Ocupa todo el ancho disponible
    height: 50, // Altura del input
    borderColor: '#ccc', // Color del borde
    borderWidth: 1, // Grosor del borde
    borderRadius: 5, // Bordes redondeados
    paddingHorizontal: 10, // Espaciado interno
    marginBottom: 15, // Espaciado entre inputs
    backgroundColor: '#fff', // Fondo blanco
  },
  textoRol: {
    fontSize: 16, // Tamaño de texto para las instrucciones
    color: '#666', // Color del texto
    marginBottom: 10, // Espacio debajo del texto
  },
  picker: {
    width: '100%', // Ocupa todo el ancho disponible del contenedor
    height: 50, // Altura del Picker
    backgroundColor: '#fff', // Fondo blanco
    borderColor: '#ccc', // Color del borde
    borderWidth: 1, // Grosor del borde
    borderRadius: 5, // Bordes redondeados
    justifyContent: 'center', // Asegura el contenido centrado verticalmente
    paddingHorizontal: 10, // Añade algo de espacio interno para los bordes
  },
  boton: {
    width: '100%', // Ocupa todo el ancho disponible
    height: 50, // Altura del botón
    backgroundColor: '#4CAF50', // Color verde para el botón
    justifyContent: 'center', // Centra el texto dentro del botón
    alignItems: 'center', // Centra el texto horizontalmente
    borderRadius: 5, // Bordes redondeados
    marginTop: 10, // Espaciado superior
  },
  textoBoton: {
    fontSize: 16, // Tamaño de texto del botón
    fontWeight: 'bold', // Texto en negrita
    color: '#fff', // Color blanco para el texto
  },
});
