import React, {useState} from 'react';
import {View, TextInput, Button, Image} from 'react-native';

function Pagina1({navigation}): React.JSX.Element {
    const [texto, setTexto] = useState('');
    const [texto2, setTexto2] = useState('');
    const Sumar = () => {

    }
    const irPagina2 = () => {
        navigation.navigate('Pagina2');
    }
    return(
        <View>
            <TextInput value={texto} onChangeText={setTexto} style={{borderWidth: 1, borderStyle: 'solid'}} placeholder='Ingrese un numero'></TextInput>
            <TextInput value={texto2} onChangeText={setTexto2} style={{borderWidth: 1, borderStyle: 'solid'}} placeholder='Ingrese otro numero'></TextInput>
            <Button title='Sumar' onPress={Sumar} />
            <Button title='Ir a otra pagina' onPress={irPagina2} />
        </View>
    );
}

export default Pagina1;