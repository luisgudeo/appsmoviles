import { StyleSheet } from "react-native";

export const botones = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        width: '100%',
        padding: 10,
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    link: {
        width: '100%',
        alignItems: 'center',
        padding: 10,
        marginTop: 20
    }
});