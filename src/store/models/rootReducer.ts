import { combineReducers } from '@reduxjs/toolkit';
import PokeSlice from './PokeSlice';
import LikeSlice from './PokeLikesSlice';
import PokeSearch from './PokeSearchSlice';
import PokePageSlice from './PokePageSlice';

export default combineReducers({
  pokemons: PokeSlice,
  pokeSearch: PokeSearch,
  likes: LikeSlice,
  pokePage: PokePageSlice,
});
