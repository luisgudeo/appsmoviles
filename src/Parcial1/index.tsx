import React from 'react';
import { View, ScrollView } from 'react-native';

import Titulo from '../_componentes/Titulo';
import operaciones from './operaciones';

const Parcial1 = ({ navigation }) => {
    return (
      <View>
        <ScrollView>
          <Titulo titulo='Parcial1' subtitulo='Ingrese ambos numeros y selecciones una operacion' navigation={navigation} visible={true} />
         <operaciones /> 
        </ScrollView>
      </View>
    )
  }
export default Parcial1;
