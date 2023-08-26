export const StatisticPokemon = ({ stats }) => {
  console.log(stats)
  return (
    <>
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
    </>
  );
};
