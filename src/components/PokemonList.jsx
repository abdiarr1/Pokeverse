import Pokemon from './Pokemon';
import { nanoid } from 'nanoid';

const PokemonList = ({ pokemon }) => {
  const renderPokemon = () => {
    return pokemon.map((poke) => {
      return <Pokemon key={nanoid()} {...poke} />;
    });
  };

  return (
    <article className="grid xs:grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 justify-evenly gap-y-6 gap-x-3 w-[60%] mx-auto">
      {renderPokemon()}
    </article>
  );
};

export default PokemonList;
