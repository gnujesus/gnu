import { SET_POKEMONS } from "./types";

// payload are the new pokemons
export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});
