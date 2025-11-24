import React, { useEffect, useState } from 'react';
import pokemonApiCall from '../../api/pokemonApiCall';
import axios from 'axios';
import "./Pokemon.css";
import { getPokemon } from '../../hooks/getPokemon';


export const Pokemon = () => {
    const [pokemon, setPokemon] = useState<any>();

   useEffect(() => {
    const fetchPokemon = async () => {
      try {
          const pokemonData = await getPokemon(); 
          setPokemon(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
    };

    fetchPokemon();
   }, []); 
    
    console.log('pokemon', pokemon)
    
 
    
    return (
        <>
            {pokemon && <div className='pokemon_card'>
                {pokemon.map((pok: any, index: number) => {
                    return (
                        <div>{pok.name}</div>
                    )
                })}
            </div>}
        </>
      );
}
 
