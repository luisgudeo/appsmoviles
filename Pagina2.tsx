import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, Button, Alert, Switch} from 'react-native';

function Pagina2(): React.JSX.Element {
  const [valor, setValor] = useState(true);
  const pressBtn = () => {
    Alert.alert(
      'Prueba', 
      'Mensaje de prueba',
      [
        {
          text: 'Aceptar',
          onPress: () => {
            console.log('Se presionó aceptar');
          }
        }
      ]
    );
  }
  const cambiarValor = () => {
    setValor(!valor);
  }
  return (
    <View>
      <Button title='Presiona aqui' onPress={pressBtn} disabled={!valor}/>
      <Switch trackColor={{false: 'red', true: 'black'}}
      thumbColor='blue'
      value={valor} onValueChange={cambiarValor}/>
    </View>
  );
}


export default Pagina2;
