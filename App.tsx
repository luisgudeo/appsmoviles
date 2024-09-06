import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './src/Principal/Index';
import Buscador from './src/Buscador/Index';
import Login from './src/Login/Index';
import Parcial_1 from './src/Parcial_1/Index';

import { CrearDatos } from './src/_api/datos';

const Stack = createNativeStackNavigator();
const App = () => {
    useEffect(() => {
        CrearDatos();
    }, []);
    return(
     <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name='Principal' component={Principal} />
            <Stack.Screen name='Buscador' component={Buscador} />
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
     </NavigationContainer>   
    )
}

export default App;