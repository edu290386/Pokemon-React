import { useEffect, useState } from "react";
import { getPokemon } from "../helpers/getPokemon";

export const useFetchPokemon = (pokemon) => {
    const [infoPokemon, setInfoPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
  const getInfoPokemon = async () => {
    const newInfo = await getPokemon(pokemon);
    setInfoPokemon(newInfo);
    setIsLoading(false);
  };

  console.log(infoPokemon)
  useEffect(() => {
    getInfoPokemon();
  }, []);
  return {infoPokemon, isLoading}
}
