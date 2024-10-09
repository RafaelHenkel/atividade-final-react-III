import { combineReducers } from '@reduxjs/toolkit';
import PokeSlice from './PokeSlice';
import LikeSlice from './PokeLikes';

export default combineReducers({
  pokemons: PokeSlice,
  likes: LikeSlice,
});
