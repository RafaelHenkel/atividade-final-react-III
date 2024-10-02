import { combineReducers } from '@reduxjs/toolkit';
import PokeSlice from './PokeSlice';

export default combineReducers({
  pokemons: PokeSlice,
});
