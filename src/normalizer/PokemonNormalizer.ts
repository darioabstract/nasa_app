import axios from "axios";
import { Pokemon, PokemonResults } from "../type/appTypes";

export const normalizePokemon = async (PokemongenOne: Pokemon) => {
  try {
    const normalizedData = await Promise.all(
      PokemongenOne.results.map(async (item: PokemonResults) => {
        try {
          const res = await axios.get(item.url);
          const PokemonId = res.data.id;
          const title = res.data.name;
          const mainImage = res.data.sprites.other.dream_world.front_default;

          return {
            id: PokemonId,
            name: title || "Untitled",
            mainImage: mainImage || "Image Not Found!",
          };
        } catch (error) {}
      })
    );

    return normalizedData;
  } catch (error) {
    console.error("Error normalizing Pokémon data:", error);
    return [];
  }
};
