import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';

const Pokemon = ({ name, url }) => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    setPokemon(data);
  };

  console.log(pokemon);

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <PokemonCard
      name={name}
      src={pokemon?.sprites?.front_default}
      defaultAttack={
        pokemon?.moves?.at(18)?.move?.name || pokemon?.moves?.at(1)?.move?.name
      }
      level={pokemon?.stats?.at(0)?.base_stat}
    />
  );

  // return <img src={pokemon?.sprites?.front_shiny} alt={name} />;
};

export default Pokemon;
