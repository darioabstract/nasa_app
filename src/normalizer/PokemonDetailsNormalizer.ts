import axios from "axios";
import { PokemonResultsData } from "../type/appTypes";

export const normalizePokemonDetails = async (
  PokemongenOne: PokemonResultsData
) => {
  const PokemonId = PokemongenOne.id;
  const name = PokemongenOne.name;
  const retrieveDetailsObject = PokemongenOne.species.url;
  const resDescription = await axios.get(`${retrieveDetailsObject}`);
  const description = resDescription.data.flavor_text_entries[0].flavor_text;
  const images = {
    One: PokemongenOne.sprites.other.dream_world.front_default,
    Two: PokemongenOne.sprites.other.home.front_default,
    Three: PokemongenOne.sprites.other.home.front_shiny,
  };
  return {
    id: PokemonId,
    name: name,
    description: description,
    images: images,
  };
};
