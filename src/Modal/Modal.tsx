import React, {useState, useEffect} from 'react';
import { View, ScrollView, Modal, Text, Pressable, Alert, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Select from '../_componentes/Select';

import { botones } from '../_estilos/botones';
import { textos } from '../_estilos/textos';
import { views } from '../_estilos/views';

const VistaModal = () => {
  const [lista, setLista] = useState([]);
  const [verModal, setVerModal] = useState(false);
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const sumar = () => {
    let suma = parseInt(numero1) + parseInt(numero2);
    setVerModal(false);
    Alert.alert('El resultado es: ' + suma);
  }
  useEffect(() => {
    let listado = [
      {id: 1, valor: 'Opcion 1'},
      {id: 2, valor: 'Opcion 2'},
      {id: 3, valor: 'Opcion 3'},
      {id: 4, valor: 'Opcion 4'}
    ];
    setLista(listado);
  }, [])
  return (
    <View>
      <Select lista={lista} />
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