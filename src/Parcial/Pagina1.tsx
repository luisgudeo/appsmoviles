import React, { useEffect, useState } from 'react';
import { Alert, TextInput, View, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { botones } from '../_estilos/botones';
import { views } from '../_estilos/views';
import { textos } from '../_estilos/textos';
import Titulo from '../_componentes/Titulo';

const Pagina1 = ({ navigation }) => {
    const [primero, setPrimero] = useState('');
    const [segundo, setSegundo] = useState('');
    const anterior = async () => {
        let datos = await AsyncStorage.getItem('anterior');
        console.log(datos);
        if (datos == null) {
            Alert.alert("No hay operaciones anteriores");
        } else {
            let antes: any = JSON.parse(datos);
            Alert.alert("El resultado anterior fue " + antes.valor + " y la operación fue " + antes.operacion);
        }
    }
    useEffect(() => {
       anterior();
    }, []);
    const guardar = (valor: any, operacion: any) => {
        let datos = {valor: valor, operacion: operacion};
        AsyncStorage.setItem('anterior', JSON.stringify(datos));
    }
    const sumar = () => {
        let valor = parseInt(primero) + parseInt(segundo);
        Alert.alert("El resultado es: " + valor);
        guardar(valor, 'Suma');
    }
    const restar = () => {
        let valor = parseInt(primero) - parseInt(segundo);
        Alert.alert("El resultado es: " + valor);
        guardar(valor, 'Suma');
    }
    const multi = () => {
        let valor = parseInt(primero) * parseInt(segundo);
        Alert.alert("El resultado es: " + valor);
        guardar(valor, 'Suma');
    }
    const dividir = () => {
        let valor = parseInt(primero) / parseInt(segundo);
        Alert.alert("El resultado es: " + valor);
        guardar(valor, 'Suma');
    }
    return(
        <View style={[views.body]}>
            <Titulo titulo='Parcial' subtitulo='Ingrese ambos numero y seleccione una operación' navigation={navigation} visible={true} />
            <View style={[views.inputView]}>
                <Icon name='user' size={24} color='black' solid/>
                <TextInput placeholder='Primer numero' value={primero} onChangeText={setPrimero} style={[views.input]} />
            </View>
            <View style={[views.inputView]}>
                <Icon name='user' size={24} color='black' solid/>
                <TextInput placeholder='Segundo numero' value={segundo} onChangeText={setSegundo} style={[views.input]} />
            </View>
            <Pressable style={[botones.btn]} onPress={sumar}>
                <Icon name='right-to-bracket' size={24} color='white' solid/>
                <Text style={[textos.btn]}>Sumar</Text>
            </Pressable>
            <Pressable style={[botones.btn]} onPress={restar}>
                <Icon name='right-to-bracket' size={24} color='white' solid/>
                <Text style={[textos.btn]}>Restar</Text>
            </Pressable>
            <Pressable style={[botones.btn]} onPress={multi}>
                <Icon name='right-to-bracket' size={24} color='white' solid/>
                <Text style={[textos.btn]}>Multiplicar</Text>
            </Pressable>
            <Pressable style={[botones.btn]} onPress={dividir}>
                <Icon name='right-to-bracket' size={24} color='white' solid/>
                <Text style={[textos.btn]}>Dividir</Text>
            </Pressable>
        </View>
    )
}

export default Pagina1;