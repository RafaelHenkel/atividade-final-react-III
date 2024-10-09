import { combineReducers } from '@reduxjs/toolkit';
import PokeSlice from './PokeSlice';
import LikeSlice from './PokeLikes';
import PokeSearch from './PokeSearch';

export default combineReducers({
  pokemons: PokeSlice,
  pokeSearch: PokeSearch,
  likes: LikeSlice,
});
