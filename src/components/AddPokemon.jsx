import { useState } from "react";

export const AddPokemon = ({ onAddPokemon }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInput = (e) => {
    let { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddPokemon(inputValue.input);
    setInputValue("");
  };

  return (
    <div className="m-12">
      <form onSubmit={onSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={handleInput}
            name="input"
            value={inputValue.input || ""}
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Choose Pokemon"
            required
          />
          <button
            onClick={onSubmit}
            type="submit"
            className="text-white absolute right-2.5 top-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-[7px]"
          >
            Search Pokemon
          </button>
        </div>
      </form>
    </div>
  );
};
