import React, {useState, useEffect} from 'react';
import { View, ScrollView, Modal, Text, Pressable, Alert, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Select from '../_componentes/Select';

import { botones } from '../_estilos/botones';
import { textos } from '../_estilos/textos';
import { views } from '../_estilos/views';
import Opciones from '../Principal/Opciones';

const VistaModal = () => {
  const [lista, setLista] = useState([]);
  const [operacion, setOperacion] = useState({id: 0, valor: 'Seleccione...'});
  const [verModal, setVerModal] = useState(false);
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const sumar = () => {
    let suma = 0;
    switch (operacion.id) {
      case 1:
        suma = parseInt(numero1) + parseInt(numero2);
        break;
      case 2:
        suma = parseInt(numero1) - parseInt(numero2);
        break;
      case 3:
        suma = parseInt(numero1) * parseInt(numero2);
        break;
      case 4:
        suma = parseInt(numero1) / parseInt(numero2);
        break;
      default:
        break;
    }
    setVerModal(false);
    Alert.alert('El resultado es: ' + suma);
  }
  useEffect(() => {
    let listado = [
      {id: 1, valor: 'Suma'},
      {id: 2, valor: 'Resta'},
      {id: 3, valor: 'Multiplicacion'},
      {id: 4, valor: 'Division'}
    ];
    setLista(listado);
  }, [])
  function cambioValor(item){
    setOperacion(item);
  }
  return (
    <View style={[views.body]}>
      <Select lista={lista} cambioValor={cambioValor} />
      <Pressable style={[botones.btn]} onPress={() => { setVerModal(true); }}>
        <Text style={[textos.btn]}>{operacion.valor}</Text>
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
            <Text style={[textos.btn]}>{operacion.valor}</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  )
}

export default VistaModal;