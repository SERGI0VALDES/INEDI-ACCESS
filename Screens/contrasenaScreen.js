import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
//Importación de hoja de estilos
import { styles } from '../Styles/Style-RecContrasena.js';
//imagen
import flecha from '../assets/flecha.png';


export default function RecContrasena({navigation}) {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [formattedDate, setFormattedDate] = useState('dd/mm/aaaa'); // Fecha inicial vacía

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(false); // Ocultar picker
    if (selectedDate) {
      setDate(selectedDate);

      // Formatear fecha como dd/mm/aaaa
      const day = selectedDate.getDate().toString().padStart(2, '0');
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
      const year = selectedDate.getFullYear();
      setFormattedDate(`${day}/${month}/${year}`);
    }
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.positionAtras}>
      <Image source={flecha} style={styles.imgAtras} />
      </TouchableOpacity>
      

      <Text style={styles.texto}>ID de alumno</Text>

      <TextInput style={styles.inputClave} />

      <Text style={styles.texto}>Fecha de nacimiento</Text>


      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={formattedDate} // Fecha seleccionada
          editable={true} // activa la edición manual
          placeholder="dd/mm/aaaa" // Placeholder inicial
        />
        <TouchableOpacity onPress={() => setShowPicker(true)}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-filled/50/000000/calendar.png',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* DateTimePicker */}
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date" // Selector de fecha
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}

        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textoBoton}>Obtener clave</Text>
        </TouchableOpacity>
    </View>
  );
}

 

