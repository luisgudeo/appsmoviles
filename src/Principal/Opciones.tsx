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
      <View style={[views.menuContainer]}>
        <Pressable style={[views.menuCardL]} onPress={() => irA('Buscador')}>
          <Icon name='house' color='white' size={40}/>
          <Text style={[textos.menuBtn]}>Buscador</Text>
        </Pressable>
        <Pressable style={[views.menuCardR]} onPress={IrAListado}>
          <Icon name='list' color='white' size={40}/>
          <Text style={[textos.menuBtn]}>Listado</Text>
        </Pressable>
      </View>
      <View style={[views.menuContainer]}>
        <Pressable style={[views.menuCardL]} onPress={() => irA('Parcial')}>
          <Icon name='file' color='white' size={40}/>
          <Text style={[textos.menuBtn]}>Parcial</Text>
        </Pressable>
        <Pressable style={[views.menuCardR]} onPress={() => irA('Modal')}>
          <Icon name='comments' color='white' size={40}/>
          <Text style={[textos.menuBtn]}>Modal</Text>
        </Pressable>
        </View>
      <View style={[views.menuContainer]}>
        <Pressable style={[views.menuCardL]} onPress={() => irA('Form')}>
          <Icon name='file' color='white' size={40}/>
          <Text style={[textos.menuBtn]}>Formulario</Text>
        </Pressable>
      </View>
    </View>
    )
}

export default Opciones;