import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import PokemonList from './components/PokemonList';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      setPokemon(data.results);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  console.log(pokemon);

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Sorry, there was an error</div>;

  return (
    <main className="p-10">
      <Navbar />
      <Search />
      <PokemonList pokemon={pokemon} />
    </main>
  );
}

export default App;
