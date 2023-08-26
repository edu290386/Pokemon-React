import { ItemPokemon } from "./ItemPokemon";
import { useFetchPokemon } from "../hooks/useFetchPokemon";

export const GridPokemon = ({ pokemon }) => {
  const { infoPokemon, bioPokemon, evolutionPokemon, isLoading } = useFetchPokemon(pokemon);

  //   const [infoPokemon, setInfoPokemon] = useState([]);

  //   const getInfoPokemon = async () => {
  //     const newInfo = await getPokemon(pokemon);
  //     setInfoPokemon(newInfo);
  //   };

  //   useEffect(() => {
  //     getInfoPokemon();
  //   }, []);
  
  return (
    <>
      {isLoading ? <h2>Cargando...</h2> :
      <ItemPokemon infoPokemon={infoPokemon} evolutionPokemon={evolutionPokemon} bioPokemon={bioPokemon}/>}
    </>
  );
};
