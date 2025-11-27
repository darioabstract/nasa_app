import pokemonApiCall from "../api/pokemonApiCall";
import { normalizePokemonDetails } from "../normalizer/PokemonDetailsNormalizer";

export const getPokemonDetails = async (id: number) => {
  try {
    const res = await pokemonApiCall.get(`pokemon/${id}`);

    const PokemongenOne = res.data;
    console.log(PokemongenOne, "data");

    const simplifiedPokemonDetailsData = normalizePokemonDetails(PokemongenOne);

    return simplifiedPokemonDetailsData;
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    return [];
  }
};
