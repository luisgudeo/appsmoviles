
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './src/Principal/Index';

const Stack = createNativeStackNavigator();

const App = () => {
    return(
     <NavigationContainer>
        <Stack.Navigator initialRouteName="Principal" screenOptions={{headerShown: false}}>
            <Stack.Screen name='Principal' component={Principal} />
        </Stack.Navigator>
     </NavigationContainer>   
    )
}

export default App;