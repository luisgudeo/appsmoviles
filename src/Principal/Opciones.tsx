import React, {useState} from 'react';
import { Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import { textos } from '../_estilos/textos';
import { botones } from '../_estilos/botones';
import { views } from '../_estilos/views';

import Tarjeta from '../_componentes/Tarjeta'

const Opciones = () => {
    return(
        <View style={{alignItems: 'center'}}>
            <Tarjeta titulo='Titulo 1' boton='Boton 1' icono='house' />
            <Tarjeta titulo='Titulo 2' boton='Boton 2' icono='user' />
            <Tarjeta titulo='Titulo 1' boton='Boton 1' icono='house' />
            <Tarjeta titulo='Titulo 2' boton='Boton 2' icono='user' />
            <Tarjeta titulo='Titulo 1' boton='Boton 1' icono='house' />
            <Tarjeta titulo='Titulo 2' boton='Boton 2' icono='user' />
            <Tarjeta titulo='Titulo 1' boton='Boton 1' icono='house' />
            <Tarjeta titulo='Titulo 2' boton='Boton 2' icono='user' />
            <Tarjeta titulo='Titulo 1' boton='Boton 1' icono='house' />
            <Tarjeta titulo='Titulo 2' boton='Boton 2' icono='user' />
        </View>
    )
}

export default Opciones;