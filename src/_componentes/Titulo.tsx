import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import { textos } from '../_estilos/textos';
import { views } from '../_estilos/views';

const Titulo = ({titulo, subtitulo, navigation, visible}) => {
    return (
        <View style={[views.titulo]}>
            {visible == true ?
                <Pressable>
                    <Icon name='caret-left' size={30} color='blue' />
                </Pressable>
            :
                null
            }
            <Text style={[textos.titulo]}>{titulo}</Text>
            <Text style={[textos.subtitulo]}>{subtitulo}</Text>
        </View>
    )
}

export default Titulo;