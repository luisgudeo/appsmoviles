import React from 'react';
import { View, ScrollView } from 'react-native';

import Opciones from './Principal';
import Titulo from '../_componentes/Titulo';
import { views } from '../_estilos/views';

const Principal = ({ navigation }) => {
  return (
    <View style={[views.container]}>
      <ScrollView style={[views.body]}>
        <Titulo titulo='Inicio' subtitulo='Examen final' navigation={navigation} visible={false} />
        <Opciones navigation={navigation} />
      </ScrollView>
    </View>
  )
}

export default Principal;