import React, {useState} from 'react';
import { Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import { textos } from '../_estilos/textos';
import { botones } from '../_estilos/botones';
import { views } from '../_estilos/views';

import Tarjeta from '../_componentes/Tarjeta'

const Opciones = ({ navigation }) => {
    const IrAPBuscador = () => {
        navigation.navigate('Buscador');
    }
    const IrAListado = () => {
        console.log('Se presionó el otro botón');
    }
    const IrAParcial1 =() =>{
        navigation.navigate('Parcial1')
    }
    return(
        <View style={{alignItems: 'center'}}>
            <Tarjeta titulo='Buscador' boton='Ir al buscador' icono='house' press={IrAPBuscador}/>
            <Tarjeta titulo='Listado' boton='Ir al listado' icono='house' press={IrAListado}/>
            <Tarjeta titulo='Realizacion de Calculadora' boton='Parcial #1' icono='qq' press={IrAParcial1}/>
        </View>
    )
}

export default Opciones;