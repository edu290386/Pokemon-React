export const getPokemon = async (pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const res = await fetch(url);
  const data = await res.json();
  const url2 = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
  const res2 = await fetch(url2);
  const data2 = await res2.json();
  return { data, data2 };
};

export const evolutionChain = async (id) => {
  const url3 = `https://pokeapi.co/api/v2/evolution-chain/${id}`;
  const res3 = await fetch(url3);
  const data3 = await res3.json();
  return data3;
};
