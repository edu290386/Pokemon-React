import { AbilitiesPokemon } from "./AbilitiesPokemon";
import { EvolutionPokemon } from "./EvolutionPokemon";
import { InformationPokemon } from "./InformationPokemon";
import { StatisticPokemon } from "./StatisticPokemon";
import { TypePokemon } from "./TypePokemon";

export const ItemPokemon = ({ infoPokemon, bioPokemon, evolutionPokemon }) => {
  const { sprites, types, abilities, id, name, height, weight, stats } =
    infoPokemon;
    
  return (
    <>
      <a
        href="#"
        className="flex grow flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="ml-2 my-2 object-contain w-full rounded-t-lg h-48 md:w-48 md:rounded-none md:rounded-l-lg"
          src={sprites?.other.dream_world.front_default}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal text-left">
          <InformationPokemon
            id={id}
            name={name}
            height={height}
            weight={weight}
          />
          <AbilitiesPokemon abilities={abilities} />
          <TypePokemon types={types} />
          <EvolutionPokemon evolutionPokemon={evolutionPokemon} bioPokemon={bioPokemon}/>
          <StatisticPokemon stats={stats} />
        </div>
      </a>
    </>
  );
};
