import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    //Estilos del contenedor
    container: {
      flex: 1,
      fontWeight: 'bold', 
      backgroundColor: '#fff',
      textAlign: 'center', // Alineación horizontal
      alignItems: 'center',
      justifyContent: 'center',
    },
    //texto de arriba, inedi connect
    texto_inedi_connect:{
        position: 'absolute',
        top:60
    },
    //Logo
    logo_inedi:{
        position:'absolute',
        width:'35%',
        height:'35%',
        top:'8%',
        resizeMode: 'contain', // Ajustar la imagen sin desbordar
    },
    //Inputs
    input:{
        height: 50, // Altura 
        borderWidth: .8,
        borderColor: '#000', // Color de borde 
        borderRadius: 50, // Redondeado esquina
        paddingHorizontal: 20, // Espaciado interno 
        fontSize: 16,
        color: '#000',
        backgroundColor: '#F9F9F9',
        marginTop: 20, // Usar margen `top` 
        width: '80%', 
        // Propiedades de sombra para iOS
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Elevation para Android
        elevation: 4,
        color:''
    },
    //Boton Log in
    boton:{
        backgroundColor: '#164ddf',
        paddingVertical: 10, // Espaciado vertical
        paddingHorizontal: 40, // Espaciado horizontal
        borderRadius: 5, // Bordes redondeados
        alignItems: 'center', // Centrar el texto horizontalmente
        position:'absolute',
        top:550,
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
    textoBotonRec:{
        color: '#afadad', 
        fontSize: 15, 
        marginTop:10
    }
    
});
