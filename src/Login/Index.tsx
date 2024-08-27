import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Pressable, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome6';

import { views } from '../_estilos/views';
import { textos } from '../_estilos/textos';
import { botones } from '../_estilos/botones';

let txtUser;

const Login = ({ navigation }) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    
    useEffect(async () => {
        let loginAnterior = await AsyncStorage.getItem('login');
        if(loginAnterior != null) {
            if(loginAnterior == 'true'){
                navigation.navigate('Principal');
            }
        }
    }, []);

    const validar = async () => {
        let usuarios = await AsyncStorage.getItem('usuarios');
        let lista = JSON.parse(usuarios);
        let existe = false;
        lista.map((item) => {
            if(item.user == user && item.pass == pass){
                existe = true;
            }
        });
        if(existe == false){
            Alert.alert('Error', 'Usuario o contraseña incorrectos');
            setUser('');
            setPass('');
            txtUser.focus();
        } else {
            await AsyncStorage.setItem('login', 'true');
            navigation.navigate('Principal');
        }
    }
    return(
        <View style={[views.login]}>
            <Text style={[textos.tituloLogin]}>Bienvenido</Text>
            <View style={[views.inputView]}>
                <Icon name='user' size={24} color='black' solid/>
                <TextInput
                    ref={(input) => {txtUser = input;}}
                    placeholder='Usuario'
                    value={user}
                    onChangeText={setUser}
                    style={[views.input]} />
            </View>
            <View style={[views.inputView]}>
                <Icon name='ghost' size={24} color='black' />
                <TextInput secureTextEntry={true} placeholder='Contraseña' value={pass} onChangeText={setPass} style={[views.input]} />
            </View>
            <Pressable style={[botones.btn]} onPress={validar}>
                <Icon name='right-to-bracket' size={24} color='white' solid/>
                <Text style={[textos.btn]}>Iniciar Sesión</Text>
            </Pressable>
        </View>
    )
}

export default Login;