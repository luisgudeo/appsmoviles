import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { views } from '../_estilos/views';
import { botones } from '../_estilos/botones';
import { textos } from '../_estilos/textos';

export default function operaciones() {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [resultado, setResultado] = useState(null);

    const sumar = () => setResultado(parseFloat(numero1) + parseFloat(numero2));
    const restar = () => setResultado(parseFloat(numero1) - parseFloat(numero2));
    const multiplicar = () => setResultado(parseFloat(numero1) * parseFloat(numero2));
    const dividir = () => {
        if (parseFloat(numero2) !== 0) {
            setResultado(parseFloat(numero1) / parseFloat(numero2));
        } else {
            setResultado('Error: División por 0');
        }
    };

    return (
        <View style={[views.body]}>
            {/* Entrada para el primer número */}
            <View style={[views.inputView]}>
                <Icon name='comment-dots' size={24} color='black' />
                <TextInput
                    placeholder='Escribe el primer número'
                    value={numero1}
                    onChangeText={setNumero1}
                    keyboardType='numeric'
                    style={[views.input]}
                />
            </View>

            {/* Entrada para el segundo número */}
            <View style={[views.inputView]}>
                <Icon name='comment-dots' size={24} color='black' />
                <TextInput
                    placeholder='Escribe el segundo número'
                    value={numero2}
                    onChangeText={setNumero2}
                    keyboardType='numeric'
                    style={[views.input]}
                />
            </View>

            {/* Botón para sumar */}
            <Pressable style={[botones.btn]} onPress={sumar}>
                <Text style={[textos.btn]}>Sumar</Text>
                <Icon name='comment-dots' size={32} color='white' />
            </Pressable>
            <View style={{paddingBottom: 20}}></View>

            {/* Botón para restar */}
            <Pressable style={[botones.btn]} onPress={restar}>
                <Text style={[textos.btn]}>Restar</Text>
                <Icon name='comment-dots' size={32} color='white' />
            </Pressable>
            <View style={{paddingBottom: 20}}></View>

            {/* Botón para multiplicar */}
            <Pressable style={[botones.btn]} onPress={multiplicar}>
                <Text style={[textos.btn]}>Multiplicar</Text>
                <Icon name='comment-dots' size={32} color='white' />
            </Pressable>
            <View style={{paddingBottom: 20}}></View>

            {/* Botón para dividir */}
            <Pressable style={[botones.btn]} onPress={dividir}>
                <Text style={[textos.btn]}>Dividir</Text>
                <Icon name='comment-dots' size={32} color='white' />
            </Pressable>
            <View style={{paddingBottom: 20}}></View>

            {/* Resultado */}
            {resultado !== null && (
               <View style={{alignItems: 'center'}}>
                    <Text style={resultado}>Es el resultado</Text>
                </View>
            )}
        </View>
    );
}

export default operaciones;