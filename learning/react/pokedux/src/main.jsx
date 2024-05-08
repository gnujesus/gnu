import App from "./App.jsx";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import { pokemonsReducer } from "./reducers/pokemons.js";
// import './index.css'

const store = createStore(pokemonsReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  // The provider goes inside React.StrictMode
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
