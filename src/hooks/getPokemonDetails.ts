import {
  PokemonDetailsObject,
  PokemonSpecies,
  PokemonFlavorTextEntry,
} from "../type/appTypes";

export async function getPokemonDetails(
  id: number
): Promise<PokemonDetailsObject | null> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) return null;

    const pokemon = await response.json();

    const speciesResponse = await fetch(pokemon.species.url);
    if (!speciesResponse.ok) return null;

    const species: PokemonSpecies = await speciesResponse.json();

    const descriptionEntry = species.flavor_text_entries.find(
      (entry: PokemonFlavorTextEntry) => entry.language.name === "en"
    );

    const description = descriptionEntry
      ? descriptionEntry.flavor_text.replace(/\n|\f/g, " ")
      : "No description available.";

    return {
      id: pokemon.id,
      name: pokemon.name,
      description,
      images: {
        One: pokemon.sprites.other["official-artwork"].front_default,
        Two: pokemon.sprites.other["home"].front_default,
        Three: pokemon.sprites.other["dream_world"].front_default,
      },
    };
  } catch (error) {
    console.error("Error in getPokemonDetails:", error);
    return null;
  }
}
