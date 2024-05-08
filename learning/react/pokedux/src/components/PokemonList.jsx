import { Flex } from "antd";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons = Array(10).fill("") }) {
  return (
    <div
      className='pokemonlist'
      style={{ marginTop: "20px" }}>
      <Flex
        wrap='wrap'
        gap='large'
        justify='center'>
        {pokemons.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
            />
          );
        })}
      </Flex>
    </div>
  );
}
