import React from 'react';
import { View, ScrollView, Pressable } from 'react-native';

import Opciones from './Opciones';
import Titulo from '../_componentes/Titulo';

const Calcu = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        
        <Titulo titulo='Parcial' subtitulo='Selecciona una opción' navigation={navigation} visible={true} />
        <Opciones navigation={navigation} />
      </ScrollView>
    </View>
  )
}

export default Calcu;