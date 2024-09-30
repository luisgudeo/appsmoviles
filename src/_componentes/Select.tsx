import React, { useState } from "react";
import { View, Pressable, Modal, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import { botones } from "../_estilos/botones";
import { textos } from "../_estilos/textos";
import { views } from "../_estilos/views";

const Select = ({ lista, cambioValor }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [seleccionado, setSeleccionado] = useState({id: 0, valor: 'Seleccione...'});
  const cambiarSelect = (item) => {
    setSeleccionado(item);
    setModalVisible(false);
    cambioValor(item);
  }
  return(
    <View>
        <Pressable style={[views.inputView]} onPress={() => setModalVisible(true)}>
          <Text style={[textos.subtitulo]}>{seleccionado.valor}</Text>
          <Icon name='caret-down' color='white' size={32} />
        </Pressable>
        <Modal transparent={true} animationType="fade" visible={modalVisible}>
          <Pressable style={[views.bodyModal]} onPress={() => setModalVisible(false)}>
            <View style={[views.card]}>
              {
                lista.map((item, index) => {
                  return(
                    <Pressable key={index} style={[views.itemLista]} onPress={() => cambiarSelect(item)}>
                      <Text style={[textos.card]}>{item.valor}</Text>
                    </Pressable>
                  )
                })
              }
            </View>
          </Pressable>
        </Modal>
    </View>
  )
}

export default Select;