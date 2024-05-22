import App from './App.jsx';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { compose, legacy_createStore as createStore } from 'redux';
import { pokemonsReducer } from './reducers/pokemons.js';
// import './index.css'

// Middlewares
import { applyMiddleware } from 'redux';
import { logger } from './middlewares';

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
);

const store = createStore(pokemonsReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(
  // The provider goes inside React.StrictMode
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
