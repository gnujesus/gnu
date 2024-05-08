import { SET_POKEMONS } from "../actions/types";

const initialState = {
  pokemons: [],
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        // copies currentState (which is an empty array if no state is provided)
        // and replaces pokemons with the action.payload (which should be an array with all the pokemons)
        ...state,
        pokemons: action.payload,
      };
    default:
      // if nothing is pased on the action.type, then return the current state (no changes)
      return state;
  }
};
