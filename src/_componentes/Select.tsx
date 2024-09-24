import React, { useState } from "react";
import { View, Pressable, Modal, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import { botones } from "../_estilos/botones";
import { textos } from "../_estilos/textos";
import { views } from "../_estilos/views";

const Select = ({ lista }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [seleccionado, setSeleccionado] = useState({id: 0, valor: 'Seleccione...'});
  return(
    <View>
        <Pressable style={[views.inputView]} onPress={() => setModalVisible(true)}>
          <Text style={[textos.subtitulo]}>{seleccionado.valor}</Text>
          <Icon name='caret-down' color='white' size={32} />
        </Pressable>
        <Modal transparent={true} animationType="fade" visible={modalVisible}>
          <View style={[views.bodyModal]}>
            <View style={[views.card]}></View>
          </View>
        </Modal>
    </View>
  )
}

export default Select;