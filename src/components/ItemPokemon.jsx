export const ItemPokemon = ({ infoPokemon }) => {
  const { sprites, forms } = infoPokemon;
  console.log(sprites);

  return (
    <>
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="ml-2 my-2 object-contain w-full rounded-t-lg h-48 md:w-48 md:rounded-none md:rounded-l-lg"
          src={sprites?.other.dream_world.front_default}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {forms?.[0].name.toUpperCase()}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>
    </>
  );
};
