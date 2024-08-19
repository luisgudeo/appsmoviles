import React, { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { views } from '../_estilos/views';
import { botones } from '../_estilos/botones';
import { textos } from '../_estilos/textos';

import { getPokemon } from '../_api/gets';

const Lista = () => {
    const [entrada, setEntrada] = useState('');
    const [lista, setLista] = useState([
        {nombre: 'Luis', apellido: 'Giron', correo: 'luisg@udeo.edu.gt'},
        {nombre: 'Jose', apellido: 'Perez', correo: 'josep@udeo.edu.gt'},
        {nombre: 'Jose', apellido: 'Giron', correo: 'joseg@udeo.edu.gt'},
    ]);
    const [listaFiltrada, setListaFiltrada] = useState([]);
    const Buscar = async () => {
        setListaFiltrada([]);
        let nuevaLista = [];
        lista.map((item) => {
            if(item.nombre.toLowerCase().includes(entrada.toLowerCase())){
                nuevaLista.push(item);
            }
            else if(item.apellido.toLowerCase().includes(entrada.toLowerCase())){
                nuevaLista.push(item);
            }
            else if(item.correo.toLowerCase().includes(entrada.toLowerCase())){
                nuevaLista.push(item);
            }
        });
        if(nuevaLista.length==0) {
            console.log('no hay coincidencias');
        }
        setListaFiltrada(nuevaLista);
        console.log('llama endpoint');
        let res = await getPokemon('1');
        console.log(res.sprites);
        console.log('finaliza endpoint');
    }
    return (
        <View style={[views.body]}>
            <View style={[views.inputView]}>
                <Icon name='comment-dots' size={24} color='black' />
                <TextInput placeholder='Escribe algo' value={entrada} onChangeText={setEntrada} style={[views.input]} />
            </View>
            <Pressable style={[botones.btn]} onPress={Buscar}>
                <Text style={[textos.btn]}>Buscar</Text>
                <Icon name='comment-dots' size={32} color='white' />
            </Pressable>
            <View style={{paddingBottom: 20}}></View>
            {listaFiltrada.map((item, index) => {
                return(
                <View key={index}>
                    <Text style={[textos.subtitulo]}>{item.nombre} {item.apellido}</Text>
                </View>
            )})}
        </View>
    )
}

export default Lista;