import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './src/Principal/Index';
import Buscador from './src/Buscador/Index';
import LoginPage from './src/Login/Index';
import Registro from './src/Registro/Index';
import Pagina1 from './src/Parcial/Pagina1';
import Modal from './src/Modal/Index';
import Form from './src/Form/Index';

import { CrearDatos } from './src/_api/datos';

const Stack = createNativeStackNavigator();
const App = () => {
    useEffect(() => {
        CrearDatos();
    }, []);
    return(
     <NavigationContainer>
        <Stack.Navigator initialRouteName="Principal" screenOptions={{headerShown: false}}>
            <Stack.Screen name='Principal' component={Principal} />
            <Stack.Screen name='Buscador' component={Buscador} />
            <Stack.Screen name='Login' component={LoginPage} />
            <Stack.Screen name='Registro' component={Registro} />
            <Stack.Screen name='Parcial' component={Pagina1} />
            <Stack.Screen name='Modal' component={Modal} />
            <Stack.Screen name='Form' component={Form} />
        </Stack.Navigator>
     </NavigationContainer>   
    )
}


export default App;