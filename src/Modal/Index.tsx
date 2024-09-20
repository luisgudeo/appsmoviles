import React from 'react';
import { View, ScrollView } from 'react-native';

import Titulo from '../_componentes/Titulo';
import VistaModal from './Modal';

const Modal = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Titulo titulo='Modal' subtitulo='Ejercicio modal' 
            navigation={navigation} visible={true} />
        <VistaModal/>
      </ScrollView>
    </View>
  )
}

export default Modal;