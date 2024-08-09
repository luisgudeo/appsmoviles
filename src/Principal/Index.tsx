import React from 'react';
import { View, ScrollView } from 'react-native';

import Opciones from './Opciones';
import Titulo from '../_componentes/Titulo';

const Principal = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Titulo titulo='Inicio' subtitulo='Selecciona una opción' navigation={navigation} visible={false} />
        <Opciones navigation={navigation} />
      </ScrollView>
    </View>
  )
}

export default Principal;