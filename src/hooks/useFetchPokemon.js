import { useEffect, useState } from "react";
import { evolutionChain, getPokemon } from "../helpers/getPokemon";

export const useFetchPokemon = (pokemon) => {
  const [infoPokemon, setInfoPokemon] = useState([]);
  const [bioPokemon, setBioPokemon] = useState([]);
  const [evolutionPokemon, setEvolutionPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getInfoPokemon = async () => {
    const { data, data2 } = await getPokemon(pokemon);

    setInfoPokemon(data);
    setBioPokemon(data2);

    const idEvolution = getChainEvolution(data2?.evolution_chain.url);
    const data3 = await evolutionChain(idEvolution);
    setEvolutionPokemon(data3);
    setIsLoading(false);
  };

  const getChainEvolution = (id) => {
    const array = id.split("/");
    const idEvolution = array[array.length - 2];
    return idEvolution;
  };

  useEffect(() => {
    getInfoPokemon();
  }, []);
  return { infoPokemon, bioPokemon, evolutionPokemon, isLoading };
};
