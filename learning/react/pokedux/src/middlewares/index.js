// A function that returns another function

export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const addCustomPokemon = (store) => (next) => (action) => {
  const featuredPokemonArr = [
    {
      name: 'Agumon Salvaje',
      url: 'https://static.wikia.nocookie.net/digimonadventure6597/images/6/64/Agumon01.png/revision/latest?cb=20200705135037',
    },
    ...action.action.payload,
  ];

  const updatedAction = {
    ...action,
    action: { ...action.action, payload: featuredPokemonArr },
  };

  next(updatedAction);
};
