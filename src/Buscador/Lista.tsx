import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { views } from '../_estilos/views';
import { botones } from '../_estilos/botones';
import { textos } from '../_estilos/textos';

import { getPokemon } from '../_api/gets';

const Lista = () => {
    const [entrada, setEntrada] = useState('');
    const [respuesta, setRespuesta] = useState({});
    const Buscar = async () => {
        try {
            let res = await getPokemon(entrada.toLowerCase());
            console.log(res.sprites);
            setRespuesta(res);
        } catch(error) {
            setRespuesta({});
            console.log(error);
        }
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
            {respuesta.sprites ?
                <View style={[views.card]}>
                    <Text style={[textos.card]}>Nombre: {respuesta.name}</Text>
                    <Text style={[textos.card]}>Peso: {respuesta.weight}</Text>
                    <Image style={{width:200, height:200}} source={{uri: respuesta.sprites.front_default}} />
                </View>
            :
                <View style={{alignItems: 'center'}}>
                    <Text style={[textos.subtitulo]}>No existen datos para mostrar</Text>
                </View>
            }
        </View>
    )
}

export default Lista;