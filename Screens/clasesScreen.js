import React, { useState } from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
// estilos
import { styles } from '../Styles/Style-Clases.js';
// imagenes
import qrimage from '../assets/qricon.png';
import logo_inedi from '../assets/logo_inedi.png';
import Iconagregar from '../assets/icono_agregar.png';

export default function ClasesScreen({ navigation }) {
  // Modal visibilidad/NO-visibilidad
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.containerIndex}>
      <View style={styles.background}>
        <Image source={logo_inedi} style={styles.logoInedi} />
      </View>

      {/* Contenedor de encabezado */}
      <View style={styles.encabezado}>
        <TouchableOpacity
          style={styles.Atras}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.textoAtras}>Cerrar</Text>
        </TouchableOpacity>
      </View>

      {/* Icono de QR en la parte de abajo */}
      <TouchableOpacity onPress={() => navigation.navigate('QR')}>
        <Image source={qrimage} style={styles.clasesQr} />
      </TouchableOpacity>

      {/* Icono de [+] en la parte de abajo */}
      <TouchableOpacity onPress={handleOpenModal}>
        <Image source={Iconagregar} style={styles.iconAgregar} />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setModalVisible(false); // Cierra el modal al hacer tap fuera
            Keyboard.dismiss(); // Oculta el teclado si está abierto
          }}
        >
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              {/* Contenido del modal */}
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>Ingresa la clave de acceso</Text>

                <TextInput style={styles.input} />

                {/* Botón para validar el código de clase */}
                <Pressable style={styles.entrar}>
                  <Text style={styles.entrarButtonText}>Entrar</Text>
                </Pressable>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}
