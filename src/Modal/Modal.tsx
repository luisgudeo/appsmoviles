import React, {useState} from 'react';
import { View, ScrollView, Modal, Text, Pressable } from 'react-native';

import { botones } from '../_estilos/botones';
import { textos } from '../_estilos/textos';
import { views } from '../_estilos/views';

const VistaModal = () => {
  const [verModal, setVerModal] = useState(false);
  return (
    <View>
      <Pressable style={[botones.btn]} onPress={() => { setVerModal(true); }}>
        <Text style={[textos.btn]}>Presiona para ver el modal</Text>
      </Pressable>
      <Modal animationType='fade' transparent={true} visible={verModal}>
        <View style={[views.bodyModal]}>
          <Pressable style={[botones.btn]} onPress={() => { setVerModal(false); }}>
            <Text style={[textos.btn]}>Presiona para cerrar el modal</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  )
}

export default VistaModal;