export const EvolutionPokemon = ({ bioPokemon, evolutionPokemon }) => {
  const { evolves_from_species } = bioPokemon;
  const { chain } = evolutionPokemon;

  let evolutions = [];
  evolutions = [...evolutions, chain.species.name];
  chain.evolves_to[0]?.species.name &&
    evolutions.push(chain.evolves_to[0].species.name);
  chain.evolves_to[0]?.evolves_to[0]?.species.name &&
    evolutions.push(chain.evolves_to[0]?.evolves_to[0]?.species.name);
  
  return (
    <div>
      <div>
        Evolves from:&nbsp;
        <span>{evolves_from_species?.name}</span>
      </div>
      <article>
        Chain Evolution:&nbsp;
        <span className="flex flex-wrap gap-1">
          {evolutions?.map(( evolution, index) => (
            <span className="" key={index}>
              {evolution}
              {evolutions.length - 1 == index ? "" : " =>"}
            </span>
          ))}
        </span>
      </article>
    </div>
  );
};
