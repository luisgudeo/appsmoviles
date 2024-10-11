import React from 'react';
import { View, ScrollView } from 'react-native';

import Titulo from '../_componentes/Titulo';
import ViewForm from './Form';

const Modal = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Titulo titulo='Modal' subtitulo='Formulario' 
            navigation={navigation} visible={true} />
        <ViewForm/>
      </ScrollView>
    </View>
  )
}

export default Modal;