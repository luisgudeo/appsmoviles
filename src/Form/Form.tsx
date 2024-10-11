import React, {useState, useEffect} from 'react';
import { View, ScrollView, Modal, Text, Pressable, Alert, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Select from '../_componentes/Select';

import { botones } from '../_estilos/botones';
import { textos } from '../_estilos/textos';
import { views } from '../_estilos/views';
import Opciones from '../Principal/Opciones';

const Form = () => {
  const [mes, setMes] = useState(0);
  const [anio, setAnio] = useState(2000);
  const [meses, setMeses] = useState([]);
  const [anios, setAnios] = useState([]);
  useEffect(() => {
    let ans = [];
    let ms = []
    for (let i = 1995; i <= 2005; i++) {
      ans.push({id: i, valor: i.toString()});
    }
    ms.push({id: 1, valor: 'Enero'});
    ms.push({id: 1, valor: 'Febrero'});
    ms.push({id: 1, valor: 'Marzo'});
    ms.push({id: 1, valor: 'Abril'});
    ms.push({id: 1, valor: 'Mayo'});
    ms.push({id: 1, valor: 'Junio'});
    ms.push({id: 1, valor: 'Julio'});
    ms.push({id: 1, valor: 'Agosto'});
    ms.push({id: 1, valor: 'Septiembre'});
    ms.push({id: 1, valor: 'Octubre'});
    ms.push({id: 1, valor: 'Noviembre'});
    ms.push({id: 1, valor: 'Diciembre'});
    setAnios(ans);
    setMeses(ms);
  }, [])
  const cambioMes = (item: any) => {
    setMes(item.id);
  }
  const cambioAnio = (item: any) => {
    setAnio(item.id);
  }
  const calcular = () => {
    let anioactual = 2024;
    let mesactual = 10;
    let edad = anioactual - anio;
    //if (mesactual > mes) edad = edad - 1;
    Alert.alert("tu edad es " + edad + " años");
  }
  return (
    <View style={[views.body]}>
      <Text style={[textos.subtitulo]}>Seleccione mes</Text>
      <Select lista={meses} cambioValor={cambioMes} />
      <Text style={[textos.subtitulo]}>Seleccione año</Text>
      <Select lista={anios} cambioValor={cambioAnio} />
      <Pressable style={[botones.btn]} onPress={calcular}>
        <Text style={[textos.btn]}>Calcular</Text>
      </Pressable>
    </View>
  )
}

export default Form;