import { registerRootComponent } from 'expo';

import App from './Navigation';

//registerRootComponent llama a AppRegistry.registerComponent('main', () => App); 
//También asegura que si carga la aplicación en Expo Go o en una compilación nativa, 
//el entorno se configura adecuadamente
registerRootComponent(App);
