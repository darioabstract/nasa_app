import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import pokemonApiCall from '../../api/pokemonApiCall';
import "./PokemonDetails.css";

export const PokemonDetails = () => {
    const [pokemonDetails, setPokemonDetails] = useState<any>();
    const params = useParams();
    console.log(params.id);

    useEffect(() => {
        pokemonApiCall.get(`pokemon-species/${params.id}`).then((res) => setPokemonDetails(res.data))
    }, []);

    console.log(pokemonDetails);
    return ( 
        <>
            {pokemonDetails &&
                <div className='pokemon_details_card'>
                    <div className='name'>{pokemonDetails.name.toUpperCase()}</div>
                    <div className='description'>{pokemonDetails.flavor_text_entries[0].flavor_text}</div>
            </div>}
        </>
     );
}
 
