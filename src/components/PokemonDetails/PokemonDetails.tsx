import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import { getPokemonDetails } from '../../hooks/getPokemonDetails';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PokemonDetailsObject } from '../../type/appTypes';

export const PokemonDetails = () => {
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsObject |null>(null);
    const params = useParams();

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const pokemonData = await getPokemonDetails(Number(params.id));
                setPokemonDetails(pokemonData);
            } catch (error) {
                console.error("Error fetching Pokemon:", error);
            }
        };

        fetchPokemonDetails();
    }, [params.id]);

    return (
        <>
            {pokemonDetails &&
                <div className='pokemon_details_card'>

                    <div className='name'>{pokemonDetails.name.toUpperCase()}</div>

                    <Suspense fallback={<div>Loading...</div>}>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation
                            pagination={{ clickable: true }}
                            slidesPerView={1}
                            speed={800}
                            spaceBetween={0}
                            loop={false}
                        >
                            <SwiperSlide>
                                <img className="img_one" src={pokemonDetails.images.One} alt={`img_one_${pokemonDetails.name}`} />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img className="img_two" src={pokemonDetails.images.Two} alt={`img_two_${pokemonDetails.name}`} />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img className="img_three" src={pokemonDetails.images.Three} alt={`img_three_${pokemonDetails.name}`} />
                            </SwiperSlide>
                        </Swiper>
                    </Suspense>
                    <div className='description'>{pokemonDetails.description}</div>

                </div>
            }
        </>
    );
};
