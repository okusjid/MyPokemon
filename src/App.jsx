import Card from "./components/Card";
import { useGetAllPokemonQuery } from "./store/Pokemon/pokemonApiSlice";

export default function App() {
  const { data, error, isLoading } = useGetAllPokemonQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <h1 className="text-center font-medium text-3xl  text-blue-300 hover:text-blue-700 hover:font-bold">
        POKEMON
      </h1>

      <div className=" p-4 flex justify-evenly gap-4 flex-wrap">
        {data?.results.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
