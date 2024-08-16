import React from 'react';
import { View, ScrollView } from 'react-native';

import Titulo from '../_componentes/Titulo';
import Lista from './Lista';

const Buscador = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Titulo titulo='Buscador' subtitulo='Utiliza el campo de abajo' navigation={navigation} visible={true} />
        <Lista />
      </ScrollView>
    </View>
  )
}

export default Buscador;