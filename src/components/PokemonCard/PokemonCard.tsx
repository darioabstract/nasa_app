import React from 'react';
import "./PokemonCard.css";
import { PokemonFinalObject } from '../../type/appTypes';

export const PokemonCard = ({ pok }: { pok: PokemonFinalObject }) => {
    console.log("pok", pok)
    const IMAGE_NOTFOUND_PLACEHOLDER = 'https://nftcalendar.io/storage/uploads/2022/02/21/image-not-found_0221202211372462137974b6c1a.png'
    return ( 
      <div  className='card'>
                            <div className='image_container'>


                                <img
                                    className="pokemon_img"
                                    src={pok.mainImage || IMAGE_NOTFOUND_PLACEHOLDER}
                                    alt={pok.name|| 'Nasa Image'}
                                    loading='lazy'
                                    onError={(e) => e.currentTarget.src = IMAGE_NOTFOUND_PLACEHOLDER}
                                />
                                
                            </div>
                            <div className='title'>{pok.name.toUpperCase() || 'Title unavailable'}</div>
                        </div>
     );
}
 
