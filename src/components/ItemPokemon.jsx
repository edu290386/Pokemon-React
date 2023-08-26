export const ItemPokemon = ({ infoPokemon }) => {
  const { sprites, types, abilities, id, name, height, weight, stats } =
    infoPokemon;
  console.log(stats?.[0].base_stat);
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
          <section>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <span>N°{id}:&nbsp;</span>
              {name?.toUpperCase()}
            </h5>
            <article>
              Type:&nbsp;
              <span>
                {types?.map(({ type }, index) => (
                  <span key={index}>
                    {type.name}
                    {types.length - 1 == index ? "." : ","}
                  </span>
                ))}
              </span>
            </article>

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
            <article>
              <span>Height: {(height * 0.3).toFixed(2)}m&nbsp;</span>
              <span>Weight: {(weight * 0.45).toFixed(0)}Kg</span>
            </article>
          </section>
          <section className="w-[250px]">
            <span className="text-sm font-medium text-blue-700 dark:text-white">
              {stats?.[0].stat.name.toUpperCase()}
            </span>
            <div className="w-full bg-gray-300 rounded-full dark:bg-gray-700">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: stats?.[0].base_stat }}
              >
                {Math.ceil(stats?.[0].base_stat * 0.4)}%
              </div>
            </div>
            <span className="text-sm font-medium text-blue-700 dark:text-white">
              {stats?.[1].stat.name.toUpperCase()}
            </span>
            <div className="w-[250px] bg-gray-300 rounded-full dark:bg-gray-700">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: stats?.[1].base_stat * 1.51 }}
              >
                {Math.ceil(stats?.[1].base_stat * 0.606)}%
              </div>
            </div>
            <span className="text-sm font-medium text-blue-700 dark:text-white">
            {stats?.[2].stat.name.toUpperCase()}
          </span>
          <div className="w-[250px] bg-gray-300 rounded-full dark:bg-gray-700">
            <div
              className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: stats?.[2].base_stat * 1.08 }}
            >
              {Math.ceil(stats?.[2].base_stat * 0.434)}%
            </div>
          </div>
          <span className="text-sm font-medium text-blue-700 dark:text-white">
            {stats?.[5].stat.name.toUpperCase()}
          </span>
          <div className="w-[250px] bg-gray-300 rounded-full dark:bg-gray-700">
            <div
              className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: stats?.[5].base_stat * 1.56 }}
            >
              {Math.ceil(stats?.[5].base_stat * 0.625)}%
            </div>
          </div>
          </section>

          
          
        </div>
      </a>
    </>
  );
};
