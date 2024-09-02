import React, { useState } from "react";
import { View, Image, TextInput, Pressable, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';

import { views } from '../_estilos/views';
import { textos } from "../_estilos/textos";
import { botones } from "../_estilos/botones";

const Registro = ({ navigation }) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const validar = () => {

    }
    return(
        <View style={[views.login]}>
            <Image style={{width: 100, height: 100}} source={require('../_imgs/tiny_logo.png')} />
            <Text style={[textos.tituloLogin]}>Registrarse</Text>
            <View style={[views.inputView]}>
                <Icon name='user' size={24} color='black' solid/>
                <TextInput
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
                <Text style={[textos.btn]}>Registrarse</Text>
            </Pressable>
        </View>
    )
}

export default Registro;