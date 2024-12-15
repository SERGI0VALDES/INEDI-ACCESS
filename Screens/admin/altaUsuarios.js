import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Asegúrate de instalar este paquete
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import appFirebase from '../../credenciales'; // Asegúrate de usar la configuración de Firebase
import { styles } from '../../Styles/admin/Sregister'; // Crea un archivo de estilos si lo necesitas

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

export default function RegisterScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState(''); // Valor inicial del rol

  const registro = async () => {
    try {
      // Crea el usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      // Guarda el usuario en Firestore con su rol
      await setDoc(doc(db, 'usuarios', userId), {
        correo: email,
        nombre: name,
        rol: role, // Rol seleccionado por el usuario
      });

      console.log('Usuario registrado y guardado en Firestore.');
      props.navigation.navigate('Login'); // Navega al login después del registro
    } catch (error) {
      console.log('Error al registrar usuario:', error.message);
    }
  };

  return (

    <View style={styles.container}>
      <Text style={styles.textoTitulo}>Registro de Usuario</Text>

      {/* Nombre */}
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        placeholderTextColor="#adadb8"
        onChangeText={(text) => setName(text)}
      />

      {/* Correo */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#adadb8"
        onChangeText={(text) => setEmail(text)}
      />

      {/* Contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#adadb8"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      {/* Selector de rol */}
      <Text style={styles.textoRol}>Selecciona el tipo de usuario:</Text>
      <Picker
        selectedValue={role}
        style={styles.picker}
        onValueChange={(itemValue) => setRole(itemValue)}>
          
        <Picker.Item label="Alumno" value="alumno" />
        <Picker.Item label="Administrador" value="admin" />

      </Picker>

      {/* Botón de registro */}
      <TouchableOpacity style={styles.boton} onPress={registro}>
        <Text style={styles.textoBoton}>Registrarse</Text>
      </TouchableOpacity>

    </View>
  );
}
