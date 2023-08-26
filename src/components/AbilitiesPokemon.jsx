export const AbilitiesPokemon = ({ abilities }) => {
  return (
    <>
      <article>
        Abilities:&nbsp;
        <span>
          {abilities?.map(({ ability }, index) => (
            <span key={index}>
              {ability.name}
              {abilities.length - 1 == index ? "." : ","}
            </span>
          ))}
        </span>
      </article>
    </>
  );
};
