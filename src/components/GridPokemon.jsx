import { useEffect, useState } from "react";
import { getPokemon } from "../helpers/getPokemon";
import { ItemPokemon } from "./ItemPokemon";

export const GridPokemon = ({ pokemon }) => {
  const [infoPokemon, setInfoPokemon] = useState([]);
  
  const getInfoPokemon = async () => {
    const newInfo = await getPokemon(pokemon);
    setInfoPokemon(newInfo);
  };

  useEffect(() => {
    getInfoPokemon();
  }, []);

  return (
    <>
      <ItemPokemon infoPokemon={infoPokemon}/>
    </>
  );
};
