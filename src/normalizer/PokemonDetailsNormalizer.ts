import axios from "axios";
import { Pokemon, PokemonResults, PokemonResultsData } from "../type/appTypes";

export const normalizePokemonDetails = async (
  PokemongenOne: PokemonResultsData
) => {
  console.log("this", PokemongenOne);
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

// import axios from "axios";
// import { Pokemon, PokemonResults } from "../type/appTypes";

// export const normalizePokemonDetails = async (PokemongenOne: Pokemon) => {
//   console.log(PokemongenOne, "here");
//   try {
//     const normalizedData = await Promise.all(
//       PokemongenOne.results.map(async (item: PokemonResults) => {
//         try {
//           const res = await axios.get(item.url);
//           const PokemonId = res.data.id;
//           const name = res.data.name;
//           const retrieveDetailsObject = res.data.species.url;
//           const resDescription = await axios.get(`${retrieveDetailsObject}`);
//           const description =
//             resDescription.data.flavor_text_entries[0].flavor_text;
//           const mainImage = res.data.sprites.other.dream_world.front_default;
//           const imageTwo = res.data.sprites.other.official_artwork.front_shiny;
//           const imageThree =
//             res.data.sprites.other.official_artwork.front_default;

//           const detailsImages = [mainImage, imageTwo, imageThree];

//           return {
//             id: PokemonId,
//             name: name || "Untitled",
//             description: description || "No description available",
//             detailsImages: detailsImages,
//           };
//         } catch (error) {}
//       })
//     );

//     return normalizedData;
//   } catch (error) {
//     console.error("Error normalizing Pokémon data:", error);
//     return [];
//   }
// };
