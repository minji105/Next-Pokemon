export async function fetchPokemonsById(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
  const data = await res.json();

  return {
    id: id,
    name: data.names.find((el) => el.language.name === "ko").name,
    description: [
      ...new Set(
        data.flavor_text_entries
          .filter((el) => el.language.name === "ko")
          .map((el) => el.flavor_text)
      ),
    ],
    genera: data.genera.find((el) => el.language.name === "ko").genus,
    front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`,
  };
}
