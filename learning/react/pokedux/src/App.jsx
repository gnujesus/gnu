/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import './App.css';

import { Col } from 'antd';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { useSelector, useDispatch } from 'react-redux';
import logo from './static/logo.svg';
import { setPokemons } from './actions';
import { useEffect } from 'react';

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then((res) => res.json())
      .then((res) => {
        dispatch(setPokemons(res.results));
      });
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
