import AsyncStorage from "@react-native-async-storage/async-storage";

export const CrearDatos = async () => {
    let datos = await AsyncStorage.getItem('usuarios');
    console.log(datos);
    if (datos == null) {
        let usuarios = [];
        usuarios.push({user: 'root', pass: 'root'});
        usuarios.push({user: 'admin', pass: 'admin'});
        usuarios.push({user: 'luis', pass: 'admin123'});
        usuarios.push({user: 'usuario', pass: 'usuario123'});
        await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
}