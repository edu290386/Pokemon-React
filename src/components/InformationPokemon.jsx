export const InformationPokemon = ({ id, name, height, weight }) => {
  return (
    <>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <span>N°{id}:&nbsp;</span>
        {name?.toUpperCase()}
      </h5>
      <article>
        <span>Height: {(height * 0.3).toFixed(2)}m&nbsp;</span>
        <span>Weight: {(weight * 0.45).toFixed(0)}Kg</span>
      </article>
    </>
  );
};
