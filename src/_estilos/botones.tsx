import { StyleSheet } from "react-native";

export const botones = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        width: '100%',
        padding: 10,
        justifyContent: 'space-between',
        borderRadius: 10,
        marginBottom: 20
    },
    btnCam: {
        width: '100%',
        padding: 50,
        borderRadius: 20,
        marginBottom: 20,
        alignItems: 'center'
    },
    link: {
        width: '100%',
        alignItems: 'center',
        padding: 10,
        marginTop: 20
    }
});