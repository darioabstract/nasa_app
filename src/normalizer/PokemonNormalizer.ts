import axios from "axios";

export const normalizePokemon = async (PokemongenOne: any) => {
  try {
    const normalizedData = await Promise.all(
      PokemongenOne.results.map(async (item: any) => {
        try {
          const res = await axios.get(item.url);

          const title = res.data.name;
          const mainImage = res.data.sprites.other.dream_world.front_default;

          return {
            name: title || "Untitled",
            mainImage: mainImage || "Image Not Found!",
          };
        } catch (error) {
          console.error("Error fetching details for", item.name, error);

          return {
            name: item.name || "Unknown Pokémon",
            mainImage: "Image Not Available",
          };
        }
      })
    );

    return normalizedData;
  } catch (error) {
    console.error("Error normalizing Pokémon data:", error);
    return [];
  }
};

//   return PokemongenOne.results.map((item: any) => {
//     return axios
//       .get(`${item.url}`)
//       .then((res) => {
//         const title = res.data.name;
//         const mainImage = res.data.sprites.front_default;
//         return {
//           name: title || "Untitled",
//           mainImage: mainImage || "Image Not Found!",
//         };
//       })
//       .catch((error) => console.log(error));
//   });
