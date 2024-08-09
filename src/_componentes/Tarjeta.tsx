import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { views } from '../_estilos/views';
import { textos } from '../_estilos/textos';
import { botones } from '../_estilos/botones';

const Tarjeta = ({titulo, boton, icono, press}) => {
    return (
        <View style={[views.card]}>
            <Text style={[textos.subtitulo]}>{titulo}</Text>
            <Pressable style={[botones.btn]} onPress={press}>
                <Text style={[textos.btn]}>{boton}</Text>
                <Icon name={icono} color='white' size={32} />
            </Pressable>
        </View>
    )
}
export default Tarjeta;