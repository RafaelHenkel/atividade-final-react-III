import { createSlice } from '@reduxjs/toolkit';
import { PokeDefaultType } from '../../types/PokeType';

const initialState: PokeDefaultType = {
  id: 0,
  name: '',
  height: 0,
  weight: 0,
  base_experience: 0,
  abilities: [],
  sprites: {
    other: {
      'official-artwork': {
        front_default: '',
      },
    },
    back_default: '',
    front_default: '',
    front_shiny: '',
    back_shiny: '',
  },
  stats: [],
  types: [],
};

const PokePageSlice = createSlice({
  name: 'pokePage',
  initialState: { poke: initialState, loading: false },
  reducers: {
    addPokemonPage: (state, action) => {
      state.poke = action.payload;
    },
  },
});

export const { addPokemonPage } = PokePageSlice.actions;
export default PokePageSlice.reducer;
