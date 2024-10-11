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
    function irA(Pagina: string) {
        navigation.navigate(Pagina);
    }
    return(
        <View style={{alignItems: 'center'}}>
            <Tarjeta titulo='Buscador' boton='Ir al buscador' icono='house' press={IrAPBuscador}/>
            <Tarjeta titulo='Listado' boton='Ir al listado' icono='house' press={IrAListado}/>
            <Tarjeta titulo='Parcial' boton='Ir al parcial' icono='house' press={() => irA('Parcial')}/>
            <Tarjeta titulo='Modal' boton='Ir al modal' icono='house' press={() => irA('Modal')}/>
            <Tarjeta titulo='Form' boton='Ir al Form' icono='house' press={() => irA('Form')}/>
        </View>
    )
}

export default Opciones;