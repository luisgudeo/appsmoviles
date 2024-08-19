import { StyleSheet } from "react-native";

export const views = StyleSheet.create({
    card: {
        width: '95%',
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 15,
        margin: 10
    },
    titulo: {
        width: '100%',
        paddingVertical: 30,
        paddingHorizontal: 10
    },
    body: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    inputView: {
        width: '100%',
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: 'white'
    },
    input: {
        padding: 5,
        flex: 1
    }
});