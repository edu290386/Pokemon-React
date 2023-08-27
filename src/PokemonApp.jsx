import { useState } from "react";
import { AddPokemon , GridPokemon } from "./components"

export const PokemonApp = () => {
  const [pokemons, setPokemons] = useState(["charizard"]);

  const onAddPokemon = (newPokemon) => {
    const duplicatedPokemon = pokemons.some(
      (pokemon) => pokemon.toLowerCase() == newPokemon.toLowerCase()
    );
    if (duplicatedPokemon) return;
    setPokemons([newPokemon, ...pokemons]);
  };

  return (
    <>
      <h1>PokemonApp</h1>
      <AddPokemon onAddPokemon={(value) => onAddPokemon(value)} />
      <div className="flex flex-wrap gap-2 justify-center">
        {pokemons.map((pokemon) => (
          <GridPokemon key={pokemon} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};
