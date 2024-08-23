import React from "react";

export const getPokemon = async (nombre: string) => {
    try {
        let respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/' + nombre);
        let json = await respuesta.json();
        return json;
    }
    catch(error) {
        console.log(error);
        throw error;
    }
}