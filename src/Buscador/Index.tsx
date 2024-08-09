import React from 'react';
import { View, ScrollView } from 'react-native';

import Titulo from '../_componentes/Titulo';

const Buscador = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Titulo titulo='Buscador' subtitulo='Utiliza el campo de abajo' navigation={navigation} visible={true} />
      </ScrollView>
    </View>
  )
}

export default Buscador;