/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import './App.css';

import { Col } from 'antd';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import logo from './static/logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setPokemons } from './actions';
import { getPokemon, getPokemonDetails } from './api';

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      const pokemonsDetailed = await Promise.all(
        pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(pokemonsDetailed));
    };

    fetchPokemons();
  }, []);

  return (
    <div className='App'>
      <Col
        span={4}
        offset={10}>
        <img
          src={logo}
          alt='logo'
          style={{ marginBottom: 20 }}
        />
      </Col>
      <Col
        span={8}
        offset={8}>
        <Searcher />
      </Col>

      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
