import React from 'react';
import { View, Text } from 'react-native';

import { textos } from '../_estilos/textos';

import Opciones from './Opciones';

const Principal = () => {
  return (
    <View>
        <Text style={[textos.titulo]}>Principal</Text>
        <Text style={[textos.subtitulo]}>Bienvenido Luis</Text>
        <Opciones />
    </View>
  )
}

export default Principal;