import React, {useState} from 'react';
import { Text, View, Pressable, Alert, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import { textos } from '../_estilos/textos';
import { botones } from '../_estilos/botones';
import { views } from '../_estilos/views';

import Tarjeta from '../_componentes/Tarjeta'

const Opciones = ({ navigation }) => {
    const Sumar = () => {
        
        let suma = 0;
        let numero1 = parseInt(num1);
        let numero2 = parseInt(num2);
        suma = numero1 + numero2;
        Alert.alert('El resultado de la suma es', suma.toString());
    }
    const Restar = () => {
        let resta = 0;
        let numero1 = parseInt(num1);
        let numero2 = parseInt(num2);
        resta = numero1 - numero2;
        Alert.alert('El resultado de la resta es', resta.toString());
    }
    const Multiplicar=()=> {
        let mult = 0;
        let numero1 = parseInt(num1);
        let numero2 = parseInt(num2);
        mult = numero1 * numero2;
        Alert.alert('El resultado de la multiplicacion es ', mult.toString());
    }
    const Dividir=()=> {
        let div = 0;
        let numero1 = parseInt(num1);
        let numero2 = parseInt(num2);
        div = numero1 / numero2;
        Alert.alert('El resultado de la division es', div.toString());
    }
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    return(
        <View style={{alignItems: 'center'}}>
            <TextInput value={num1} onChangeText={setNum1} style={[views.inputcalc,textos.neg]} />
            <TextInput value={num2} onChangeText={setNum2} style={[views.inputcalc, textos.neg]} />
            
            <Tarjeta titulo='Suma' boton='Sumar' icono='plus' press={Sumar}/>
            <Tarjeta titulo='Resta' boton='Restar' icono='minus' press={Restar}/>
            <Tarjeta titulo='Multiplicacion' boton='Multiplicar' icono='x' press={Multiplicar}/>
            <Tarjeta titulo='Division' boton='Dividir' icono='divide' press={Dividir}/>
        </View>
    )
}
export default Opciones;