import React, { useState, useEffect } from 'react';
import { Modal, View, StatusBar, TouchableOpacity, Text, Image } from 'react-native';
// estilos
import { styles } from '../Styles/Style-Menu.js';
//imagenes
import qrimage from '../assets/qricon.png';
import logo_inedi from '../assets/logo_inedi.png';


export default function MenuScreen({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);

  // Montar modal automáticamente
  useEffect(() => {
    setModalVisible(true);
  }, []);

  return (
    
    <View style={styles.containerIndex}>
      
      <View style={styles.background}>
      <Image source={logo_inedi} style={styles.logoInedi} />
      </View>

      {/* Ventana Modal que muestra un recordatorio al usuario al cargar el Screen */}
      <Modal
        animationType="fade" // Animación al abrir la modal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        transparent={true} // Fondo semitransparente
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Cerrar al pulsar atrás en Android
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Recordatorio!</Text>
            <Text style={styles.modalBody}>
              Toda acción realizada en esta sección será notificada a control escolar y parental.
            </Text>

            {/* Botón para cerrar la ventana modal */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>OK!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Contenedor de encabezado */}
      <View style={styles.encabezado}>
        {/* Botón para cerrar sesión */}
        <TouchableOpacity style={styles.Atras} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textoAtras}>Cerrar</Text>
        </TouchableOpacity>

        {/* Icono de QR */}
        <TouchableOpacity style={styles.botonQrIcon}  onPress={() => navigation.navigate('')}>
          <Image source={qrimage} style={styles.imageQrIcon}/>
        </TouchableOpacity>  
      </View>

      {/* Contenedor del menú */}
      <View style={styles.containerMenu}>
        {/* Aqui me falta traer el nombre del alumno desde la base de datos */}
        <Text style={styles.infoAlumno}>{"Nombre del alumno"}</Text>

        {/* Lista de botones */}
        <TouchableOpacity 
          style={styles.boton}
          onPress={() => navigation.navigate('Clases')}>
          <Text style={styles.textoBoton}>Clases</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.boton}
          onPress={() => navigation.navigate('Servicios')}>
          <Text style={styles.textoBoton}>Pago de servicios</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate('boletin')}>
          <Text style={styles.textoBoton}>Boletín semanal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate('citas')}>
          <Text style={styles.textoBoton}>Citas</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.boton}
          onPress={() => navigation.navigate('boletas')}>
          <Text style={styles.textoBoton}>Firma de boletas</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
