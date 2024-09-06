import React, { useState } from 'react';
import {View, TextInput, Text, Pressable, Alert, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome6';

import { views } from '../_estilos/views';
import { textos } from '../_estilos/textos';
import { botones } from '../_estilos/botones';

const Parcial_1 = () =>{
    const [numero1, setnumero1 ] = useState ('');
    const [numero2, setnumero2 ] = useState ('');
    const [Resul,setResul ] = useState ('');

    const calcula = () =>{
        if ( numero1 === '' || numero2 === '') {
            Alert.alert ('error');
            return;

        }
        const num1 = parseInt(numero1 , 10)
        const num2 = parseInt(numero2, 10)

        let ResultadoOperaciones;

        switch (Operaciones){
            case 'suma':
                ResultadoOperaciones = num1 + num2;
                break;
            case 'resta':
                ResultadoOperaciones = num1 - num2;
                break;
            case 'Multi':
                ResultadoOperaciones = num1 * num2;
            case 'Dividir':
                ResultadoOperaciones = num1 / num2;


        }

        try {
            await AsyncStorage.setItem('resultado', JSON.stringify(ResultadoOperaciones));
            Alert.alert('Resultado Guardado', `Los números ingresados fueron ${numero1} y ${numero2}, y el resultado de la ${operacion} es: ${resultadoOperacion}`);
            setResul(ResultadoOperaciones);
          } catch (e) {
            Alert.alert('Error', 'No se pudo guardar el resultado');
          }
        };
      
    }
    return(
        <View style={[views.Parcial_1]}>
            <Text style={[textos.tituloLogin]}>Calculadora</Text>
            <View style={[views.inputView]}>

                <Icon name='calculador' size={24} color='black' solid />
                <TextInput
                    placeholder='numero 1'
                    keyboardType='numeric'
                    value={numero1}
                    onChangeText={setnumero1}
                    style={[views.input]}/>
            
            </View>
            <View style={[views.inputView]}>
                <Icon name='calcular' size={24} color='black' />
                <TextInput
                placeholder='numero 2'
                keyboardType='numeric'
                value={numero2}
                onChangeText={setNumero2}
                style={[views.input]}/>
        </View>
        <View style={botones.btn}>
        <Pressable style={[botones.btn]} onPress={() => calcular('suma')}>
          <Image source={require('../assets/images/sumar.png')} style={{ width: 24, height: 24, marginRight: 5 }} />
          <Text style={[textos.btn]}>Sumar</Text>
        </Pressable>
        <Pressable style={[botones.btn]} onPress={() => calcular('resta')}>
          <Image source={require('../assets/images/restar.png')} style={{ width: 24, height: 24, marginRight: 5 }} />
          <Text style={[textos.btn]}>Restar</Text>
        </Pressable>
        <Pressable style={[botones.btn]} onPress={() => calcular('multiplicacion')}>
          <Image source={require('../assets/images/multiplicar.png')} style={{ width: 24, height: 24, marginRight: 5 }} />
          <Text style={[textos.btn]}>Multiplicar</Text>
        </Pressable>
        <Pressable style={[botones.btn]} onPress={() => calcular('division')}>
          <Image source={require('../assets/images/dividir.png')} style={{ width: 24, height: 24, marginRight: 5 }} />
          <Text style={[textos.btn]}>Dividir</Text>
        </Pressable>
      </View>
      {resul !== null && (
        <Text style={[textos.resultado]}>
          Resultado: {resultado}
        </Text>
      )}


        </View> 
    )

}

export default Parcial_1;