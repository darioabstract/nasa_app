import React, { useEffect, useState } from 'react';
import pokemonApiCall from '../../api/pokemonApiCall';
import axios from 'axios';
import "./Pokemon.css";
import { getPokemon } from '../../hooks/getPokemon';
import { PokemonCard } from '../PokemonCard/PokemonCard';


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
    
    
 
    
    return (
        <>
            
            {pokemon && <div className='main_container'>
                {pokemon.map((pok: any, index: number) => {
                    return (
                        <PokemonCard pok={pok} />
                    )
                })}
            </div>}
        </>
      );
}
 
