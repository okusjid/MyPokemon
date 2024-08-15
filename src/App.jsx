import Card from "./components/Card";
import { useState } from "react";
import { useGetAllPokemonQuery } from "./store/Pokemon/pokemonApiSlice";

export default function App() {
  const { data, error, isLoading } = useGetAllPokemonQuery();
  const[search, setSearch] = useState("");

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 m-auto">
      <h1 className="text-center font-medium text-3xl  text-blue-300 hover:text-blue-700 hover:font-bold">
        POKEMON
      </h1>
      <input type="text" value={search} onChange={() => handleSearch(search)} className="border-2 border-blue-500 rounded-md m-4 p-2"/>
        {data?.results.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
  );
}
