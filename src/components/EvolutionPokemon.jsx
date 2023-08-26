export const EvolutionPokemon = ({ bioPokemon, evolutionPokemon }) => {
  const { evolves_from_species } = bioPokemon;
  const {species, evolves_to} = evolutionPokemon.chain;
  console.log(species.name);
  return (
    <div>
      <div>
        Evolves from:&nbsp;
        <span>{evolves_from_species?.name}</span>
      </div>
      <div>
        Evolution Chain:&nbsp;
        <span>{evolves_from_species?.name}</span>
      </div>
    </div>
  );
};
