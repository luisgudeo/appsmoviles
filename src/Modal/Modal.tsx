import React, {useState} from 'react';
import { View, ScrollView, Modal, Text, Pressable, Alert, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import { botones } from '../_estilos/botones';
import { textos } from '../_estilos/textos';
import { views } from '../_estilos/views';

const VistaModal = () => {
  const [verModal, setVerModal] = useState(false);
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const sumar = () => {
    let suma = parseInt(numero1) + parseInt(numero2);
    setVerModal(false);
    Alert.alert('El resultado es: ' + suma);
  }
  return (
    <View>
      <Pressable style={[botones.btn]} onPress={() => { setVerModal(true); }}>
        <Text style={[textos.btn]}>Presiona para iniciar una suma</Text>
      </Pressable>
      <Modal animationType='fade' transparent={true} visible={verModal}>
        <View style={[views.bodyModal]}>
          <View style={[views.inputView]}>
            <Icon name='user' size={24} color='black' solid/>
            <TextInput placeholder='Primer numero' value={numero1} onChangeText={setNumero1} style={[views.input]} />
          </View>
          <View style={[views.inputView]}>
            <Icon name='user' size={24} color='black' solid/>
            <TextInput placeholder='Primer numero' value={numero2} onChangeText={setNumero2} style={[views.input]} />
          </View>
          <Pressable style={[botones.btn]} onPress={sumar}>
            <Text style={[textos.btn]}>Realizar suma</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  )
}

export default VistaModal;