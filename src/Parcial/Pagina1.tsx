import React, { useEffect, useState } from 'react';
import { Alert, TextInput, View, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { botones } from '../_estilos/botones';
import { views } from '../_estilos/views';
import { textos } from '../_estilos/textos';
import Titulo from '../_componentes/Titulo';

const Pagina1 = ({ navigation }) => {
    const [color, setColor] = useState('');
    const [colorB, setColorB] = useState('#000000');
    const reiniciar = () => {
        setColor('');
        setColorB('#000000');
    }
    useEffect(() => {
        switch (color) {
            case 'rojo':
                setColorB('#ff0000');
                break;
            case 'verde':
                setColorB('#00ff00');
                break;
            case 'azul':
                setColorB('#0000ff');
                break;
            case 'amarillo':
                setColorB('#ffff00');
                break;
            case 'rosa':
                setColorB('#ff00ff');
                break;
            case 'morado':
                setColorB('#6600ff');
                break;
            default:
                setColorB('#000000');
                break;
        }
    }, [color])
    return(
        <View style={[views.body]}>
            <Titulo titulo='Parcial' subtitulo='Cambie el botón de color' navigation={navigation} visible={true} />
            <View style={[views.inputView]}>
                <Icon name='paint-roller' size={24} color={colorB} solid/>
                <TextInput placeholder='Escriba un color' value={color} onChangeText={setColor} style={[views.input]} />
            </View>
            <Pressable style={[botones.btnCam, {backgroundColor: colorB}]} onPress={reiniciar}>
                <Text style={[textos.btn]}>Reiniciar</Text>
            </Pressable>
        </View>
    )
}

export default Pagina1;