import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// importacion de Screens Alumnos

import LoginScreen from './Screens/loginScreen';
import MenuScreen from './Screens/menuScreen';
import RecContrasena from './Screens/contrasenaScreen';
import ClasesScreen from './Screens/clasesScreen';
import ServiciosScreen from './Screens/serviciosScreen';
import boletinScreen from './Screens/boletinScreen';
import boletasScreen from './Screens/boletasScreen';
import citasScreen from './Screens/citasScreen';

// importacion de Screens Administradores

import adminMenu from './Screens/admin/menu';

import adminBoletin from './Screens/admin/boletin';
import adminBoletas from './Screens/admin/boletas';
import adminCitas from './Screens/admin/citas';
import adminUsuarios from './Screens/admin/altaUsuarios';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="adminUsuarios">
        
        {/* Screens en orden de uso en la aplicación...tipo de usuario[ Alumno ] */}

        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Clave" component={RecContrasena} options={{ headerShown: false }}/>
        <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Clases" component={ClasesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Servicios" component={ServiciosScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="boletin" component={boletinScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="citas" component={citasScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="boletas" component={boletasScreen} options={{ headerShown: false }}/>
        
        {/* Screens en orden de uso en la aplicación...tipo de usuario[ Administrador ] */}

        <Stack.Screen name="adminmenu" component={adminMenu} options={{ headerShown: false }}/>

        <Stack.Screen name="adminboletin" component={adminBoletin} options={{ headerShown: false }}/>
        <Stack.Screen name="admincitas" component={adminCitas} options={{ headerShown: false }}/>
        <Stack.Screen name="adminboletas" component={adminBoletas} options={{ headerShown: false }}/>
        <Stack.Screen name="adminUsuarios" component={adminUsuarios} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
