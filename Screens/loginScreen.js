import { StatusBar } from 'expo-status-bar';
// Importaciones generales
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
// Importaciones del teclado
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
// Importación de imágenes
import logo_inedi from '../assets/logo_inedi.png';
// Importación de hoja de estilos
import { styles } from '../Styles/Style-Login.js';

import appFirebase from '../credenciales.js';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase); // Inicializa Firestore

export default function LoginScreen(props) {
  const [email, setEmail] = useState(''); // Inicializa como cadena vacía
  const [password, setPassword] = useState('');

  const logueo = async () => {
    if (!email || !password) {
      console.log('Por favor, rellena todos los campos.'); // Validación
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      console.log(`Usuario autenticado: ${userId}`);

      const userDocRef = doc(db, 'usuarios', userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const role = userDoc.data().rol;

        console.log(`Rol del usuario: ${role}`);
        if (role === 'admin') {
          props.navigation.navigate('adminmenu');
        } else if (role === 'alumno') {
          props.navigation.navigate('Menu');
        } else {
          console.log('Rol no reconocido.');
        }
      } else {
        console.log('Documento de usuario no encontrado.');
      }
    } catch (error) {
      console.log('Error al iniciar sesión:', error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.texto_inedi_connect}>INEDI ACCESS</Text>
        <Image source={logo_inedi} style={styles.logo_inedi} />

        <TextInput
          style={styles.input}
          placeholder="Correo institucional"
          placeholderTextColor="#adadb8"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Clave de acceso"
          placeholderTextColor="#adadb8"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={{ top: 10 }} onPress={() => props.navigation.navigate('Clave')}>
          <Text style={styles.textoBotonRec}>Recuperar clave</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={logueo}>
          <Text style={styles.textoBoton}>Iniciar sesión</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

