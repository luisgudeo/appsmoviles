import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import { textos } from '../_estilos/textos';
import { views } from '../_estilos/views';

const Titulo = ({titulo, subtitulo, navigation, visible}) => {
    const regresar = () => {
        navigation.goBack();
    }
    return (
        <View style={[views.titulo]}>
            {visible == true ?
                <Pressable onPress={regresar}>
                    <Text style={[textos.titulo, {justifyContent:'center'}]}><Icon name='chevron-left' size={24} color='#1f1f1f' /> {titulo}</Text>
                </Pressable>
            :
                <Text style={[textos.titulo]}>{titulo}</Text>
            }
            <Text style={[textos.subtitulo]}>{subtitulo}</Text>
        </View>
    )
}

export default Titulo;


