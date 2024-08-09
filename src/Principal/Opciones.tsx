import React, {useState} from 'react';
import { Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import { textos } from '../_estilos/textos';
import { botones } from '../_estilos/botones';
import { views } from '../_estilos/views';

import Tarjeta from '../_componentes/Tarjeta'

const Opciones = ({ navigation }) => {
    const IrAPagina2 = () => {
        navigation.navigate('Buscador');
    }
    const IrAPagina1 = () => {
        console.log('Se presionó el otro botón');
    }
    return(
        <View style={{alignItems: 'center'}}>
            <Tarjeta titulo='Titulo 1' boton='Boton 1' icono='house' press={IrAPagina2}/>
            <Tarjeta titulo='Otro titulo' boton='Aceptar' icono='house' press={IrAPagina1}/>
        </View>
    )
}

export default Opciones;